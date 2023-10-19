import express from "express";
import petsRoutes from "./petsRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.send("Hello World!, I am a Node.js API."));
    app.use(
        express.json(),
        petsRoutes
    )
};

export default routes;