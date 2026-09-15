import fs from "fs";
import path from "path";
import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { PACKAGE_OPTIONS, VEHICLE_CATEGORY_OPTIONS, type PackageType } from "@/lib/vehicleOrder";

const LOGO_BUFFER = fs.readFileSync(path.join(process.cwd(), "public/images/invoice-logo.png"));

const colors = {
  navy: "#374047",
  navyLight: "#525f7f",
  muted: "#8a94a6",
  border: "#e1e5ea",
  surface: "#edeff1",
  accent: "#f9661c",
};

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 10,
    color: colors.navy,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 36,
  },
  logo: {
    width: 180,
  },
  invoiceTitle: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
    textAlign: "right",
  },
  invoiceMeta: {
    marginTop: 6,
    fontSize: 9,
    color: colors.muted,
    textAlign: "right",
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 8,
    color: colors.muted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  billToName: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
  },
  billToDetail: {
    fontSize: 10,
    color: colors.navyLight,
    marginTop: 2,
  },
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  colDescription: {
    flex: 3,
  },
  colAmount: {
    flex: 1,
    textAlign: "right",
  },
  tableHeaderText: {
    fontSize: 8,
    color: colors.muted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontFamily: "Helvetica-Bold",
  },
  itemTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
  },
  itemDetail: {
    fontSize: 9,
    color: colors.navyLight,
    marginTop: 3,
  },
  itemAmount: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  totalLabel: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
    marginRight: 24,
  },
  totalAmount: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.accent,
  },
  footer: {
    marginTop: 48,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    fontSize: 8,
    color: colors.muted,
    textAlign: "center",
  },
});

export type InvoiceData = {
  invoiceNumber: string;
  issuedAt: Date;
  vin: string;
  category: string;
  model: string;
  year: string;
  name: string;
  email: string;
  packageType: string;
};

export default function InvoiceDocument({ invoice }: { invoice: InvoiceData }) {
  const packageOption = PACKAGE_OPTIONS.find((option) => option.value === (invoice.packageType as PackageType));
  const packageLabel = packageOption?.label ?? invoice.packageType;
  const price = packageOption?.price ?? 0;
  const category = VEHICLE_CATEGORY_OPTIONS.includes(invoice.category as (typeof VEHICLE_CATEGORY_OPTIONS)[number])
    ? invoice.category
    : invoice.category;

  return (
    <Document title={`Invoice ${invoice.invoiceNumber}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {/* eslint-disable-next-line jsx-a11y/alt-text -- @react-pdf/renderer's Image, not an HTML/next img */}
          <Image src={LOGO_BUFFER} style={styles.logo} />
          <View>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
            <Text style={styles.invoiceMeta}>{invoice.invoiceNumber}</Text>
            <Text style={styles.invoiceMeta}>
              {invoice.issuedAt.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Billed to</Text>
          <Text style={styles.billToName}>{invoice.name}</Text>
          <Text style={styles.billToDetail}>{invoice.email}</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.tableHeaderText, styles.colDescription]}>Description</Text>
            <Text style={[styles.tableHeaderText, styles.colAmount]}>Amount</Text>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.colDescription}>
              <Text style={styles.itemTitle}>{packageLabel} Vehicle Inspection Report</Text>
              <Text style={styles.itemDetail}>Vehicle registration / VIN: {invoice.vin}</Text>
              <Text style={styles.itemDetail}>
                {category} &middot; {invoice.model} &middot; {invoice.year}
              </Text>
            </View>
            <Text style={[styles.itemAmount, styles.colAmount]}>£{price.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total paid</Text>
          <Text style={styles.totalAmount}>£{price.toFixed(2)}</Text>
        </View>

        <Text style={styles.footer}>
          Solera HPI &middot; This receipt confirms payment for the report described above. Thank you for your
          business.
        </Text>
      </Page>
    </Document>
  );
}
