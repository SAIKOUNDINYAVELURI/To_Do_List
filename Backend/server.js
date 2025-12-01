require('dotenv').config();
const express=require('express')
const cors=require('cors')
const app=express()
const mysql=require('mysql2');


app.use(cors());
app.use(express.json())
const db=mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DBNAME

})

db.connect((err)=>
{
    if(err)
    {
        console.log('error connecting to Database')
    }
    console.log('connected to Database')
})
app.get('/',(req,res)=>{
    console.log('Default route')
    db.query('select * from todoItems',(err,result)=>{
        if(err)
        {
            console.log("error occured")
            console.log(err)
            return 
        }
        console.log("Data: ",result)
        res.send(result)
    })
})

app.post('/add-item',(req,res)=>{
    console.log(req.body);
    db.query(`insert into todoItems(itemDescription) values(?)`,[req.body.text],(err,results)=>{
        if(err)
        {
            console.log("error occured")
            console.log(err)
            return 
        }
        console.log("Created Sucessfully")
    })
    res.send("added sucessfully")

})
app.put('/edit-item',(req,res)=>{
    console.log(req.body);
    db.query(`update todoItems set itemDescription="${req.body.itemDescription}"where ID=${req.body.ID}`,(err,results)=>{
        if(err)
        {
            console.log("error occured")
            console.log(err)
            return 
        }
        console.log('No errors')
        
    })
    res.send("Updated sucessfully")

})
app.delete('/delete-item',(req,res)=>{
    db.query(`delete from todoItems where ID=${req.body.ID} `,(err,results)=>{
        if(err)
        {
            console.log("error occured")
            console.log(err)
            return 
        }
        console.log('No errors');
    })
    res.send('Deleted Sucessfully');
})
app.listen(3000,()=>
{
    console.log('Server started running on port 3000')
})