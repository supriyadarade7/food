//data.js
const db = require('./connection');
//const { ConnectableObserveble } = require('rxjs')
const express = require('express');
const app = express();
const cors = require('cors');
//const { privateDecrypt } = require('crypto');
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const bodyparser = require('body-parser');
const { nextTick } = require('process');
app.use(cors());
app.use(bodyparser.json());

// Connection
// db.connect(err => {
//     if (err) { console.log('err'); }
//     console.log(`database Connected...`);
// })

// Get all data
// module.get=(app.get);
//  app.get('/food', (req, res) => {
// res.send("hi");
//  });

app.get('/food', (req, res) => {
    let qr = `select * from "food1"`
    db
        .query({
             //rowMode: "array",
            text: qr
        })
        .then(result => {
           console.log(result); 
            // var data1 = []; 
            // for (var i = 0; i < result.rows.length; i++) {
            //     data1.push({
            //         food_id: result.rows[i].food_id,
            //         name: result.rows[i].name,
            //         price: result.rows[i].price,
                    
            //         image_url: result.rows[i].image_url
            //     }); 
            //})
            res.send(result.rows);
                // message: 'all info data',
                // data: result.rows
        })
        .catch(err=> console.log(err));
    });
    app.listen(3000,()=>{
        console.log('Server Running');
    })    