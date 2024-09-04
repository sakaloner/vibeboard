const sqlite3 = require('sqlite3').verbose();

// Open a database connection
let db = new sqlite3.Database('spiritual_network.db');

// Enable foreign key support
db.run("PRAGMA foreign_keys = ON;");

// Create tables
db.serialize(() => {
  db.all("PRAGMA table_info(events);", (err, rows) => {
  if (err) {
    console.error("Error fetching schema:", err.message);
  } else {
    console.log("Schema for 'events' table:", rows);
  }
});
})

