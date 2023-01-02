CREATE DATABASE IF NOT EXISTS SecureDatabase;
USE SecureDatabase;
CREATE TABLE IF NOT EXISTS `Users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT;
    `username` STRING,
    `passw` STRING,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `Posts` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT;
    `title` STRING,
    `post` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);
INSERT INTO SecureDatabase.Users (id, username, passw, created_at)
VALUES (
    "admin",
    "admin12345"
);
INSERT INTO SecureDatabase.Posts (id, title, post, created_at, updated_at)
VALUES (
    "Test-post!",
    "This is a test-post, so the database is not empty and throws weird errors!"
);