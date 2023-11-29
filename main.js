document.entrada.enviar.addEventListener("click", leFormulario);

function leFormulario(){
    const quantidade = document.entrada.quantidade.value;
    const frutas = document.entrada.fruta.value;

    console.log("Eu tenho " + quantidade + " " + frutas);
}