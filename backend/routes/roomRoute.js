const express = require("express");
const { getAllRoom, createRoom , updateRoom} = require("../controllers/roomController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/rooms").get(getAllRoom);
router.route("/room/new").post(createRoom);
router.route("/room/:id").put(updateRoom);


module.exports= router