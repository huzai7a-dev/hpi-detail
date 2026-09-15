import { freemius } from "@/lib/freemius";
import { prisma } from "@/lib/prisma";
import { fulfillOrder } from "@/lib/fulfillOrder";

const listener = freemius.webhook.createListener();

async function markOrderPaid(email: string | undefined, planId: string | undefined, licenseId: string) {
  if (!email || !planId) return;

  const order = await prisma.order.findFirst({
    where: { email, freemiusPlanId: planId, status: "pending" },
    orderBy: { createdAt: "desc" },
  });

  if (!order) return;

  const updatedOrder = await prisma.order.update({
    where: { id: order.id },
    data: { status: "paid", freemiusLicenseId: licenseId },
  });

  await fulfillOrder(updatedOrder);
}

listener.on("license.created", async ({ objects: { license, user } }) => {
  await markOrderPaid(user?.email, license.plan_id ? String(license.plan_id) : undefined, String(license.id));
});

listener.on(["license.cancelled", "license.expired"], async ({ objects: { license } }) => {
  await prisma.order.updateMany({
    where: { freemiusLicenseId: String(license.id), status: "paid" },
    data: { status: "failed" },
  });
});

export const POST = freemius.webhook.createRequestProcessor(listener);
