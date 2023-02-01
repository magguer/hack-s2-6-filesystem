/* Clase previa: “Node/npm”.
Con Node.js es posible acceder al disco duro de la máquina donde está corriendo,
es decir, al sistema de archivos y carpetas, que es lo que se conoce como File
System. Eso es lo que haremos en este ejercicio, utilizando un módulo llamado fs,
que contiene funcionalidades como crear, leer y editar archivos.
Pauta:
✔ 1. Crear una carpeta llamada ejercicio_filesystem.
✔ 2. Inicializar un proyecto con el comando npm init.
Pueden ignorar todas las preguntas haciendo “Enter” en cada una.
✔ 3. Verificar que se haya creado el archivo package.json.
✔ 4. Crear un archivo: index.js.
Hacer console.log(__dirname); en el archivo para ver qué retorna.

Retorna la ruta absoluta hasta llegar al archivo donde se situal la instrucción __dirname

✔ 5. Importar (requerir) el módulo fs.
✔ 6. Crear un servidor escuchando en el puerto 8000.
✔ 7. Utilizar el método appendFile del módulo fs para crear un archivo llamado
access_log.txt. El archivo se debe crear en el primer llamado al servidor
y para cada nuevo llamado se debe crear un línea de texto que contenga la
fecha actual, con este formato:
✔ Se llamó al servidor el 17 de marzo de 2021 a las 21:56:57 (martes).
✔ Se llamó al servidor el 17 de marzo de 2021 a las 22:29:58 (martes).
✔ Se llamó al servidor el 17 de marzo de 2021 a las 22:29:58 (martes).
✔ Se llamó al servidor el 17 de marzo de 2021 a las 22:30:04 (martes).
✔ Se llamó al servidor el 17 de marzo de 2021 a las 22:30:04 (martes).
✔ Se llamó al servidor el 17 de marzo de 2021 a las 22:30:11 (martes).
✔ Se llamó al servidor el 17 de marzo de 2021 a las 22:30:11 (martes).
✔ Podría ser útil instalar la librería date-fns Moment para manipular las fechas con
mayor facilidad. */

const date = require("date-fns")
const es = require("date-fns/locale/es")
const fs = require("fs")

const express = require("express");
const app = express();
const port = 8000

const accesData = `Se llamó al servidor el ${date.format(new Date(), "dd 'de' MMMM 'de' yyyy 'a las' HH:mm:ss (eeee)", { locale: es })}
`;

app.listen(port, fs.appendFile(__dirname + "/access_log.txt", accesData, () => { }))


