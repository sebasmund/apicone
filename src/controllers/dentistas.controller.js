import { getConnection } from "./../database/database";

const getDentistas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_dentista, nombre, apellido, telefono FROM dentistas");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getDentista = async (req, res) => {
    try {
        const { id_dentista } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_dentista, nombre, apellido, telefono WHERE id_dentista = ?", id_dentista);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addDentista = async (req, res) => {
    try {
        const { nombre, apellido, telefono } = req.body;

        if (nombre === undefined || apellido === undefined || telefono === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const dentista = { nombre, apellido, telefono };
        const connection = await getConnection();
        await connection.query("INSERT INTO dentistas SET ?", dentista);
        res.json({ message: "Dentista añadido de manera exitosa" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateDentista = async (req, res) => {
    try {
        const { id_dentista } = req.params;
        const { nombre, apellido, telefono } = req.body;

        if (id_dentista === undefined || nombre === undefined || apellido === undefined || telefono === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const dentista = { nombre, apellido, telefono };
        const connection = await getConnection();
        const result = await connection.query("UPDATE dentistas SET ? WHERE id_dentista = ?", [dentista, id_dentista]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteDentista = async (req, res) => {
    try {
        const { id_dentista } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM dentistas WHERE id = ?", id_dentista);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getDentistas,
    getDentista,
    addDentista,
    updateDentista,
    deleteDentista
};