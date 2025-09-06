// Definición de variables
let usuarioRegistrado = "a";
let claveRegistrada = "1";
let nombreUsuario = "";
let nickname = "Blindprogrammer";
let edad = 22;
let telefonoEstudiante = 3123784290;
let carrera = "Técnico en Desarrollo de Software";

//Funciones para registrar usuario e iniciar sesión



function registrarUsuario() {
    usuarioRegistrado = prompt("Ingrese un nombre de usuario: ");
    claveRegistrada = prompt("Ingrese una contraseña: ");
    edad = parseInt(prompt("Ingrese su edad: "));
    nickname = prompt("Ingrese su nickname: ");
    telefonoEstudiante = parseInt(prompt("Ingrese su teléfono: "));
    alert("¡¡Te registraste correctamente!! :D\nAhora puedes iniciar sesión.");
}

function iniciarSesion() {
    nombreUsuario = prompt("Ingrese su usuario: ");
    claveLogin = prompt("Ingrese su contraseña: ");
}


// Inicio de sesión y registro
alert("=================================\n                 Focus App              \n================================")
let opcionInicio = parseInt(prompt("=================================\n                 Focus App              \n================================\n\n--------Ingrese una opción:--------\n\n1. Iniciar sesión\n2. Registrarse"));

// Si selecciona registrarse debe ingresar los datos que le piden
if (opcionInicio === 2) {
    registrarUsuario();
    iniciarSesion();
} else if (opcionInicio === 1) {
    iniciarSesion();
}


// Verificación de inicio de sesión
if (nombreUsuario === usuarioRegistrado && claveLogin === claveRegistrada) {
    console.log("¡Inicio de sesión exitoso! Bienvenido, " + nombreUsuario);

    // Bucle principal del menú de resumen
    let salirResumen = false;
    do {
        // Menú de resumen principal
        let opcionResumen = parseInt(prompt(
            "=================================\n                 RESUMEN              \n================================\n\n" +
            "1. Introducción a la programación\n" +
            "2. Metodologías ágiles de programación\n" +
            "3. Lógica de programación\n" +
            "4. Estadísticas\n" +
            "5. Social Focus\n" +
            "6. Configuración\n" +
            "0. Salir"
        ));

        switch (opcionResumen) {
            case 1:
                // Mostrar información de Introducción a la programación

                
                alert("=====INTRODUCCIÓN A LA PROGRAMACIÓN=====\n\nProfesor: Jossy Reinaldo Tello Landazuri\nProgreso: 40%\nPróxima entrega: Taller de CSS (M2)");
                // Opción para volver o salir
                let volverIntro = false;
                do {
                    let opcionIntro = parseInt(prompt("1. Volver al resumen\n9. Salir"));
                    if (opcionIntro === 1) {
                        volverIntro = true;
                    } else if (opcionIntro === 0) {
                        volverIntro = true;
                        salirResumen = true;
                    } else {
                        alert("Opción no válida.");
                    }
                } while (!volverIntro && !salirResumen);
                break;
            case 2:
                // Mostrar información de Metodologías ágiles
                alert("=====METODOLOGÍAS ÁGILES=====\n\nProfesor: Juan Jose Gallego Mesa\nProgreso: 72%\nPróxima entrega: Primeras 10 HU listas (M2)");
                let volverAgil = false;
                do {
                    let opcionAgil = parseInt(prompt("1. Volver al resumen\n9. Salir"));
                    if (opcionAgil === 1) {
                        volverAgil = true;
                    } else if (opcionAgil === 0) {
                        volverAgil = true;
                        salirResumen = true;
                    } else {
                        alert("Opción no válida.");
                    }
                } while (!volverAgil && !salirResumen);
                break;
            case 3:
                // Submenú de Lógica de programación
                let volverLogica = false;
                do {
                    let opcionDeLogica = parseInt(prompt(
                        "=====LÓGICA DE PROGRAMACION=====\n\nProfesor: Jaime Alberto Zapata Valencia\nProgreso: 80%\n" +
                        "1. Momento 1\n2. Momento 2\n3. Momento 3\n0. Volver\n9. Salir"
                    ));
                    if (opcionDeLogica === 1) {
                        alert("Ejercicios básicos de lógica, quiz de conocimiento y desempeño.");
                    } else if (opcionDeLogica === 2) {
                        alert("Quiz de conocimiento y sustentación de desempeño. Entrega evidencias de Condicionales y JAVA en el proyecto integrador");
                    } else if (opcionDeLogica === 3) {
                        alert("Tema: Aun no sabemos. Que Dios nos ampare :P");
                    } else if (opcionDeLogica === 0) {
                        volverLogica = true;
                    } else if (opcionDeLogica === 9) {
                        volverLogica = true;
                        salirResumen = true;
                    } else {
                        alert("Opción no válida.");
                    }
                } while (!volverLogica && !salirResumen);
                break;
            case 4:
                // Mostrar información de Estadísticas
                alert("=====ESTADÍSTICAS=====\n\nIntro: 40%\nLogica: 72%\nAgilismos: 80%\nPromedio general: 64%");
                let volverEstad = false;
                do {
                    let opcionEstad = parseInt(prompt("1. Volver al resumen\n9. Salir"));
                    if (opcionEstad === 1) {
                        volverEstad = true;
                    } else if (opcionEstad === 9) {
                        volverEstad = true;
                        salirResumen = true;
                    } else {
                        alert("Opción no válida.");
                    }
                } while (!volverEstad && !salirResumen);
                break;
            case 5:
                // Mostrar información de Social Focus
                alert("=====¡BIENVENIDOS AL SOCIAL FOCUS=====\n\nChat general:\n1. DonAndres escribió: Que vamos a hacer para mañana que no hemos hecho el trabajo?? D:\n2. la-divina respondió: Mijo para eso está chatGPT. LOL!\n3. " + nombreUsuario + " reaccionó al mensaje de la-divina con un corazón");
                let volverSocial = false;
                do {
                    let opcionSocial = parseInt(prompt("1. Volver al resumen\n9. Salir"));
                    if (opcionSocial === 1) {
                        volverSocial = true;
                    } else if (opcionSocial === 9) {
                        volverSocial = true;
                        salirResumen = true;
                    } else {
                        alert("Opción no válida.");
                    }
                } while (!volverSocial && !salirResumen);
                break;
            case 6:
                // Submenú de Configuración
                let volverConfig = false;
                do {
                    let opcionConfiguracion = parseInt(prompt(
                        "=====CONFIGURACIÓN=====\n\n1. Perfil\n2. Datos\n3. Otros\n0. Volver\n9. Salir"
                    ));
                    if (opcionConfiguracion === 1) {
                        alert("Perfil:\nNombre de usuario: " + nombreUsuario + "\nEdad: " + edad + "\nCarrera: " + carrera + "\nNickname: " + nickname);
                    } else if (opcionConfiguracion === 2) {
                        alert("Datos:\nCorreo institucional: " + nombreUsuario + "@cesde.net\nTeléfono: +57 " + telefonoEstudiante);
                    } else if (opcionConfiguracion === 3) {
                        alert("Otros:\nNotificaciones: Activadas\nIdioma: Español\nCerrar sesión");
                    } else if (opcionConfiguracion === 0) {
                        volverConfig = true;
                    } else if (opcionConfiguracion === 9) {
                        volverConfig = true;
                        salirResumen = true;
                    } else {
                        alert("Opción no válida.");
                    }
                } while (!volverConfig && !salirResumen);
                break;
            case 0:
                // Opción para salir del menú resumen
                salirResumen = true;
                break;
            default:
                alert("Opción no válida.");
        }
    } while (!salirResumen);

    // Mensaje final al salir
    alert("\nGracias por usar Focus App.\n¡Hasta pronto!");
} else {
    console.log("\nUsuario o contraseña incorrectos. Por favor reinicia el proceso.");
}

