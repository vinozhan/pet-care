import express from "express";
import adminControl from "../controllers/adminControl.js";

const arouter = express.Router();

// User CRUD routes
arouter.get("/", adminControl.getAllUsers);
arouter.post("/", adminControl.addUser);

// Add the specific vet route BEFORE the parameterized routes
arouter.get("/vets", adminControl.vetVisit);

// Parameterized routes
arouter.get("/:id", adminControl.getById);
arouter.put("/:id", adminControl.updateUser);
arouter.delete("/:id", adminControl.deleteUser);

export default arouter;