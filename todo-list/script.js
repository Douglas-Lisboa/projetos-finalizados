const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
  if (input.value.trim() === '') {
    alert('Por favor, insira uma tarefa válida.');
    return;
  }

  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false
  })

  input.value = ''

  mostrarTarefas()
  alert('Nova tarefa adicionada com sucesso!');
}

function mostrarTarefas() {

  let novaLi = ''

  minhaListaDeItens.forEach( (item, posicao) => {

    novaLi = novaLi + `

<li class="task ${item.concluida && "done"}">
    <img src="./img/checked.png" alt="check a tarefa" onclick="concluirTarefa(${posicao})"/>
    <p>${item.tarefa}</p>
    <img src="./img/trash.png" alt="lixeira" onclick="deletarItem(${posicao})">
</li>
    
    `

  })

 listaCompleta.innerHTML = novaLi

 localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

mostrarTarefas()

}

function deletarItem (posicao) {
  minhaListaDeItens.splice(posicao, 1)

  mostrarTarefas()
 
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem('lista')

  if(tarefasDoLocalStorage) {
  minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
  }

  mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)