const express = require("express");
const { getAllServices, createService , updateService} = require("../controllers/roomServiceController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/room-services").get(getAllServices);
router.route("/room-service/new").post(createService);
router.route("/room-service/:id").put(updateService);


module.exports= router