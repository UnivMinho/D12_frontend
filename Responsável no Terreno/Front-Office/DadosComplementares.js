const variavel = document.getElementById("buttonbackDadosComplementares");
variavel.onclick = goBack;

function goBack() { //voltar para a página anterior
    window.history.back()
}
