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

export {getEstoque};