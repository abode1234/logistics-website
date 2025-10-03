const { Pool } = require('pg')
const fs = require('fs')

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/logistics_website'
})

async function fixServices() {
  try {
    console.log('🔧 Fixing services table...')
    
    // Read the SQL file
    const sql = fs.readFileSync('fix-services.sql', 'utf8')
    
    // Split by semicolon and execute each statement
    const statements = sql.split(';').filter(stmt => stmt.trim())
    
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          console.log('Executing:', statement.trim().substring(0, 50) + '...')
          const result = await pool.query(statement)
          if (result.rows && result.rows.length > 0) {
            console.log('Result:', result.rows)
          }
        } catch (err) {
          console.log('Statement result:', err.message)
        }
      }
    }
    
    console.log('✅ Services table fixed!')
    
  } catch (error) {
    console.error('❌ Fix failed:', error.message)
  } finally {
    await pool.end()
  }
}

fixServices()
