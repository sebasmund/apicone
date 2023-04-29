import { getConnection } from "./../database/database";

const getPacientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_paciente, nombre, apellido, telefono, correo_electronico, cedula FROM pacientes");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getPaciente = async (req, res) => {
    try {
        const { id_paciente } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_paciente, nombre, apellido, telefono, correo_electronico, cedula WHERE id_paciente = ?", id_paciente);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addPaciente = async (req, res) => {
    try {
        const { nombre, apellido, telefono, correo_electronico, cedula } = req.body;

        if (nombre === undefined || apellido === undefined || telefono === undefined || correo_electronico === undefined || cedula === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const paciente = { nombre, apellido, telefono, correo_electronico, cedula };
        const connection = await getConnection();
        await connection.query("INSERT INTO pacientes SET ?", paciente);
        res.json({ message: "Paciente añadido de manera exitosa" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatePaciente = async (req, res) => {
    try {
        const { id_paciente } = req.params;
        const { nombre, apellido, telefono, correo_electronico, cedula } = req.body;

        if (id_paciente === undefined || nombre === undefined || apellido === undefined || telefono === undefined || correo_electronico === undefined || cedula === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const paciente = { nombre, apellido, telefono, correo_electronico, cedula };
        const connection = await getConnection();
        const result = await connection.query("UPDATE pacientes SET ? WHERE id_paciente = ?", [paciente, id_paciente]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletePaciente = async (req, res) => {
    try {
        const { id_paciente } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM pacientes WHERE id = ?", id_paciente);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getPacientes,
    getPaciente,
    addPaciente,
    updatePaciente,
    deletePaciente
};