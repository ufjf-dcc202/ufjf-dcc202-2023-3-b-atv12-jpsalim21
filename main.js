document.entrada.addEventListener("submit", leFormulario);

function leFormulario(event){
    event.preventDefault();
    const quantidade = document.entrada.quantidade.value;
    const frutas = document.entrada.fruta.value;

    console.log("Eu tenho " + quantidade + " " + frutas);
}