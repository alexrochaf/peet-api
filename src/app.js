import express from "express";
import db from "./db";
import routes from "./routes";


db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to Database!"));

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;