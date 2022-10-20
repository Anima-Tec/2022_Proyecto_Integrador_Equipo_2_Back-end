-- DropForeignKey
ALTER TABLE `center` DROP FOREIGN KEY `Center_id_fkey`;

-- DropForeignKey
ALTER TABLE `needsfood` DROP FOREIGN KEY `NeedsFood_centerId_fkey`;

-- DropForeignKey
ALTER TABLE `needsfood` DROP FOREIGN KEY `NeedsFood_foodId_fkey`;

-- AddForeignKey
ALTER TABLE `Center` ADD CONSTRAINT `Center_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NeedsFood` ADD CONSTRAINT `NeedsFood_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NeedsFood` ADD CONSTRAINT `NeedsFood_centerId_fkey` FOREIGN KEY (`centerId`) REFERENCES `Center`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
