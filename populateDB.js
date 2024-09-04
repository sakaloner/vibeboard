const sqlite3 = require('sqlite3').verbose();

// Open a database connection
let db = new sqlite3.Database('monastAPP.db');

// Enable foreign key support
db.run("PRAGMA foreign_keys = ON;");

db.serialize(() => {
  // Insert mock data into 'people' table
  db.run(`
INSERT INTO connections (type, person1_id, person2_id) VALUES
('friend', 1, 2),
('colleague', 1, 3),
('family', 2, 4),
('acquaintance', 3, 4),
('friend', 4, 1),
('colleague', 2, 3),
('family', 3, 1),
('acquaintance', 4, 2),
('friend', 2, 1),
('colleague', 4, 3),
('family', 1, 4),
('acquaintance', 3, 2),
('friend', 1, 4),
('colleague', 2, 4),
('family', 4, 1),
('acquaintance', 2, 3),
('friend', 3, 1),
('colleague', 4, 2),
('family', 2, 1),
('acquaintance', 1, 3);

`);


});;

// Close the database connection
db.close((err) => {
  if (err) {
    console.error('Error closing the database connection:', err.message);
  } else {
    console.log('Database connection closed successfully.');
  }
});

