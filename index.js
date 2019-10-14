 const express = require("express");
const bodyparser = require("body-parser");

const app = express();
var items = ["one","two",];
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req, res){
    var today = new Date();
    
    var options = {
         weekday: 'long',
        day:'numeric',
        month:"long",
    }
    
    var day =  today.toLocaleDateString("en-US",options);
    res.render("list",{ejs:day,newitems: items});
});

app.post("/",function(req, res){
var item = req.body.newItem;
   
    items.push(item);
    
    res.redirect("/");
    
})


app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000")
})