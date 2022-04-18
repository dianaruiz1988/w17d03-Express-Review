const express = require('express');

const app = express();

// first route to start the count
app.get('/', (req, res) => {
    res.send(
        `<h1> 99 Bottles of beer on the wall</h1></br>
        <a href= '/98'>
        take one down, pass it around</a>`
        )
    });

    // decrease number of bottles 
    app.get('/:number_of_bottles', (req, res) => {

        if(req.params.number_of_bottles != 0){

        res.send(`<h1>${req.params.number_of_bottles} bottles of beer on the wall, ${req.params.number_of_bottles} bottles of beer! <h1><a href=${req.params.number_of_bottles-1}>Take one down, pass it around!</a>`)
        
        }else {
            res.send("<h1><a href ='/'> start over</a><h1>")
        }
    });

app.listen(3000, () => {
    console.log('Listening on Port 3000')
});

