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

  let { cursor, limit = 20, type, search, orderBy } = req.query;
  const parsedLimit = parseInt(limit, 10);

  if (type || search || orderBy) {
    cursor = ''
  }

  let query = '';
  let params = [];

  if (type && ['people', 'events', 'places'].includes(type)) {
    let orderByClause = 'id ASC';
    if (orderBy === 'name') {
      orderByClause = 'name ASC';
    } else if (orderBy === 'created_at') {
      orderByClause = 'id ASC'; // Assuming id is the auto-incrementing primary key
    } else if (orderBy === 'random') {
      orderByClause = 'RANDOM()';
    }

    query = `
      SELECT *, '${type}' as item_type FROM ${type}
      WHERE id > ?
      AND name LIKE ?
      ORDER BY ${orderByClause}
      LIMIT ?
    `;

    params = [cursor || 0, `%${search || ''}%`, parsedLimit];
  } else {
    let orderByClause = 'id ASC';
    if (orderBy === 'name') {
      orderByClause = 'name ASC';
    } else if (orderBy === 'created_at') {
      orderByClause = 'id ASC'; // Assuming id is the auto-incrementing primary key
    } else if (orderBy === 'random') {
      orderByClause = 'RANDOM()';
    }

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
      AND name LIKE ?
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
      AND name LIKE ?
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
      AND name LIKE ?
      ORDER BY ${orderByClause}
      LIMIT ?
    `;
    params = [cursor || 0, `%${search || ''}%`, cursor || 0, `%${search || ''}%`, cursor || 0, `%${search || ''}%`, parsedLimit];
  }

  const items = await db.all(query, params);

  const nextCursor = items.length > 0 ? items[items.length - 1].id : null;
  const hasMore = items.length === parsedLimit;

  res.status(200).json({ items, nextCursor, hasMore });
}
