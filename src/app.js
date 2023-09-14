import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";


db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to Database!"));

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;