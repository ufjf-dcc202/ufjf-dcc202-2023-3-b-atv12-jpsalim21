import { getEstoque } from "./estoque.js";

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener("submit", leFormulario);

atualizaTela();

function leFormulario(event){
    event.preventDefault();
    const quantidade = Number(document.entrada.quantidade.value);
    const frutas = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(origem + " doa " + quantidade + " " + frutas + " para " + destino);
    //document.entrada.submit();
}

function atualizaTela(){
    const estoque = getEstoque();
    olJoao.innerHTML = "";
    olMaria.innerHTML = "";
    for(let i = 0; i < estoque.joao.length; i++){
        const monte = estoque.joao[i];
        const li = document.createElement('li');
        li.textContent = monte.tipo + ": " + monte.quantidade;
        olJoao.append(li);
    }
    for(let i = 0; i < estoque.maria.length; i++){
        const monte = estoque.maria[i];
        const li = document.createElement('li');
        li.textContent = monte.tipo + ": " + monte.quantidade;
        olMaria.append(li);
    }
}