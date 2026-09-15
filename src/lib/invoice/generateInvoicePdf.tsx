import "server-only";
import { renderToBuffer } from "@react-pdf/renderer";
import InvoiceDocument, { type InvoiceData } from "./InvoiceDocument";
import type { Order } from "@/generated/prisma/client";

export function buildInvoiceNumber(orderId: string) {
  return `INV-${orderId.slice(0, 8).toUpperCase()}`;
}

export async function generateInvoicePdf(order: Order): Promise<{ invoiceNumber: string; pdf: Buffer }> {
  const invoiceNumber = buildInvoiceNumber(order.id);

  const invoice: InvoiceData = {
    invoiceNumber,
    issuedAt: new Date(),
    vin: order.vin,
    category: order.category,
    model: order.model,
    year: order.year,
    name: `${order.firstName} ${order.lastName}`,
    email: order.email,
    packageType: order.packageType,
  };

  const pdf = await renderToBuffer(<InvoiceDocument invoice={invoice} />);

  return { invoiceNumber, pdf };
}
