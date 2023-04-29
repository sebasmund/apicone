import express from "express";
import morgan from "morgan";
//import rutas
import pacientesRoutes from "./routes/pacientes.routes";


const app=express();

//configuraciones
app.set("port", 4000);

//middlewares (funcion intermedia)
app.use(morgan("dev")); //listado peticiones
app.use(express.json()); //entender y procesar jsons

//rutas
app.use("/api/pacientes", pacientesRoutes);


export default app;