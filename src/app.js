import express from "express";
import morgan from "morgan";
//import rutas
import pacientesRoutes from "./routes/pacientes.routes";
import dentistasRoutes from "./routes/dentistas.routes";
import citasRoutes from "./routes/citas.routes";
import usuariosRoutes from ".routes/usuarios.routes";


const app=express();

//configuraciones
app.set("port", 4000);

//middlewares (funcion intermedia)
app.use(morgan("dev")); //listado peticiones
app.use(express.json()); //entender y procesar jsons

//rutas
app.use("/api/pacientes", pacientesRoutes);
app.use("/api/dentistas", dentistasRoutes);
app.use("/api/citas", citasRoutes);
app.use("/api/usuarios", usuariosRoutes);


export default app;