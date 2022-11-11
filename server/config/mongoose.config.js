const mongoose = require('mongoose');

const dbName = 'music-demo';

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
    .then(() => {
        console.log(`Successfully connected to ${dbName}🎈`)
    })
    .catch ((error) => {
        console.log(`Mongoose connection to ${dbName} failed:`, error)
    })
