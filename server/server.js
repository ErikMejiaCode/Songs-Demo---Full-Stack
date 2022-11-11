const express = require('express');
const cors = require('cors');
const {songRouter} = require('./routes/song.routes')

const port = 8000;

//requiring / importing runs the file!
//this file doesn't need to export anything though, so we need a var
require('./config/mongoose.config');

const app = express();
//middleware helps with cross origin reference errors between server 3000 & 8000
app.use(cors());
app.use(express.json());

app.use('/api/songs', songRouter)



app.listen(port, () => {
    console.log(`Listening on port: ${port} for requests to respond to`);
})
