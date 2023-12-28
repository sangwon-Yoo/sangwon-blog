/*
  Warnings:

  - Added the required column `representativeImgURL` to the `ContentsCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ContentsCategory` ADD COLUMN `representativeImgURL` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ContentsSummary` MODIFY `representativeImgURL` VARCHAR(191) NULL;
