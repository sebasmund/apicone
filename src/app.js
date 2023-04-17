import express from "express";
import morgan from "morgan";

const app=express();

//configuraciones
app.set("port", 4000);

//middlewares (funcion intermedia)
app.use(morgan("dev")); //listado peticiones


export default app;