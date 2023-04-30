#Creación base de datos
CREATE DATABASE dentalstyle;

USE dentalstyle;

#Creación tablas
CREATE TABLE pacientes (
  id_paciente INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  correo_electronico VARCHAR(50) NOT NULL,
  cedula VARCHAR(50) NOT NULL
);
CREATE TABLE dentistas (
  id_dentista INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  telefono VARCHAR(15) NOT NULL
);
CREATE TABLE citas (
  id_cita INT PRIMARY KEY AUTO_INCREMENT,
  id_paciente INT NOT NULL,
  id_dentista INT NOT NULL,
  fecha_hora DATETIME NOT NULL,
  FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente),
  FOREIGN KEY (id_dentista) REFERENCES dentistas(id_dentista)
);

#Inserción de datos de prueba
INSERT INTO pacientes (nombre, apellido, telefono, correo_electronico, cedula)
VALUES 
  ('Juan', 'Pérez', '3012734536', 'juanperez@gmail.com', '1013097762'),
  ('María', 'García', '30528194634', 'mariagarcia@hotmail.com', '1293846172'),
  ('Pedro', 'Sánchez', '3003846374', 'pedrosanchez@outlook.com', '1027374612'),
  ('Luis', 'Martínez', '3017283647', 'luismartinez@gmail.com', '1026372836'),
  ('Ana', 'Rodríguez', '3182634885', 'anarodriguez@gmail.com', '1127384562'),
  ('Carlos', 'González', '3113742634', 'carlosgonzalez@outlook.com', '1037482536'),
  ('Fernando', 'López', '3004562343', 'fernandolopez@outlook.com', '1192836475'),
  ('Sofía', 'Hernández', '3018495576', 'sofiahernandez@outlook.com', '1028374650'),
  ('Miguel', 'Gómez', '3183823394', 'miguelgomez@gmail.com', '1063748253'),
  ('Laura', 'Torres', '3217483564', 'lauratorres@hotmail.com', '1193846527');
INSERT INTO dentistas (nombre, apellido, telefono)
VALUES 
  ('Mario', 'Pérez', '3213849274'),
  ('Luisa', 'García', '3207483945'),
  ('Sara', 'Sánchez', '3190345657'),
  ('Carlos', 'Martínez', '3004758394'),
  ('Ana', 'Rodríguez', '3014785763');
INSERT INTO citas (id_paciente, id_dentista, fecha_hora)
VALUES 
  (1, 1, '2023-05-01 09:00:00'),
  (1, 3, '2023-05-02 10:00:00'),
  (2, 2, '2023-05-03 11:00:00'),
  (3, 4, '2023-05-04 12:00:00'),
  (4, 5, '2023-05-05 13:00:00'),
  (5, 1, '2023-05-06 14:00:00'),
  (6, 2, '2023-05-07 15:00:00'),
  (7, 3, '2023-05-08 16:00:00'),
  (8, 4, '2023-05-09 17:00:00'),
  (9, 5, '2023-05-10 18:00:00'),
  (10, 1, '2023-05-11 19:00:00'),
  (10, 2, '2023-05-12 20:00:00'),
  (9, 3, '2023-05-13 09:00:00'),
  (9, 4, '2023-05-14 10:00:00'),
  (2, 5, '2023-05-15 11:00:00'),
  (3, 1, '2023-05-16 12:00:00'),
  (8, 2, '2023-05-17 13:00:00'),
  (5, 3, '2023-05-18 14:00:00'),
  (3, 4, '2023-05-19 15:00:00'),
  (2, 5, '2023-05-20 16:00:00'),
  (6, 1, '2023-05-21 17:00:00');

select * from pacientes









