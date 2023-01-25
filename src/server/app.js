const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json( {extended:false}));

app.get('/testRoute', (req, res) => res.end('Hello from Server!'));


app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5002;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));