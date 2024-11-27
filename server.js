const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    
        res.send("Hello World");
    });
 
 app.get("/date",(req,res) =>{
    res.send(new Date(). toString());
 });
 app.use((reqrea) =>{
    res.send(404).send("Page not found");
 });



     


const PORT = 3000;
server.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});