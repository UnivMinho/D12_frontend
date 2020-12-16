const variavel = document.getElementById("buttonbackDefinicoesEPrivacidade");
variavel.onclick = goBack;

function goBack() { //voltar para a página anterior
    window.history.back()
}