const express = require('express');
const app = express();
const mongoose = require('mongoose');

//middleware
app.use(express.json());

//connect database
const url = `mongodb+srv://admin:admin123@cluster0.o4rc7dj.mongodb.net/B47DB`;
console.log('Connecting to DB...');
//mongoose
mongoose.connect(url)

.then(() => {
    console.log('Connected to MongoDB...');
})
.catch((error) => {
    console.log('Error connection to MongoDB...',error)
})
const HOSTNAME = '127.0.0.1';
const PORT = 3001;

//make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`server running at http://${HOSTNAME}:${PORT}`);
});