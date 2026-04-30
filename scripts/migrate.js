const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Railway automatically injects DATABASE_URL when PostgreSQL plugin is connected
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

const migrations = [
  '0_extensions.sql', 
  '1_tables.sql', 
  'indexes.sql',
  '4_functions.sql', 
  'triggers.sql', 
  '3_views.sql', 
  '2_dml.sql'
];

async function migrate() {
  console.log("Starting database migrations...");
  try {
    for (const file of migrations) {
      console.log(`Running migration: ${file}`);
      const sqlPath = path.join(__dirname, '../taskeye-backend/database/sql', file);
      const sql = fs.readFileSync(sqlPath, 'utf8');
      
      await pool.query(sql);
      console.log(`✅ Applied: ${file}`);
    }
    console.log("🎉 All migrations applied successfully!");
  } catch (err) {
    console.error("❌ Migration failed:", err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

migrate();
