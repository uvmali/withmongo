const express=require("express")
const routes =express.Router()
const {addPhones,findPhones}=require("../controllers")


const {getByBrandName,getByPrice,getByRating}=require("../controllers/filterController")

routes.post("/addPhones",addPhones)
routes.post("/findPhones",findPhones)



routes.post("/getByBrandName",getByBrandName)
routes.post("/getByPrice",getByPrice)
routes.post("/getByRating",getByRating)

module.exports=routes;
