-- AlterTable
ALTER TABLE `User` MODIFY `rol` ENUM('DONATOR', 'CENTER') NOT NULL;

-- CreateTable
CREATE TABLE `Center` (
    `id` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `numberVolunteersRequired` INTEGER NULL DEFAULT 0,
    `street` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NOT NULL,
    `numberDoor` VARCHAR(191) NOT NULL,
    `departament` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL DEFAULT '',
    `photo` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Center` ADD CONSTRAINT `Center_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
