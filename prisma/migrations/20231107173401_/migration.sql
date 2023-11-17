/*
  Warnings:

  - You are about to drop the column `professors` on the `Directions` table. All the data in the column will be lost.
  - Added the required column `color` to the `Directions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professor` to the `Directions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Directions" DROP COLUMN "professors",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "professor" TEXT NOT NULL;
