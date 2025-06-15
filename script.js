//logica para colocar elemento com validação
let contador = 0;
let input = document.getElementById('input');
let adicionar = document.getElementById('add');
let main = document.getElementById('area')
let tarefa = input.value;

function add_elemento() {
    let tarefa = input.value;

    if ((tarefa == null) || (tarefa == "") || (tarefa == undefined)) {
        input.classList.add('tarefa_invalida');
        input.value = "";
        input.placeholder = "Digite uma tarefa válida";
    }

    else {
        ++contador;
        let novo_item = `<div id="${contador}" class="area_tarefas">
            <div id="tarefa_${contador}" class="boxes" onclick="tarefa_concluida(${contador})">
                <div class="circle" id="cor_${contador}">
                    <span id="icone_${contador}" class="mdi mdi-circle-outline"></span>
                </div>

                <div class="titulo_tarefa" id="titulo_${contador}">
                    <p>${tarefa}</p>
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

function tarefa_concluida(id){
    var tarefa = document.getElementById("tarefa_"+id);
    //impede a verificação se a terefa ja tiver sido excluida
    if (!tarefa) return;
    var classe = tarefa.getAttribute("class");
    console.log(classe);
    var icone = document.getElementById("icone_"+id);
    var conteudo = document.getElementById("titulo_"+id);
    var cor = document.getElementById("cor_"+id);
    var area = document.getElementById("area");
    var div = document.getElementById(id);

    if (classe == "boxes"){
        tarefa.classList.add("clicada");
               
        icone.classList.replace("mdi-circle-outline", "mdi-check-circle");
        //replace literalmente faz o replace da segunda pela primeiro ou seja a primeira classe e substituida pela segunda
        cor.classList.replace("circle", "check");
        conteudo.classList.add("titulo_tarefa_clicada");
        tarefa.classList.replace("boxes", "tarefa_clicada");

        area.appendChild(div);
    }else {
        tarefa.classList.remove("clicada");
    
        icone.classList.replace("mdi-check-circle", "mdi-circle-outline");
        cor.classList.replace("check", "circle");
        conteudo.classList.remove("titulo_tarefa_clicada");
        tarefa.classList.replace("tarefa_clicada", "boxes");
    }
}

//logica para deletar

function deletar_tarefa(id) {
    var tarefa = document.getElementById("tarefa_"+id);
    var div_tarefa = document.getElementById(id);
    if (tarefa) {
        tarefa.remove();
        div_tarefa.remove();
    }
    
}
