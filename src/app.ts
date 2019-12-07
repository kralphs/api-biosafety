import mongoose from 'mongoose'
import app from './server'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 8080; // default port to listen

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const client = mongoose.connection

client.on('error', console.error.bind(console, 'connection error:'));
client.once('open', function() {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });  
});

