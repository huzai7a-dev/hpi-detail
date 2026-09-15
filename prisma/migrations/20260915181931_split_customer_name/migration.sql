-- Add the new columns as nullable first so existing rows aren't rejected
ALTER TABLE "Order" ADD COLUMN "firstName" TEXT;
ALTER TABLE "Order" ADD COLUMN "lastName" TEXT;

-- Backfill from the existing combined "name" column: first word -> firstName,
-- the rest -> lastName (single-word names get an empty lastName).
UPDATE "Order"
SET
  "firstName" = split_part("name", ' ', 1),
  "lastName" = trim(substring("name" FROM length(split_part("name", ' ', 1)) + 1))
WHERE "name" IS NOT NULL;

-- Anything left null (shouldn't happen given "name" was NOT NULL) falls back to empty string
UPDATE "Order" SET "firstName" = '' WHERE "firstName" IS NULL;
UPDATE "Order" SET "lastName" = '' WHERE "lastName" IS NULL;

-- Now enforce NOT NULL and drop the old combined column
ALTER TABLE "Order" ALTER COLUMN "firstName" SET NOT NULL;
ALTER TABLE "Order" ALTER COLUMN "lastName" SET NOT NULL;
ALTER TABLE "Order" DROP COLUMN "name";
