import app from './app.js';
import { connectDB } from './db.js';

const port = 3000; // Cambia el número de puerto a uno que no esté en uso

connectDB();
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
