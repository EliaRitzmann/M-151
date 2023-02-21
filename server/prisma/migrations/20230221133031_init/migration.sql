/*
  Warnings:

  - You are about to drop the column `numberOfrounds` on the `Player` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "money" INTEGER NOT NULL,
    "hearts" INTEGER NOT NULL,
    "numberOfRounds" INTEGER NOT NULL DEFAULT 0,
    "timeOfPlay" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Player" ("hearts", "id", "money", "sessionId", "timeOfPlay", "username") SELECT "hearts", "id", "money", "sessionId", "timeOfPlay", "username" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
