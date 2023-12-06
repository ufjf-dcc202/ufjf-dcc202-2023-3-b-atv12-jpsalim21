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

function transacao(origem, destino, tipo, quantidade){
    if(destino === "pomar"){
        const pessoa = estoque[origem];
        for(let i = 0; i < pessoa.length; i++){
            const monte = pessoa[i];
            if(monte.tipo === tipo){
                monte.quantidade -= quantidade;
            }
        }
        return;
    }
}

export {
    getEstoque,
    transacao
};