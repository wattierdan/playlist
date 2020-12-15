DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("vanilla", "vanilla", "smooth jazz");

INSERT INTO songs (title, artist, genre)
VALUES ("chocolate", "chocolate", "jazz");

INSERT INTO songs (title, artist, genre)
VALUES ("strawberry", "strawberry", 'not jazz');




-- * Create a database called `playlist_db`, then create a table inside of this database called `songs`. The songs table should have four columns:

--   1. id
--   2. title
--   3. artist
--   4. genre

-- * Make sure you add some songs to this table so you have actual data to work with.

-- * We are going to print playlists to the console based upon the genre or artist.

-- * First create code that prints all songs within your database to the terminal.

-- * Now create code that prints songs of a specific genre/artist to the terminal.