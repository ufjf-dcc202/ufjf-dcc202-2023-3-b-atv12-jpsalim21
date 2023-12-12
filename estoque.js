/*
let estoque = {
    'joao': {
        'maca': 1,
        'banana': 2
    },
    'maria': {
        'maca': 2,
        'pera': 3
    }
};*/
let estoque = {
    'joao': [
        {'tipo': 'maca', 'quantidade': 1},
        {'tipo': 'peras', 'quantidade': 2}
    ],
    'maria': [
        {'tipo': 'maca', 'quantidade': 2},
        {'tipo': 'banana', 'quantidade': 4}
    ]
}

function getEstoque(){
    return structuredClone(estoque);
}

function transacao(origem, destino, tipo, qtd){
    if(destino === origem){
        return;
    }
    if(destino === "pomar"){
        dePessoaParaPomar(destino, qtd, tipo);
        return;
    }
    if(origem === "pomar"){
        dePomarParaPessoa(destino, qtd, tipo);
        return;
    }
    dePessoaParaPessoa(origem, destino, qtd, tipo);
}
function dePessoaParaPessoa(origem, destino, qtd, tipo){
    const pessoaOrigem = estoque[origem];
    const pessoaDestino = estoque[destino];
    let monteOrigem;
    for(let i = 0; i < pessoaOrigem.length; i++){
        const monte = pessoaOrigem[i];
        if(monte.tipo === tipo){
            monteOrigem = monte;
            break;
        }
    }
    if(!monteOrigem){
        return;
    }
    let monteDestino;
    for(let i = 0; i < pessoaDestino.length; i++){
        const monte = pessoaDestino[i];
        if(monte.tipo === tipo){
            monteDestino = monte;
            break;
        }
    }
    if(!monteDestino){
        monteDestino = {'tipo': tipo, 'quantidade': 0};
    }
    const quantidadeReal = Math.min(qtd, monteOrigem.quantidade);
    monteDestino.quantidade += quantidadeReal;
    monteOrigem.quantidade -= quantidadeReal; 
}

function dePessoaParaPomar(origem, qtd, tipo){
    const pessoa = estoque[origem];
    console.log(origem);
    for(let i = 0; i < pessoa.length; i++){
        const monte = pessoa[i];
        if(monte.tipo === tipo){
            monte.quantidade -= qtd;
        }
    }
}
function dePomarParaPessoa(destino, qtd, tipo){
    const pessoa = estoque[destino];
    for(let i = 0; i < pessoa.length; i++){
        const monte = pessoa[i];
        if(monte.tipo == tipo){
            pessoa[i].quantidade += qtd;
            return;
        }
    }
    const novoMonte = {'tipo': tipo, 'quantidade': qtd};
    pessoa.push(novoMonte);
}

export {
    getEstoque,
    transacao
};