-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Submitted', 'Processing', 'Clarify', 'Clarified', 'Processed', 'Canceled');

-- CreateTable
CREATE TABLE "Directions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "professor" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Directions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubDirections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "examplelink" TEXT NOT NULL,
    "additionalInfo" TEXT NOT NULL,
    "downloadFile" BOOLEAN NOT NULL,
    "textField" BOOLEAN NOT NULL,
    "directionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubDirections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Submitted',
    "documentLink" TEXT NOT NULL,
    "directionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "requestId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "documentLink" TEXT[],

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_requestId_key" ON "Message"("requestId");

-- AddForeignKey
ALTER TABLE "SubDirections" ADD CONSTRAINT "SubDirections_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Directions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Directions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
