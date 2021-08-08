const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Billings',
  password: 'Aa123456',
  port: 5432,
});

const query = (query, params, callbacks) => {
  return (pool.query(query, params, callbacks))
}

pool.on('connect', () => {
  console.log('Connected successfully to DB!');
});

module.exports = {
  query
}