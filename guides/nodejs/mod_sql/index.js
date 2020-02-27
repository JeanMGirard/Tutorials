require('dotenv').config();
const { Pool, Client } = require('pg')

/*
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
*/
const connectionString = 'postgresql://jeanmgirard:admin@localhost:5432/test'
const client = new Client({
  connectionString: connectionString,
})

client.connect()
client.query('SELECT * FROM tests', (err, res) => {
  console.log(res)
  client.end()
})
