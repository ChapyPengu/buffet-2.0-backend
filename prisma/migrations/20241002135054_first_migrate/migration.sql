/*
  Warnings:

  - You are about to drop the `Reserve` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Meal` DROP FOREIGN KEY `Meal_reserveId_fkey`;

-- AlterTable
ALTER TABLE `Meal` ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Reserve`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `keyWord` VARCHAR(191) NOT NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_reserveId_fkey` FOREIGN KEY (`reserveId`) REFERENCES `Reservation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
