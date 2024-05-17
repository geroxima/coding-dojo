const mongoose = require('mongoose');


mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/users_db", {
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));