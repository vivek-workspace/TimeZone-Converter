
const express = require('express');
const dbconnection = require('./db');

const app = express();

app.set('view engine','ejs');

let con;
const port = 8091;
app.listen(port, (err) => {
   if(err) throw err;
   con = dbconnection();
   console.log('Server is listening on '+ port);
})


app.get('/', (req,res) => {

   const query = `select zone_name from time_zone group by zone_name;`;
   con.query(query, (err, result) => {
      if(err) throw err;
      
      res.render('pages/home',{result});
   })
})

