const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/openaiRoutes'))
app.get('/', (req, res) => {
    res.send("WOOF!")
})



app.listen(port, function () {
    console.log(`LISTENING ON PORT ${port}` )
})