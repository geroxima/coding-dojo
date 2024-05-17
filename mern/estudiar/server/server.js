const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes.js');
require('./config/mongoose.config');
const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Hello pichi" });
})

app.listen(8000, () => console.log("Listening on port 8000"));