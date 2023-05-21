import { getConnection } from "./../database/database";

const getUsuarios= async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_usuarios, usuario, clave FROM usuarios");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getUsuario= async (req, res) => {
    try {
        const { id_usuarios } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_usuarios, usuario, clave WHERE id_usuario = ?", id_usuarios);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addUsuario = async (req, res) => {
    try {
        const { usuario, clave } = req.body;

        if (usuario=== undefined || clave === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const usuarios = { usuario, clave };
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", usuarios);
        res.json({ message: "Dentista añadido de manera exitosa" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { id_usuarios } = req.params;
        const { usuario, clave } = req.body;

        if (id_usuarios === undefined || usuario === undefined ||clave === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const usuarios = {usuario, clave };
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE id_usuarios= ?", [usuarios, id_usuarios]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsario = async (req, res) => {
    try {
        const { id_usuarios } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE id = ?", id_usuarios);
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
    deleteUsario
};