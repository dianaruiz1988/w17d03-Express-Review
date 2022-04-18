const express = require('express');
const app = express();

function  fibonacci  (targetNumber) {
    let num1= 0 ;
    let num2 = 1 ;
    let nextNum = 0;
   
    while (nextNum < targetNumber){   
        nextNum = num1+num2 ;
        num1=num2;
        num2=nextNum;
    }
    if (nextNum === targetNumber) {
        return (true );
    }else return (false) ;
    }
    
    //ROUTES
    
    app.get('/', (req, res) => {
    
        res.send(
        `<h1> FIBONIACCI</h1></br>`
        )
    });
    
    
    app.get ( "/fibonacci/:targetNumber" , (req,res) => {
        if ( fibonacci (parseInt(req.params.targetNumber))  === false ) {
            res.send (`<h1>I can tell this is not a fibonacci number</h1>`)
        }else {
            res.send (`<h1>Very good. It is Fibonacci</h1>`);
        }
    })



app.listen(3000, () => {
    console.log('Listening on Port 3000')
});