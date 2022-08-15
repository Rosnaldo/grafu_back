/*
  Warnings:

  - You are about to alter the column `lot1_price` on the `Playday` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `lot2_price` on the `Playday` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `lot3_price` on the `Playday` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `lot4_price` on the `Playday` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `lot5_price` on the `Playday` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Playday" ALTER COLUMN "lot1_price" SET DATA TYPE INTEGER,
ALTER COLUMN "lot2_price" SET DATA TYPE INTEGER,
ALTER COLUMN "lot3_price" SET DATA TYPE INTEGER,
ALTER COLUMN "lot4_price" SET DATA TYPE INTEGER,
ALTER COLUMN "lot5_price" SET DATA TYPE INTEGER;
