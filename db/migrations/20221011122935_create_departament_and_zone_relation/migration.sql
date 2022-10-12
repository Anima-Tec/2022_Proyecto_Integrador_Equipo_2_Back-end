/*
  Warnings:

  - You are about to drop the column `departament` on the `center` table. All the data in the column will be lost.
  - You are about to drop the column `zone` on the `center` table. All the data in the column will be lost.
  - Added the required column `zoneId` to the `Center` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `center` DROP FOREIGN KEY `Center_id_fkey`;

-- AlterTable
ALTER TABLE `center` DROP COLUMN `departament`,
    DROP COLUMN `zone`,
    ADD COLUMN `zoneId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Department` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Zone` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `departmentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Center` ADD CONSTRAINT `Center_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Center` ADD CONSTRAINT `Center_zoneId_fkey` FOREIGN KEY (`zoneId`) REFERENCES `Zone`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zone` ADD CONSTRAINT `Zone_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
