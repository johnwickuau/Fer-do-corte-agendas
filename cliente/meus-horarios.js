const lista = document.getElementById("listaHorarios")

let horarios = JSON.parse(localStorage.getItem("horarios")) || []

function carregarHorarios(){

lista.innerHTML=""

if(horarios.length === 0){

lista.innerHTML="<p>Nenhum horário agendado.</p>"
return

}

horarios.forEach((h,index)=>{

const div = document.createElement("div")
div.classList.add("horario")

div.innerHTML = `
<div class="info">
<strong>Nome:</strong> ${h.nome}<br>
<strong>Data:</strong> ${h.data}<br>
<strong>Hora:</strong> ${h.hora}
</div>

<button class="remover" onclick="remover(${index})">
Cancelar
</button>
`

lista.appendChild(div)

})

}

function remover(index){

horarios.splice(index,1)

localStorage.setItem("horarios",JSON.stringify(horarios))

carregarHorarios()

}

carregarHorarios()