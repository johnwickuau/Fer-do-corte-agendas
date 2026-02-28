const lista = document.getElementById("listaHorarios")

// Support both keys: older "horarios" and current "agendamentos"
let horarios = JSON.parse(localStorage.getItem("agendamentos")) || JSON.parse(localStorage.getItem("horarios")) || []

// track which storage key we're using so removals update the correct one
let storageKey = localStorage.getItem("agendamentos") ? "agendamentos" : (localStorage.getItem("horarios") ? "horarios" : "agendamentos")

function carregarHorarios(){

	lista.innerHTML = ""

	if(horarios.length === 0){
		lista.innerHTML = "<p>Nenhum horário agendado.</p>"
		return
	}

	horarios.forEach((h,index)=>{

		const div = document.createElement("div")
		div.classList.add("horario")

		// show available fields from agendamento objects (compat with older shape)
		const servico = h.servico || ''
		const data = h.data || ''
		const hora = h.horario || h.hora || ''
		const nome = h.nome || ''

		div.innerHTML = `
<div class="info">
<strong>Serviço:</strong> ${servico || nome}<br>
<strong>Data:</strong> ${data}<br>
<strong>Hora:</strong> ${hora}
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

	localStorage.setItem(storageKey,JSON.stringify(horarios))

	carregarHorarios()

}

carregarHorarios()