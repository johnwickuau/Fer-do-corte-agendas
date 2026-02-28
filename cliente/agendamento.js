// Selecionando elementos
const btnConfirmar = document.querySelector(".btn-confirmar");
const inputData = document.getElementById("data");
const selectHorario = document.getElementById("horario");
const selectServico = document.getElementById("servico");
const inputNome = document.getElementById("nome");

// Evento de clique
btnConfirmar.addEventListener("click", function (e) {
    e.preventDefault();

    const nome = inputNome ? inputNome.value.trim() : "";
    const data = inputData.value;
    const horario = selectHorario.value;
    const servico = selectServico.value;

    // Validação simples
    if (nome === "" || data === "" || horario === "" || servico === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Criando objeto do agendamento com status padrão
    const agendamento = {
        nome: nome,
        data: data,
        horario: horario,
        servico: servico,
        status: "pendente"
    };

    // Pegando agendamentos já salvos
    let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    // Adicionando novo
    agendamentos.push(agendamento);

    // Salvando no navegador
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    alert("Agendamento salvo com sucesso! ✅");

    // Opcional: redirecionar para confirmação
    window.location.href = "confirmacao.html";
});