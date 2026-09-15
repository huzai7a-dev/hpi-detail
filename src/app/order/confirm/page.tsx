import { prisma } from "@/lib/prisma";
import Icon from "@/components/ui/Icon";

export default async function OrderConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string }>;
}) {
  const { orderId } = await searchParams;
  const order = orderId ? await prisma.order.findUnique({ where: { id: orderId } }) : null;

  if (!order) {
    return (
      <div className="container section text-center">
        <p className="text-lg font-bold text-(--color-heading)">We couldn&rsquo;t find that order.</p>
      </div>
    );
  }

  const statusCopy: Record<string, { icon: "check-circle" | "clock" | "exclamation"; title: string; body: string }> = {
    paid: {
      icon: "check-circle",
      title: "Payment received",
      body: `We've emailed your invoice to ${order.email}. Your ${order.packageType} report for ${order.vin} will be sent within the stated timeframe.`,
    },
    pending: {
      icon: "clock",
      title: "Finishing up your payment",
      body: "We're still confirming your payment with our payment processor. This page will reflect the final status shortly — you can safely refresh it.",
    },
    failed: {
      icon: "exclamation",
      title: "Payment not completed",
      body: "Your payment wasn't completed or was cancelled. No charge was made — feel free to try again.",
    },
  };

  const status = statusCopy[order.status] ?? statusCopy.pending;

  return (
    <div className="container section flex justify-center">
      <div className="w-full max-w-md rounded-(--radius-lg) border border-(--color-border) bg-white p-8 text-center shadow-(--shadow-md)">
        <Icon
          name={status.icon}
          className={`mx-auto h-12 w-12 ${
            order.status === "paid"
              ? "text-(--color-green)"
              : order.status === "failed"
                ? "text-red-600"
                : "text-(--color-muted)"
          }`}
        />
        <p className="mt-4 text-xl font-bold text-(--color-heading)">{status.title}</p>
        <p className="mt-2 text-sm text-(--color-muted)">{status.body}</p>
      </div>
    </div>
  );
}
