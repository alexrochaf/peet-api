import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String
});

const Users = mongoose.model("users", UserSchema);

export default Users;