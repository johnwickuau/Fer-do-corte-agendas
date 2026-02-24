const lista = document.getElementById("listaAgendamentos");
let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

function renderizar() {

    lista.innerHTML = "";

    if (agendamentos.length === 0) {
        lista.innerHTML = "<tr><td colspan='5'>Nenhum agendamento.</td></tr>";
        return;
    }

    agendamentos.forEach((ag, index) => {

        const linha = `
            <tr>
                <td>${ag.nome || "Cliente"}</td>
                <td>${ag.servico}</td>
                <td>${ag.horario}</td>
                <td>${ag.data || "-"}</td>
                <td>
                    <button class="excluirBtn" onclick="excluir(${index})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;

        lista.innerHTML += linha;
    });
}

function excluir(index) {
    agendamentos.splice(index, 1);
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
    renderizar();
}

document.getElementById("limparTudo").addEventListener("click", () => {
    if (confirm("Tem certeza que deseja apagar todos os agendamentos?")) {
        localStorage.removeItem("agendamentos");
        agendamentos = [];
        renderizar();
    }
});

renderizar();