var express=require('express');
var app=express();

app.get("/",(req,res)=>{
res.send(
    "<h1>Vijay Sales</h1>"
    +"<hr/>"
    +"<h3>Smart devices for sale</h3>"
    +"<br/>"
    +"<ol>"
    +"<li>Laptops</li>"
    +"<li>Mobile phones</li>"
    +"<li>Smart Watches</li>"
    +"<li>Gamings</li>"
    +"</ol>"
);
});

app.get("/aboutUs",(req,res)=>{
    res.send(
        "<h1>Vijay Sales</h1>"
        +"<hr/>"
        +"<h3>Things extraordinarily</h3>"
        +"<br/>"
        
    );
    });
var server=app.listen(9000);
console.log("VijaySales online app running on 9000");