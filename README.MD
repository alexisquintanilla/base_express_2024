# PROYECTO CON NODE JS

## PRIMEROS PASOS

Crear archivo:
```sh
Index.js
```
Crear Package.json
```sh
npm init -y
```

Instalar express
```sh
npm i express
```
Crear el gitignore para ignorar archivos
```sh
.gitignore
```

crear modulos en package.json

```json
"type": "module
```

Iniciar servidor:
```sh
node index.js
```

Iniciar servidor con observador:
```sh
node --watch index.js
```

nodemon:
```sh
npm i -D nodemon
```

crear script en package.json:

```json
 "scripts": {
    "start": "node index.js",
    "watch": "node --watch index.js",
    "dev": "nodemon index.js"
  },
```






