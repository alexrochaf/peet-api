import express from "express";
import PetController from "../controllers/PetController.js";
// import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
    .get("/pets/:id", PetController.buscaPorId)
    .post("/pets", PetController.insert)

export default router;