const variavel = document.getElementById("buttonbackTermosEPoliticas");
variavel.onclick = goBack;

function goBack() { //voltar para a página anterior
    window.history.back()
}