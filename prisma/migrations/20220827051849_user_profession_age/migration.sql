-- DropForeignKey
ALTER TABLE "Playday" DROP CONSTRAINT "Playday_adminId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "profession" TEXT;

-- AddForeignKey
ALTER TABLE "Playday" ADD CONSTRAINT "Playday_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
