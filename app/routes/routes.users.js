import { Router } from "express";
import { createUser, deleteUser, modifyUser, showUser } from "../controllers/controllers.user.js";
const rutaUser = Router();

// GET = MOSTRAR
rutaUser.get("/user/:id", showUser);

// POST = GUARDAR O CREAR
rutaUser.post("/user", createUser);

// PUT = MODIFICAR DATOS
rutaUser.put("/user", modifyUser);

// DELETE = ELIMINAR DATOS
rutaUser.delete("/user", deleteUser);

export default rutaUser;