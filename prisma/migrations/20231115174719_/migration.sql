/*
  Warnings:

  - You are about to drop the column `additionallink` on the `SubDirections` table. All the data in the column will be lost.
  - You are about to drop the column `validationField` on the `SubDirections` table. All the data in the column will be lost.
  - Added the required column `description` to the `SubDirections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `downloadFile` to the `SubDirections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textField` to the `SubDirections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubDirections" DROP COLUMN "additionallink",
DROP COLUMN "validationField",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "downloadFile" BOOLEAN NOT NULL,
ADD COLUMN     "textField" BOOLEAN NOT NULL;
