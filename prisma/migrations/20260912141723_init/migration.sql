-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "packageType" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "freemiusCheckoutId" TEXT,
    "freemiusLicenseId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
