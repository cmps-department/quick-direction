-- CreateTable
CREATE TABLE "Directions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "professors" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Directions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubDirections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "additionalInfo" TEXT NOT NULL,
    "examplelink" TEXT NOT NULL,
    "additionallink" TEXT NOT NULL,
    "validationField" TEXT NOT NULL,
    "directionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubDirections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubDirections" ADD CONSTRAINT "SubDirections_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Directions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
