-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "playdayId" UUID NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playday" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "date" TEXT NOT NULL,
    "adminId" UUID NOT NULL,
    "address_district" TEXT NOT NULL,
    "address_street" TEXT NOT NULL,
    "address_city" TEXT NOT NULL,
    "address_state" TEXT NOT NULL,
    "lot1_price" DECIMAL(65,30) NOT NULL,
    "lot1_vacancy_existent" INTEGER NOT NULL,
    "lot1_vacancy_filled" INTEGER NOT NULL,
    "lot2_price" DECIMAL(65,30),
    "lot2_vacancy_existent" INTEGER,
    "lot2_vacancy_filled" INTEGER,
    "lot3_price" DECIMAL(65,30),
    "lot3_vacancy_existent" INTEGER,
    "lot3_vacancy_filled" INTEGER,
    "lot4_price" DECIMAL(65,30),
    "lot4_vacancy_existent" INTEGER,
    "lot4_vacancy_filled" INTEGER,
    "lot5_price" DECIMAL(65,30),
    "lot5_vacancy_existent" INTEGER,
    "lot5_vacancy_filled" INTEGER,
    "gallery" TEXT[],

    CONSTRAINT "Playday_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_playdayId_fkey" FOREIGN KEY ("playdayId") REFERENCES "Playday"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playday" ADD CONSTRAINT "Playday_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
