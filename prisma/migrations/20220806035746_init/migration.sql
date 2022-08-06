-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "playdayId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Participant_playdayId_fkey" FOREIGN KEY ("playdayId") REFERENCES "Playday" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Playday" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "address_district" TEXT NOT NULL,
    "address_street" TEXT NOT NULL,
    "address_city" TEXT NOT NULL,
    "address_state" TEXT NOT NULL,
    "lot1_price" DECIMAL NOT NULL,
    "lot1_vacancy_existent" INTEGER NOT NULL,
    "lot1_vacancy_filled" INTEGER NOT NULL,
    "lot2_price" DECIMAL,
    "lot2_vacancy_existent" INTEGER,
    "lot2_vacancy_filled" INTEGER,
    "lot3_price" DECIMAL,
    "lot3_vacancy_existent" INTEGER,
    "lot3_vacancy_filled" INTEGER,
    "lot4_price" DECIMAL,
    "lot4_vacancy_existent" INTEGER,
    "lot4_vacancy_filled" INTEGER,
    "lot5_price" DECIMAL,
    "lot5_vacancy_existent" INTEGER,
    "lot5_vacancy_filled" INTEGER,
    CONSTRAINT "Playday_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
