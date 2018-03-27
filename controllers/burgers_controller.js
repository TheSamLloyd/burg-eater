const express = require("express");
const router = express.Router();
var burger = require("../models/burger.js");
router.post('/new', (req,res)=>{
	console.log("POST")
	burger.newBurg(req.body.newName, function(data){
		res.send(data);
	});
});
router.get('/get', (req,res)=>{
	console.log("GET")
	burger.getBurgs(function(data){
		res.send(data)
	});
});
router.post('/update', (req,res)=>{
	burger.eatBurg(req.body.burgId, function(data){
		res.send(data)
	});
});
module.exports = router;