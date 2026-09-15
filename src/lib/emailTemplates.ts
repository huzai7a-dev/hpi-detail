import type { Order } from "@/generated/prisma/client";

const colors = {
  navy: "#374047",
  navyLight: "#525f7f",
  muted: "#8a94a6",
  border: "#e1e5ea",
  surface: "#edeff1",
  accent: "#f9661c",
  accentTint: "#fdeae0",
};

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid ${colors.border};font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;color:${colors.muted};white-space:nowrap;">${label}</td>
      <td style="padding:10px 16px;border-bottom:1px solid ${colors.border};font-size:14px;color:${colors.navy};">${value}</td>
    </tr>
  `;
}

function emailShell(options: { preheader: string; body: string }) {
  return `
    <div style="display:none;max-height:0;overflow:hidden;">${options.preheader}</div>
    <div style="background-color:${colors.surface};padding:32px 16px;font-family:Helvetica,Arial,sans-serif;">
      <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid ${colors.border};">
        <tr>
          <td style="background-color:${colors.navy};padding:24px 32px;">
            <span style="font-size:18px;font-weight:700;color:#ffffff;letter-spacing:0.3px;">Solera HPI</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">${options.body}</td>
        </tr>
        <tr>
          <td style="padding:20px 32px;background-color:${colors.surface};text-align:center;font-size:11px;color:${colors.muted};">
            Solera HPI &middot; This is an automated message.
          </td>
        </tr>
      </table>
    </div>
  `;
}

export function renderCustomerReceiptEmail(order: Order, packageLabel: string) {
  const body = `
    <p style="margin:0 0 16px;font-size: 15px;color:${colors.navy};">Hi ${order.firstName},</p>
    <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:${colors.navyLight};">
      Thanks for your order. Your payment has been received and your <strong>${packageLabel}</strong> vehicle
      inspection report for <strong>${order.vin}</strong> will be delivered within the stated timeframe.
      Your invoice is attached to this email as a PDF.
    </p>
    <p style="margin:0;font-size:14px;color:${colors.navyLight};">Solera HPI</p>
  `;

  return emailShell({ preheader: `Your ${packageLabel} report invoice is attached.`, body });
}

export function renderOwnerNotificationEmail(order: Order, packageLabel: string, price: number, invoiceNumber: string) {
  const rows = [
    detailRow("Invoice", invoiceNumber),
    detailRow("Package", `${packageLabel} &mdash; £${price.toFixed(2)}`),
    detailRow("Vehicle Reg / VIN", order.vin),
    detailRow("Vehicle", `${order.category} &middot; ${order.model} &middot; ${order.year}`),
    detailRow("Customer", `${order.firstName} ${order.lastName}`),
    detailRow("Email", order.email),
    detailRow(
      "Order date",
      order.createdAt.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    ),
  ].join("");

  const body = `
    <table role="presentation" width="100%" style="margin-bottom:20px;">
      <tr>
        <td>
          <span style="display:inline-block;padding:4px 12px;border-radius:999px;background-color:${colors.accentTint};color:${colors.accent};font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;">
            Payment received
          </span>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 20px;font-size:20px;font-weight:700;color:${colors.navy};">£${price.toFixed(2)} &mdash; New paid order</p>
    <table role="presentation" width="100%" style="border:1px solid ${colors.border};border-radius:8px;border-collapse:collapse;overflow:hidden;">
      ${rows}
    </table>
    <p style="margin:20px 0 0;font-size:13px;color:${colors.muted};">The full invoice is attached to this email as a PDF.</p>
  `;

  return emailShell({ preheader: `New paid order — ${packageLabel} (${invoiceNumber})`, body });
}
