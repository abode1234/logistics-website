const { Pool } = require('pg')

// Test database connection
async function testConnection() {
  console.log('🔍 Testing database connection...')
  
  const connectionString = process.env.DATABASE_URL || 'postgresql://logistics_user:logistics_password@localhost:5432/logistics_db'
  
  console.log('Connection string:', connectionString.replace(/:[^:]*@/, ':***@'))
  
  const pool = new Pool({
    connectionString: connectionString,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  })
  
  try {
    const client = await pool.connect()
    console.log('✅ Connected to database successfully!')
    
    // Test basic query
    const result = await client.query('SELECT version()')
    console.log('📊 PostgreSQL version:', result.rows[0].version)
    
    // Test database name
    const dbResult = await client.query('SELECT current_database()')
    console.log('🗄️  Current database:', dbResult.rows[0].current_database)
    
    // Test user
    const userResult = await client.query('SELECT current_user')
    console.log('👤 Current user:', userResult.rows[0].current_user)
    
    client.release()
    console.log('🎉 Database connection test passed!')
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    console.error('Error details:', error)
  } finally {
    await pool.end()
  }
}

// Run if called directly
if (require.main === module) {
  testConnection()
}

module.exports = { testConnection }
