const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/jokes.routes');
require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/jokes', routes);

app.get('/', (req, res) => {
    res.json('Hello, joke!');
});

app.listen(8000, () => {
    console.log('Server connected to port 8000');
});