-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Submitted', 'Processing', 'Clarify', 'Clarified', 'Processed', 'Canceled');

-- DropForeignKey
ALTER TABLE "SubDirections" DROP CONSTRAINT "SubDirections_directionId_fkey";

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Submitted',
    "directionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "filename" TEXT NOT NULL,
    "filepath" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Document_questionId_key" ON "Document"("questionId");

-- AddForeignKey
ALTER TABLE "SubDirections" ADD CONSTRAINT "SubDirections_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Directions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Directions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
