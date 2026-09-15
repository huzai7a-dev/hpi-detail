import "server-only";
import { prisma } from "@/lib/prisma";
import { freemius } from "@/lib/freemius";
import { sendMail } from "@/lib/email";
import { generateInvoicePdf } from "@/lib/invoice/generateInvoicePdf";
import { renderCustomerReceiptEmail, renderOwnerNotificationEmail } from "@/lib/emailTemplates";
import { PACKAGE_OPTIONS, type PackageType } from "@/lib/vehicleOrder";
import type { Order } from "@/generated/prisma/client";

/**
 * Each purchase here is a standalone, one-off report — never an ongoing subscription.
 * Freemius still opens a subscription record per checkout and refuses a second checkout
 * from the same email while one is "active" ("You are already on an active subscription").
 * Cancelling it right after fulfillment (a no-op if the plan wasn't recurring to begin with)
 * frees the customer's account up to buy the next report normally.
 */
async function cancelUnderlyingSubscription(order: Order) {
  if (!order.freemiusLicenseId) return;

  try {
    await freemius.api.license.update(order.freemiusLicenseId, { cancel_subscription: true });
  } catch (error) {
    console.error("Failed to cancel Freemius subscription for license", {
      orderId: order.id,
      licenseId: order.freemiusLicenseId,
      error,
    });
  }
}

export async function fulfillOrder(order: Order) {
  if (order.invoiceSentAt) return;

  await cancelUnderlyingSubscription(order);

  try {
    const { invoiceNumber, pdf } = await generateInvoicePdf(order);
    const packageOption = PACKAGE_OPTIONS.find((option) => option.value === (order.packageType as PackageType));
    const packageLabel = packageOption?.label ?? order.packageType;
    const price = packageOption?.price ?? 0;
    const invoiceAttachment = { filename: `${invoiceNumber}.pdf`, content: pdf };

    await sendMail({
      to: order.email,
      subject: `Your ${packageLabel} report invoice (${invoiceNumber})`,
      html: renderCustomerReceiptEmail(order, packageLabel),
      attachments: [invoiceAttachment],
    });

    if (process.env.OWNER_NOTIFICATION_EMAIL) {
      await sendMail({
        to: process.env.OWNER_NOTIFICATION_EMAIL,
        subject: `New paid order — ${packageLabel} (${invoiceNumber})`,
        html: renderOwnerNotificationEmail(order, packageLabel, price, invoiceNumber),
        attachments: [invoiceAttachment],
      });
    }

    await prisma.order.update({
      where: { id: order.id },
      data: { invoiceNumber, invoiceSentAt: new Date() },
    });
  } catch (error) {
    console.error("Failed to fulfill order", { orderId: order.id, error });
  }
}
