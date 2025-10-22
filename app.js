const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World from ExpressJS!'
    })
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});