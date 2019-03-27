const mongodb1=require('mongoose')
var empdetails=new mongodb1.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err) =>
{
    if(!err){
        console.log("MongoDb connection successed")}
        else{
            console.log('errror in db connetion:'+err)
        
        }
    });
