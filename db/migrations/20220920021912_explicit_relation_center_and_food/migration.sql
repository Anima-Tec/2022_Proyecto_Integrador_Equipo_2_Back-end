/*
  Warnings:

  - The primary key for the `Food` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `amount` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `centerId` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `unitMeasurement` on the `Food` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_centerId_fkey`;

-- AlterTable
ALTER TABLE `Food` DROP PRIMARY KEY,
    DROP COLUMN `amount`,
    DROP COLUMN `centerId`,
    DROP COLUMN `unitMeasurement`,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `NeedsFood` (
    `foodId` VARCHAR(191) NOT NULL,
    `centerId` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `unitMeasurement` ENUM('KG', 'BAG', 'G', 'ML', 'L') NOT NULL,

    PRIMARY KEY (`foodId`, `centerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NeedsFood` ADD CONSTRAINT `NeedsFood_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NeedsFood` ADD CONSTRAINT `NeedsFood_centerId_fkey` FOREIGN KEY (`centerId`) REFERENCES `Center`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
