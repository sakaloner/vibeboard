import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

export default async function handler(req, res) {
  if (!db) {
    db = await open({
      filename: "./monastAPP.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }
  const items = await db.all("SELECT * FROM people");
  res.status(200).json({ items })
}
