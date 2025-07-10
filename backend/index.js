const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// PostgreSQL connection (update with your credentials)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/finctracker',
});

app.get('/', (req, res) => {
  res.send('Financial Portfolio Tracker API is running!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 