const express = require("express");
const app = express();


app.set("viwe engine","ejs");

app.get('/', (req,res)=>{
    console.log('hi');
    //res.send('welcome');
    //res.status(500).send("hi");  insted of ".send" we can use ".json({message:"error"})"
    res.render("index",{text: "world"});

});

const userRouter = require("./routes/users");
app.use('/users',userRouter); //inside the users.js, request methods will work with "users"
app.listen(3000);