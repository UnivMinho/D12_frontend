const variavel = document.getElementById("buttonbackComunicarProblemas");
variavel.onclick = goBack;

function goBack() { //voltar para a página anterior
    window.history.back()
}