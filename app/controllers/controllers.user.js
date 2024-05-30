import { success, error } from "../message/message.js";
import pool from "../config/db.mysql.js";


export const createUser = (req, res) => {
    const dato = req.body;
    console.log(dato);
    success(req, res, 200, "Usuario creado"); 
};

export const showUser = async(req, res) => {

    let id = req.params ["id"]

    try {
        
        const respuesta = await pool.query(`CALL SP_MOSTRARUSUARIO(${id}); `);
        ///console.log(respuesta);
        success(req,res, 200, respuesta [0]); 
    } catch (err) {
        error(req,res,500,err)
        
    }
};

export const modifyUser = (req, res) => {
    const dato = req.body;
    console.log(dato);
    success(req, res, 201, "Modificando un dato"); 
};
export const deleteUser = (req, res) => {
    const dato = req.body;
    console.log(dato);
    success(req, res, 200, "Eliminando un dato"); 
};