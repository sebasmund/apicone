import { getConnection } from "./../database/database";

const getUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_usuarios, usuario, clave FROM usuarios");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios WHERE id_usuarios = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addUsuario = async (req, res) => {
    try {
        const { user, clave } = req.body;

        if (user === undefined || clave === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const users = { user, clave };
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", users);
        res.json({ message: "Usuario añadido de manera exitosa" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { user, clave } = req.body;

        if (id === undefined || user === undefined ||clave === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const users = {user, clave };
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE id_usuarios= ?", [users, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE id_usuarios = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getUsuarios,
    getUsuario,
    addUsuario,
    updateUsuario,
    deleteUsuario
};