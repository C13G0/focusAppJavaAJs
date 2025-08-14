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

    // Resumen
    console.log("\nResumen");
    console.log("Seleccione una opción:");
    console.log("1. Introducción a la programación");
    console.log("2. Metodologías ágiles de programación");
    console.log("3. Lógica de programación");
    console.log("4. Estadísticas");
    console.log("5. Social Focus");
    console.log("6. Configuración");
    let opcionResumen = parseInt(prompt("--------Seleccione una opción:-------- \n1. Introducción a la programación\n2. Metodologías ágiles de programación.\n3. Lógica de programación.\n4. Estadísticas.\n5. Social Focus.\n6. Configuración."));

    // Desglose de las opciones de Resumen
    switch (opcionResumen) {
        case 1:

            alert("=================================\n                 Focus App              \n================================\n\n=================================\n                 RESUMEN              \n================================")
            console.log("\nIntroducción a la programación");
            console.log("Profesor: Jossy Reinaldo Tello Landazuri");
            console.log("Progreso: 40%");
            console.log("Próxima entrega: Taller de CSS (M2)");
            break;
        case 2:
            console.log("\nMetodologías ágiles para la programación");
            console.log("Profesor: Juan Jose Gallego Mesa");
            console.log("Progreso: 72%");
            console.log("Próxima entrega: Primeras 10 HU listas (M2)");
            break;
        case 3:
            console.log("\nLógica de programación:");
            console.log("Profesor: Jaime Alberto Zapata Valencia");
            console.log("Progreso: 80%");
            console.log("\nSeleccione una opción para ver próximas entregas:");
            console.log("1. momento 1");
            console.log("2. momento 2");
            console.log("3. momento 3");
            let opcionDeLogica = parseInt(prompt("Seleccione una opción:\n\n1. Primer momento\n2. segundo momento\n3. Tercer momento"));

            // Desglose de las opciones dentro de Lógica
            if (opcionDeLogica === 1) {
                console.log("\nEjercicios básicos de lógica, quiz de conocimiento y desempeño.");
            } else if (opcionDeLogica === 2) {
                console.log("\nQuiz de conocimiento y sustentación de desempeño. Entrega evidencias de Condicionales y JAVA en el proyecto integrador");
            } else if (opcionDeLogica === 3) {
                console.log("\nTema: Aun no sabemos. Que Dios nos ampare :P");
            } else {
                console.log("Opción no válida.");
            }
            break;
        case 4:
            console.log("\nEstadísticas");
            let porcentaje1 = 40;
            let porcentaje2 = 72;
            let porcentaje3 = 80;
            console.log("\nIntro: " + porcentaje1 + "%");
            console.log("Logica: " + porcentaje2 + "%");
            console.log("Agilismo: " + porcentaje3 + "%");
            let promedio = (porcentaje1 + porcentaje2 + porcentaje3) / 3;
            console.log("Promedio general: " + promedio + "%");
            break;
        case 5:
            console.log("\nSocial Focus :D");
            console.log("\n¡Bienvenidos a Social Focus! Comparte tus logros y dudas, es un espacio para que compartas con tu comunidad del CESDE");
            console.log("\nChat general:");
            console.log("1. DonAndres escribió: Que vamos a hacer para mañana que no hemos hecho el trabajo?? D:");
            console.log("2. la-divina respondió: Mijo para eso está chatGPT. LOL!");
            console.log("3. " + nombreUsuario + " reaccionó al mensaje de la-divina con un corazón");
            break;
        case 6:
            console.log("\nConfiguración:");
            console.log("\nSeleccione una opción:");
            console.log("\n1. Perfil");
            console.log("2. Datos");
            console.log("3. Otros");
            let opcionConfiguracion = parseInt(prompt("Opción:\n\n1. Perfil\n2. Datos\n3. Otros"))

            if (opcionConfiguracion === 1) {
                console.log("\nPerfil:");
                console.log("\nNombre de usuario: " + nombreUsuario);
                console.log("Edad: " + edad);
                console.log("Carrera: " + carrera);
                console.log("Nickname: " + nickname);
            } else if (opcionConfiguracion === 2) {
                console.log("\nDatos:");
                console.log("\nCorreo institucional: " + nombreUsuario + "@cesde.net");
                console.log("Teléfono: +57 " + telefonoEstudiante);
            } else if (opcionConfiguracion === 3) {
                console.log("\nOtros:");
                console.log("\nNotificaciones: Activadas");
                console.log("Idioma: Español");
                console.log("Cerrar sesión");
            } else {
                console.log("Opción no válida.");
            }
            break;
        default:
            console.log("Opción no válida.");
    }
} else {
    console.log("\nUsuario o contraseña incorrectos. Por favor reinicia el proceso.");
}

console.log("\nGracias por usar Focus App.\n¡Hasta pronto!");