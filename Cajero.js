//EJERCICIO 1

// Función para solicitar el monto de retiro al usuario
function solicitarMontoRetiro() {
    return parseInt(prompt("Ingrese un monto a retirar"));
}

// Función para mostrar mensajes en alertas
function mostrarMensaje(mensaje) {
    alert(mensaje);
}

// Función para realizar el retiro
function realizarRetiro(nombreUsuario, montoRetirar, saldoCuenta) {
    const saldoDisponible = saldoCuenta - montoRetirar;
    if (saldoCuenta < montoRetirar) {
        mostrarMensaje("Saldo actual: " + saldoCuenta + "\r\nSu saldo no es suficiente para retirar: " + montoRetirar);
    } else {
        let mensaje = "Usuario: " + nombreUsuario + "\r\nMonto retirado: " + montoRetirar + "\r\nSaldo disponible: " + saldoDisponible;
        mostrarMensaje("El retiro se realizó con éxito");
        mostrarMensaje(mensaje);
    }
}

// Función para verificar si el monto de retiro es válido
function verificarMontoRetiro(montoRetirar) {
    if (!isNaN(montoRetirar) && montoRetirar > 0) {
        return true;
    } else {
        mostrarMensaje("El valor ingresado no es válido");
        return false;
    }
}

// Entrada de variables
let nombreUsuario = prompt("Ingrese el nombre de usuario");
let montoRetirar = solicitarMontoRetiro();
let saldoCuenta = 1000;

// Verificar si el monto de retiro es válido
if (verificarMontoRetiro(montoRetirar)) {
    // Proceso de retiro
    realizarRetiro(nombreUsuario, montoRetirar, saldoCuenta);
}