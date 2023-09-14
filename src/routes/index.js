import express from "express";


const routes = (app) => {
    app.route("/").get((req, res) => res.send("Hello World!, I am a Node.js API."));
    app.use(
        express.json(),
    )
};

export default routes;