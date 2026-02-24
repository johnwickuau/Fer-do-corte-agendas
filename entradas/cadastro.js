document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formCadastro");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmar = document.getElementById("confirmar").value;

        mensagem.textContent = "";
        mensagem.style.color = "red";

        // ================= VALIDAÇÕES =================

        if (!nome || !email || !cpf || !senha || !confirmar) {
            mensagem.textContent = "Preencha todos os campos.";
            return;
        }

        if (senha !== confirmar) {
            mensagem.textContent = "As senhas não coincidem.";
            return;
        }

        if (senha.length < 6) {
            mensagem.textContent = "A senha deve ter no mínimo 6 caracteres.";
            return;
        }

        // ================= LOCAL STORAGE =================

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verifica se email já existe
        const emailExiste = usuarios.some(user => user.email === email);

        if (emailExiste) {
            mensagem.textContent = "Este email já está cadastrado.";
            return;
        }

        const novoUsuario = {
            id: Date.now(),
            nome: nome,
            email: email,
            cpf: cpf,
            senha: senha
        };

        usuarios.push(novoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        mensagem.style.color = "lightgreen";
        mensagem.textContent = "Cadastro realizado com sucesso!";

        form.reset();

        // Redireciona após 1.5s
        setTimeout(() => {
            window.location.href = "../cliente/agendamento.html";
        }, 1500);
    });

});