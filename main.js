import { getEstoque, transacao, limpaLista } from "./estoque.js";

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener("submit", leFormulario);

const botao = document.querySelector("#buttonClearList");
botao.addEventListener("click", () => {limpaLista(); atualizaTela();});

atualizaTela();

function leFormulario(event){
    event.preventDefault();
    const quantidade = Number(document.entrada.quantidade.value);
    const fruta = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(origem + " doa " + quantidade + " " + fruta + " para " + destino);

    transacao(origem, destino, fruta, quantidade);
    atualizaTela();
    //document.entrada.submit();
}

function atualizaTela(){
    const estoque = getEstoque();
    olJoao.innerHTML = "";
    olMaria.innerHTML = "";
    preencherLista(olJoao, estoque.joao);
    preencherLista(olMaria, estoque.maria);
}

function preencherLista(lista, estoque){
    lista.innerHTML = "";
    for(let i = 0; i < estoque.length; i++){
        const monte = estoque[i];
        const li = document.createElement('li');
        li.textContent = monte.tipo + ": " + monte.quantidade;
        lista.append(li);
    }
}