import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) =>{
    router.get('/', (req,res)=>{
        return res.send("hello world");;
    })
    router.get('/hehe', homeController.gethomeController)


    return app.use("/",router);
}
module.exports = initWebRoutes;