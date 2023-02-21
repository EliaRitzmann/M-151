-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "money" INTEGER NOT NULL,
    "hearts" INTEGER NOT NULL
);
