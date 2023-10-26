-- CreateTable
CREATE TABLE "Directions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "professors" TEXT[],
    "examplelink" TEXT NOT NULL,
    "additionallink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Directions_pkey" PRIMARY KEY ("id")
);
