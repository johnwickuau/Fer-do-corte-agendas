function Voltar(){
    window.location.href = "./index.html";
}

function Alerta(){
    const confirmacao = confirm("Você realmente quer confirmar este agendamento?");
    if(confirmacao){
        window.location.href = "./recibo.html";
    }
}