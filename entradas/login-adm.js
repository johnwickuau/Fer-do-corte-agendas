function verificarCredenciaisAdmin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuarioAdm = "adm";
    const senhaAdm = "adm123";

    if (usuario === usuarioAdm && senha === senhaAdm) {
        window.location.href = "../adm/Adm.html";
    } else {
        alert("Credenciais incorretas.");
    }
}