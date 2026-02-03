function verificarCredenciais() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const emailAdm = "admin@gmail.com";
    const senhaAdm = "1234";

    if (email === emailAdm && senha === senhaAdm) {
        window.location.href = "adm.html";
    } else {
        window.location.href = "agendamento.html";
    }
}
