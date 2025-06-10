//logica para colocar elemento com validação
let contador = 0;
let input = document.getElementById('input');
let adicionar = document.getElementById('add');
let main = document.getElementById('area')

function add_elemento() {
    let tarefa = input.value;

    if ((tarefa == null) || (tarefa == "") || (tarefa == undefined)) {
        input.classList.add('tarefa_invalida');
        input.value = "";
        input.placeholder = "Digite uma tarefa válida";
    }

    else {
        ++contador;
        let novo_item = `<div class="area_tarefas">
            <div id="${contador}" class="boxes">
                <div class="circle">
                    <span class="mdi mdi-circle-outline"></span>
                </div>

                <div class="titulo_tarefa">
                    <p>teste de tarefa</p>
                </div>

                <div>
                    <button id="delete_function" onclick="deletar_tarefa(${contador})" class="del">
                        <span class="mdi mdi-trash-can-outline"></span>Deletar
                    </button>
                </div>
            </div></div>`

        input.value = "";
        input.focus();

        main.innerHTML += novo_item
    }
}

//adicionar item ao clicar no enter
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        adicionar.click();
    }
}
)



//logica para tarefa concluida

function tarefa_concluida() {


}

//logica para deletar

function deletar_tarefa(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}