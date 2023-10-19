import NaoEncontrado from "../erros/NaoEncontrado.js";
import { Pets } from "../models/Index.js";

class PetController {
    static async buscaPorId(req, res, next) {
        try {
            const { id } = req.params;
            const pet = await Pets.findById(id);
            if (!pet) next(new NaoEncontrado("Pet"));
            res.status(200).json(pet);
        } catch (err) {
            next(err);
        }
    }

    static async busca(req, res, next) {
        try {
            const pets = await Pets.find();
            res.status(200).json(pets);
        } catch (err) {
            next(err);
        }
    }

    static async insert(req, res, next) {
        try {
            let pet = req.body;
            await Pets.create(pet);
            res.status(201).send({ message: "Pet cadastrado com sucesso" });
        } catch (err) {
            next(err);
        }
    }
}

export default PetController;