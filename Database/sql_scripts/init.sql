CREATE DATABASE IF NOT EXISTS SecureDatabase;
USE SecureDatabase;
CREATE TABLE IF NOT EXISTS `Users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) NOT NULL,
    `passw` varchar(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `Threads` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` TINYTEXT NOT NULL,
    `post` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `Answers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `thread_id` INTEGER UNSIGNED NOT NULL,
    `post` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_thread`
        FOREIGN KEY (`thread_id`) REFERENCES `Threads` (`id`)
        ON DELETE CASCADE
);


INSERT INTO SecureDatabase.Users (username, passw, created_at)
VALUES (
    "admin",
    "2e4a37f6a4fffd967835c4bb12cfe8a94caa1cb5b1172f890f51317894d1723d",
    DEFAULT
);
INSERT INTO SecureDatabase.Threads (title, post, created_at, updated_at)
VALUES (
    "Test-Thread!",
    "This is a test-post, so the database is not empty and throws weird errors!",
    DEFAULT,
    DEFAULT
);
INSERT INTO SecureDatabase.Threads (title, post, created_at, updated_at)
VALUES (
    "Test-Thread! 2",
    "This is a SECOND test-post, so the database is not empty and throws weird errors!",
    DEFAULT,
    DEFAULT
);
INSERT INTO SecureDatabase.Answers (thread_id, post, created_at, updated_at)
VALUES (
    1,
    "This is a test-answere, so the database is not empty and throws weird errors!",
    DEFAULT,
    DEFAULT
);