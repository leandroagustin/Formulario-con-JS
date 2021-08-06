// Entidades
class Usuario {
    constructor(nombre, apellido, email, ciudad, consulta, recuerdame) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.ciudad = ciudad;
        this.consulta = consulta;
        this.recuerdame = recuerdame;
    }
}

//animacion
$(`.sectionc1__h1`).animate({
    opacity: `1`,
    height: `190px`,
    fontSize: `50px`
}, (2000)
)

// MODAL
let modal = $(`.modal`)[0];
let modalC = $(`.modal-container`)[0];
$(`.modal-container`).hide();
let parrafoUno = $(`.modal-textos .h5`)[0];
let parrafoDos = $(`.modal-textos .h5`)[1];

//Alert - modal
let divAlert = $(`.modal-container1`)[0];
$(`.modal-container1`).hide();
let divParrafoAlert = $(`.divParrafoAlert`);
let parrafoAlert = document.createElement(`p`);
parrafoAlert.setAttribute(`style`, `font-size: 18px; margin-top:35px; position: relative; border-bottom: 1px solid #51C4D3; border-radius: 15px;`);
divParrafoAlert.append(parrafoAlert);
//Parrafo de alert - modal
let modalH5 = document.createElement(`h5`);
modalH5.setAttribute(`class`, `modal-title h6 mt-4`);
modalH5.setAttribute(`style`, `border: 1px solid #51C4D3; border-radius: 15px; padding: 3px;`);
let modalHeader = $(`.modal-header`);
modalH5.textContent =`Intenta nuevamente`;
modalHeader.append(modalH5);


//CREAR ELEMENTOS

let labelNombre = $(`#labelNombre`)[0];
let campoNombre = document.createElement(`P`);
campoNombre.textContent = `Campo obligatorio*`;
campoNombre.setAttribute("style", "display: none; color: #f00; text-align: center; border-radius: 3px; padding: 3px 0; position: absolute; margin-top: 37px; padding: 0 45px;");
let nombre = $(`#nombre`)[0];
labelNombre.insertBefore(campoNombre, nombre);

let labelApellido = $(`#labelApellido`)[0];
let campoApellido = document.createElement(`P`);
campoApellido.textContent = `Campo obligatorio*`;
campoApellido.setAttribute("style", "display: none; color: #f00; text-align: center; border-radius: 3px; padding: 3px 0; position: absolute; margin-top: 37px; padding: 0 45px;");
let apellido = $(`#apellido`)[0];
labelApellido.insertBefore(campoApellido, apellido);

let labelEmail = $(`#labelEmail`)[0];
let campoEmail = document.createElement(`P`);
campoEmail.textContent = `Campo obligatorio*`;
campoEmail.setAttribute("style", "display: none; color: #f00; text-align: center; border-radius: 3px; padding: 3px 0; position: absolute; margin-top: 37px; padding: 0 415px;");
let email = $(`#email`)[0];
labelEmail.insertBefore(campoEmail, email);

let labelConsulta = $(`#labelConsulta`)[0];
let campoConsulta = document.createElement(`P`);
campoConsulta.textContent = `Campo obligatorio*`;
campoConsulta.setAttribute("style", "display: none; color: #f00; text-align: center; border-radius: 3px; padding: 3px 0; position: absolute; padding: 0 415px;");
let consulta = $(`#consulta`)[0];
labelConsulta.prepend(campoConsulta, consulta);

//Array Usuarios
const Usuarios = [];

// Funcion de guardar los datos
$(`#btnEnviar`).click( (e) => {

    e.preventDefault();

    let nombre = $(`#nombre`).val();
    let apellido = $(`#apellido`).val();
    let email = $(`#email`).val();
    let ciudad = $(`#ciudad`).val();
    let consulta = $(`#consulta`).val();
    let recuerdame = $(`#recuerdame`).prop(`checked`);
    
    let expresion = /\w+@\w+\.+[a-z]/;
    
    if (nombre === `` || apellido === `` || email === `` || consulta === ``) {
        $(`.modal-container1`).slideDown()
    parrafoAlert.textContent = `Completa todos los campos.`;
    return false;
    } else if (nombre.length > 15){
        $(`.modal-container1`).slideDown()
        parrafoAlert.textContent = `El nombre es muy largo, no debe superar los 15 caracteres.`;
        return false;
    } else if (nombre.length < 3) {
        $(`.modal-container1`).slideDown()
        parrafoAlert.textContent = `El nombre es muy corto, debe superar los 2 caracteres.`;
        return false;
    } else if (apellido.length > 15) {
        $(`.modal-container1`).slideDown()
        parrafoAlert.textContent = `El apellido es muy largo, no debe superar los 15 caracteres.`;
        return false;
    } else if (apellido.length < 3) {
        $(`.modal-container1`).slideDown()
        parrafoAlert.textContent = `El apellido es muy corto, debe superar los 2 caracteres.`;
        return false;
    } else if (email.length > 30) {
        $(`.modal-container1`).slideDown()
        parrafoAlert.textContent = `El email es muy largo, no debe superar los 50 caracteres.`;
        return false;
    } else if (!expresion.test(email)) {
        $(`.modal-container1`).slideDown()
        parrafoAlert.textContent = `El email ingresado no es valido. Intente nuevamente.`;
        return false;
    }

    let paso1 = JSON.parse(localStorage.getItem(`usuarios`));

    if (localStorage.getItem(`usuarios`) != null) {
        let usuario = new Usuario(nombre, apellido, email, ciudad, consulta, recuerdame);
        paso1.push(usuario);
        localStorage.setItem(`usuarios`, JSON.stringify(paso1));
        parrafoUno.textContent = `Bienvenido! ${nombre} ${apellido}`;
        parrafoDos.textContent = `A la brevedad nos comunicaremos con usted. ¡Muchas gracias!. Verifique su correo: ${email} para ver nuestra respuesta`;
        $(`.modal-container`).fadeIn(1000);
    } else {
        localStorage.clear()
        let usuario = new Usuario(nombre, apellido, email, ciudad, consulta, recuerdame);
        Usuarios.push(usuario);
        localStorage.setItem(`usuarios`, JSON.stringify(Usuarios));
        parrafoUno.textContent = `Bienvenido! ${nombre} ${apellido}`;
        parrafoDos.textContent = `A la brevedad nos comunicaremos con usted. ¡Muchas gracias!. Verifique su correo: ${email} para ver nuestra respuesta`;
        $(`.modal-container`).fadeIn(1000);
        
    }
})
//Funcion de mostrar y ocultar
function mostrarEsconder(campo){
    if (campo.style.display === 'block'){
        campo.style.display = 'none';
    } else if(campo.style.display === 'none'){
        campo.style.display = 'block';
    }
}

//Funcion Modal
$(`.close`).click(function () {
    $(`.modal-container`).fadeOut();
});

//Funcion Alert - modal
$(`#cerrar`).click(function () {
    $(`.modal-container1`).slideUp();
});

//Eventos
$(document).ready(function () {
    $(`#nombre`).click(function () {
        mostrarEsconder(campoNombre);
    });
    $(`#apellido`).click(function () {
        mostrarEsconder(campoApellido);
    });
    $(`#email`).click(function () {
        mostrarEsconder(campoEmail);
    });
    $(`#consulta`).click(function () {
        mostrarEsconder(campoConsulta);
    });
});


