-- CreateTable
CREATE TABLE `Meal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reserveId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserve` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_reserveId_fkey` FOREIGN KEY (`reserveId`) REFERENCES `Reserve`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
