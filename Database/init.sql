CREATE DATABASE IF NOT EXISTS ForumDB;
USE ForumDB;
CREATE TABLE IF NOT EXISTS `Users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT;
    `username` STRING,
    `passw` STRING,
    PRIMARY KEY (`id`)
);
INSERT INTO ForumDB.Users (id, username, passw)
VALUES (
    "admin",
    "admin12345"
);