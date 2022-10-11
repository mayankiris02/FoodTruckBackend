const express = require('express');
var compression = require('compression');
const app = express();
const cors = require('cors');

var mongoose = require('mongoose');
const config = require('config');
const myRoute = require('./routes');
require('dotenv/config');

env = process.env.NODE_ENV;
const port = config.port;


app.use(compression());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.get('/', (req, res) => {
    res.send('Welcome to food truck backend application !');
})
app.use('/backend', myRoute); 

mongoose.connect(config.dbConfig.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
mongoose.connection.once("open", ()=>{ console.log('db connected')});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});