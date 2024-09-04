import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export default async function handler(req, res) {
  if (!db) {
    db = await open({
      filename: "./monastAPP.db",
      driver: sqlite3.Database,
    });
  }

  const { cursor, limit = 20, type } = req.query;
  const parsedLimit = parseInt(limit, 10);

  let query = '';
  let params = [];

  if (type && ['people', 'events', 'places'].includes(type)) {
    query = `
      SELECT *, '${type}' as item_type FROM ${type}
      WHERE id > ?
      ORDER BY id ASC
      LIMIT ?
    `;
    params = [cursor || 0, parsedLimit];
  } else {
    query = `
      SELECT 
        id, 
        name,
        bio as description,
        profile_picture as image,
        '' as location,
        '' as date,
        email,
        contact,
        'people' as item_type
      FROM people
      WHERE id > ?
      
      UNION ALL
      
      SELECT 
        id, 
        name,
        description,
        '' as image,
        location,
        date,
        email,
        contact,
        'events' as item_type
      FROM events
      WHERE id > ?
      
      UNION ALL
      
      SELECT 
        id, 
        name,
        description,
        '' as image,
        location,
        '' as date,
        email,
        contact,
        'places' as item_type
      FROM places
      WHERE id > ?
      
      ORDER BY id ASC
      LIMIT ?
    `;
    params = [cursor || 0, cursor || 0, cursor || 0, parsedLimit];
  }

  const items = await db.all(query, params);

  const nextCursor = items.length > 0 ? items[items.length - 1].id : null;
  const hasMore = items.length === parsedLimit;

  res.status(200).json({ items, nextCursor, hasMore });
}
