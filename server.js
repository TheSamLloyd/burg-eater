const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const bodyParser = require("body-parser");
var router = require("./controllers/burgers_controller")
var PORT = (process.env.PORT || 80);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api",router);
app.engine("handlebars",exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/",function(req,res){
	res.render("index",null)
})
app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
