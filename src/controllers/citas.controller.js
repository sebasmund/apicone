import { getConnection } from "./../database/database";

const getCitas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_cita, id_paciente, id_dentista, fecha_hora FROM citas");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getCita = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM citas WHERE id_cita = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCita = async (req, res) => {
    try {
        const { id_paciente, id_dentista, fecha_hora } = req.body;

        if (id_paciente === undefined || id_dentista === undefined || fecha_hora === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const cita = { id_paciente, id_dentista, fecha_hora };
        const connection = await getConnection();
        await connection.query("INSERT INTO citas SET ?", cita);
        res.json({ message: "Cita añadida de manera exitosa" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateCita = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_paciente, id_dentista, fecha_hora } = req.body;

        if (id === undefined || id_paciente === undefined || id_dentista === undefined || fecha_hora === undefined) {
            res.status(400).json({ message: "Solicitud invalida. Rellene todos los campos." });
        }

        const cita = { id_paciente, id_dentista, fecha_hora };
        const connection = await getConnection();
        const result = await connection.query("UPDATE citas SET ? WHERE id_cita = ?", [cita, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteCita = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM citas WHERE id_cita = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getCitas,
    getCita,
    addCita,
    updateCita,
    deleteCita
};