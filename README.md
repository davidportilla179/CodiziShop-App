# CODIZI Shop

El proyecto consta de una plataforma donde los usuarios pueden encontrar nuevos lugares en distintas ubicaciones del mundo. Cada usuario puede publicar, compartir e interactuar con las publicaciones de la plataforma.

![codizishop](https://shop.codiziapp.com/wp-content/uploads/2021/09/COVER-CODIZISHOP.jpg)

## CODIZI ship en **GitHub Pages**
Entra en el siguiente link para interactuar con la aplicación de PLCS

https://davidportilla179.github.io/CodiziShop-App/#/

## Comenzando 🚀

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋
```
1. Tener instalado un navegador como Google Chrome o Firefox
2. Tener instalado node.js y npm
3. Tener una cuenta de Firebase
4. Tener una cuenta de desarrollador en PayPal
```

## Instalación 🔧

Sigue los siguiente pasos para obtener una copia del proyecto y ejecutarla en entorno de desarrollo

* Clona el repositorio desde la linea de comandos o descargando el ZIP
```
$ git clone https://github.com/davidportilla179/CodiziShop-App
```
* Instala los paquetes que necesita el proyecto
```
$ npm install
```
* Crea un proyecto de Firebase y obtén tus credenciales
```
apiKey
authDomain
projectId
storageBucket
messagingSenderId
appId
```
* Crea una cuenta de PayPal para desarrollador y obten tu cliendId
```
cliendId
```
* Agrega el archivo .env a la carpeta del proyecto
```
$ touch .env
```
* Llena la configuración del archivo .env. Guiate con el archivo .env.example
```
$ cat .env.example
```
* Ejecuta el comando para correr la aplicación en modo desarrollo:
```
$ npm start
```

## Despliegue 📦

Create-React-App tiene configurado un comando para realizar un deploy de la aplicación, creando una carpeta dentro del proyecto llamada **dist**.

Para hacer el deploy, sigue los siguientes pasos:

1. En la terminal de comando ejecuta la siguiente linea:
```
$ npm run build
```
2. Cargará todos los archivos del proyecto y generará una carpeta con los archivos comprimidos.
3. Puedes acceder a la carpeta desde la terminal ejecutando:
```
$ cd build
```
4. Agrega los archivos del proyecto a la carpeta raíz de tu servidor para correr la aplicación

## Despliegue en GitHub Pages 📦

GitHub nos da la herramienta de hacer deploy de nuestros proyectos Frontend en su opción **GitHub Pages**

Sigue los siguientes pasos para hacer deploy en GitHub Pages:

1. En la raíz del proyecto, instala la dependencia de github pages:
```
$ npm install gh-pages
```
2. Agrega 1 nuevo script dentro del campo **scripts** en package.json:
```js
"deploy": "gh-pages -d build"
```
3. Ejecuta en la terminal **build** para generar la carpeta build:
```
$ npm run build
```
4. Ejecuta **deploy** para crear una nueva rama en tu repositorio donde tendrá los archivos de **build**:
```
$ npm run deploy
```

En tu repositorio verás una rama llamada gh-pages y en automático GitHub generará la configuración pertinente para usar GitHub Pages.

## Construido con 🛠️

* [React.js](https://es.reactjs.org/) - Librería de Javascript
* [Bootstrap](https://getbootstrap.com/) - Toolkit CSS
* [Visual Studio Code 2019](https://visualstudio.microsoft.com/es/) - Editor de Texto

## Autores ✒️

* **David Cruz Portilla** - [davidportilla179](https://github.com/davidportilla179)

## Versionado 📌

* [Git Bash](https://gitforwindows.org/) - Controlador de versiones
* [Repositorio](https://github.com/davidportilla179/CodiziShop-App) - Repositorio del Proyecto
## Expresiones de Gratitud 🎁

* Agradecemos al equipo de CODERHOUSE por el apoyo en este proyecto. 📢🤓.
---
⌨️ con ❤️ por David Portilla