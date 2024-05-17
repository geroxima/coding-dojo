const mongoose = require("mongoose");
const dbName = "products_db";

mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the database ${dbName}`))
    .catch(err => console.log(`Something went wrong when connecting to the database ${dbName}`, err));