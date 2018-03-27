const express = require("express");
const router = express.Router();
var burger = require("../models/burger.js");
router.post('/new', (req,res)=>{
	console.log("POST")
	burger.newBurg(req.params.name, res);
});
router.get('/get', (req,res)=>{
	console.log("GET")
	burger.getBurgs(res);
});
router.put('/update', (req,res)=>{
	burger.eatBurg(req.params.id, res);
});
module.exports = router;