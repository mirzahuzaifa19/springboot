var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
  res.send('Welcome to JavaTpoint!');  
});  

app.get('/api/courses',(req,res)=>{

    res.send([1,2,3]);

});


app.listen(3000, ()=> console.log('mandru srikanth'));