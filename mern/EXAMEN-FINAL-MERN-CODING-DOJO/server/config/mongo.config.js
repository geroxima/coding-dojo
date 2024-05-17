const mongoose = require('mongoose');
const db_name = "pirates_db";

mongoose.connect(`mongodb://localhost:27017/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then ( () => { 
    console.log(`Connected to the database:layout ${db_name}`)
})  .catch( err => {
    console.log(err);
})
 