const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CONFIG
app.use(cors());
app.use(express.json());
// FIN CONFIG

// ENDPOINTS
//app.use('/api/books', require('./routes/books'));
// FIN ENDPOINT

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running in port: " + PORT));