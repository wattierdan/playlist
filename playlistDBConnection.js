// Import the mysql package
const mysql = require('mysql');

// Import inquirer package 
const inquirer = require('inquirer');

const Song = require("./lib/song");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Edwink1225',
  database: 'playlist_db',
});

const songs = []

connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  init()
});

function init() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "task",
                message: "What would you like to do?",
                choices: [
                    "Add a song",
                    "Delete a song",
                    "View all songs in list"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.task) {

                case "Add a song":
                    createSong()
                    init()
                    break

                case "Delete a song":
                  console.log('hi, nothing was deleted....check back later...')
                  //deleteSong()
                  init()
                    break
                case "View all songs in list":
                    readSongs()
                    init()
                    break
            }
        })
}

async function createSong() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "what is the song title?",
                name: "songTitle"
            },
            {
                type: "input",
                message: "what is the artists name?",
                name: "songArtist"
            },
            {
                type: "input",
                message: "what is the genre of this song?",
                name: "songGenre"
            }
        ]).then(userChoice => {
            const song = new Song(userChoice.songTitle, userChoice.songArtist, userChoice.songGenre)
            songs.push(song)
            addSong()
        }),
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " song inserted!\n");
      }
}

function addSong() {
    console.log("Inserting a new song...\n");
    var query = connection.query(
      "INSERT INTO songs SET ?",
      songs,
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " song inserted!\n");
      }
    );
}

function readSongs() {
    console.log("getting all songs from your playlist...\n");
    connection.query("SELECT * FROM songs", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
}
