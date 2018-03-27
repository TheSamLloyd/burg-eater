const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const path = require('path');
var router = require("./controllers/burgers_controller")
var PORT = (process.env.PORT || 80);
app.engine("handlebars",exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/api",router);
app.get("/",function(req,res){
	res.render("index",null)
})
app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
