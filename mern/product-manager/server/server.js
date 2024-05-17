const express = require('express');
const app = express();
const cors = require('cors');
require('./config/mongoose.config');
const routes = require('./routes/products.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/', (req, res) => {
    res.json({ message: "Hello World" })
});

app.listen(8000, () => {
    console.log("Listening at Port 8000!")
})