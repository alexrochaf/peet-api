import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    age: { type: Number },
    type: { type: String },
    breed: { type: String },
    owner:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "O Id do dono é obrigatório"],
        autopopulate: { select: "name" }
    },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Pets = mongoose.model("pets", PetSchema);

export default Pets;