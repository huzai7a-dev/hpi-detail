-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "invoiceNumber" TEXT,
ADD COLUMN     "invoiceSentAt" TIMESTAMP(3);
