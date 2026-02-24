// Selecionando elementos
const btnConfirmar = document.querySelector(".btn-confirmar");
const inputData = document.getElementById("data");
const selectHorario = document.getElementById("horario");
const selectServico = document.getElementById("servico");

// Evento de clique
btnConfirmar.addEventListener("click", function () {

    const data = inputData.value;
    const horario = selectHorario.value;
    const servico = selectServico.value;

    // Validação simples
    if (data === "" || horario === "" || servico === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Criando objeto do agendamento
    const agendamento = {
        data: data,
        horario: horario,
        servico: servico
    };

    // Pegando agendamentos já salvos
    let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    // Adicionando novo
    agendamentos.push(agendamento);

    // Salvando no navegador
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    alert("Agendamento salvo com sucesso! ✅");

    // Limpando campos
    inputData.value = "";
    selectHorario.selectedIndex = 0;
    selectServico.selectedIndex = 0;
});