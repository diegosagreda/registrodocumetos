import {
    registroDocumento,
    registrarUsuarioDocumento
} from "./firebase.js";

const btn_registrar = document.getElementById("btn-registrar");
const btn_cancelar = document.getElementById("btn-cancelar");
let file = ''

const documento = document.getElementById("documento");

documento.addEventListener("change", (evt) =>{
    file = evt.target.files[0];
})


btn_registrar.addEventListener("click", () => {
    const cedula = document.getElementById("cedula").value;
  
    registroDocumento(file,cedula)
    .then((res) => {
        registrarUsuarioDocumento(cedula,res)
    })
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1500
    })
    setTimeout(() => {
        window.close();
    }, 4000);
})
btn_cancelar.addEventListener("click", () => {
    window.close();
})
