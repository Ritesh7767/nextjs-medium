/*
  Warnings:

  - Added the required column `subtitle` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "subtitle" TEXT NOT NULL,
ADD COLUMN     "topic" TEXT NOT NULL;
