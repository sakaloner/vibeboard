const sqlite3 = require('sqlite3').verbose();

// Open a database connection
let db = new sqlite3.Database('monastAPP.db');

// Enable foreign key support
db.run("PRAGMA foreign_keys = ON;");

// Create tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS people (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      bio TEXT,
      profile_picture TEXT,
      email TEXT,
      contact TEXT  -- Unified contact information
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      location TEXT,  -- Simple character string format for location
      email TEXT,
      contact TEXT  -- Unified contact information
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      date TEXT,  -- Use ISO 8601 date-time format
      location TEXT,  -- Character string format for event location
      email TEXT,
      contact TEXT  -- Unified contact information
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      entity_type TEXT CHECK(entity_type IN ('person', 'place', 'event', 'comment', 'connection')),
      entity_id INTEGER,
      user_id INTEGER,
      comment TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS likes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      entity_type TEXT CHECK(entity_type IN ('person', 'place', 'event', 'comment', 'connection')),
      entity_id INTEGER,
      user_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS connections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,
      person1_id INTEGER NOT NULL,
      person2_id INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (person1_id) REFERENCES people(id),
      FOREIGN KEY (person2_id) REFERENCES people(id)
    )
  `);

});

// Close the database connection
db.close();

console.log('finished')
