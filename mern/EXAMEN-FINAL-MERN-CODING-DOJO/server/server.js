const express = require('express');
const app = express();
const pirateRoutes = require('./routes/pirates.routes.js');
require('./config/mongo.config');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/pirates', pirateRoutes);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Hello Pirate!" })
})

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

