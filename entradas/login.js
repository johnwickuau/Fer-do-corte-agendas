function verificarCredenciais(){

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuarioEncontrado = usuarios.find(usuario => 
usuario.email === email && usuario.senha === senha
);

if(usuarioEncontrado){

alert("Login realizado com sucesso!");

window.location.href = "../cliente/agendamento.html";

}else{

alert("Email ou senha incorretos!");

}

}