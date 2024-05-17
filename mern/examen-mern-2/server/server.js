const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
require("./config/mongoose.config");
const petRoutes = require("./routes/pet.routes");

app.use(cors(
    {
        credentials: true,
        origin: "http://localhost:3000"
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/pets", petRoutes);

app.get("/", (req, res) => res.json({ message: "Hello World" }))

app.listen(port, () => console.log(`Listening on port ${port}`));