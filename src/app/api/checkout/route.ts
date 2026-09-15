import { NextResponse } from "next/server";
import { freemius } from "@/lib/freemius";
import { prisma } from "@/lib/prisma";
import {
  PACKAGE_TO_FREEMIUS_PLAN_ID,
  validateVehicleOrderForm,
  type PackageType,
  type VehicleOrderFormValues,
} from "@/lib/vehicleOrder";

export async function POST(request: Request) {
  const body = (await request.json()) as { vin?: string } & Partial<VehicleOrderFormValues>;

  const values: VehicleOrderFormValues = {
    category: body.category ?? "",
    packageType: body.packageType ?? "",
    model: body.model ?? "",
    year: body.year ?? "",
    firstName: body.firstName ?? "",
    lastName: body.lastName ?? "",
    email: body.email ?? "",
  };

  const errors = validateVehicleOrderForm(values);
  if (Object.keys(errors).length > 0 || !body.vin?.trim()) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const planId = PACKAGE_TO_FREEMIUS_PLAN_ID[values.packageType as PackageType];

  const order = await prisma.order.create({
    data: {
      vin: body.vin.trim(),
      category: values.category,
      packageType: values.packageType,
      model: values.model,
      year: values.year,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      freemiusPlanId: String(planId),
    },
  });

  const checkout = (
    await freemius.checkout.create({
      user: { email: values.email, firstName: values.firstName, lastName: values.lastName },
      planId: String(planId),
      isSandbox: process.env.NODE_ENV !== "production",
    })
  ).setBillingCycle("lifetime");

  return NextResponse.json({ orderId: order.id, checkout: checkout.serialize() });
}
