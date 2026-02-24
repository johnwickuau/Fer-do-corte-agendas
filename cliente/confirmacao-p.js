// Pega os agendamentos salvos
const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

if (agendamentos.length > 0) {

    const ultimo = agendamentos[agendamentos.length - 1];

    document.getElementById("nomeCliente").innerText = ultimo.nome || "Cliente";
    document.getElementById("servicoCliente").innerText = ultimo.servico;
    document.getElementById("horarioCliente").innerText = ultimo.horario;

    // Extrair valor do serviço
    const valor = ultimo.servico.match(/R\$\s?[\d,]+/);
    document.getElementById("valorCliente").innerText = valor ? valor[0] : "R$ --";

} else {
    alert("Nenhum agendamento encontrado!");
    window.location.href = "index.html";
}

// Confirmar
document.getElementById("confirmarBtn").addEventListener("click", () => {
    alert("Agendamento confirmado com sucesso! 🔥");
    window.location.href = "index.html";
});

// Cancelar
document.getElementById("cancelarBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});