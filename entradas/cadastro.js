const form = document.getElementById("formCadastro");

form.addEventListener("submit", function(event){

event.preventDefault();

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const cpf = document.getElementById("cpf").value;
const senha = document.getElementById("senha").value;
const confirmarSenha = document.getElementById("confirmarSenha").value;

if(senha !== confirmarSenha){

alert("As senhas não coincidem!");
return;

}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuario = {

nome: nome,
email: email,
cpf: cpf,
senha: senha

};

usuarios.push(usuario);

localStorage.setItem("usuarios", JSON.stringify(usuarios));

alert("Cadastro realizado com sucesso!");

form.reset();

});