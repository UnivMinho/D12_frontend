const variavel = document.getElementById("buttonbackArquivos");
variavel.onclick = goBack;

const variavelum=document.getElementById("iconfirstsquareArquivos");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareArquivos");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareArquivos");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareArquivos");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareArquivos");
variavelcinco.onclick=dadosfifthsquare;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstsquare(){
window.location.href="Notificacoes.html" //ao carregar no botão vai para a página "PaginaInicial (Menu).html"
}

function dadossecondsquare(){
window.location.href="RegistoOcorrencia.html" //ao carregar no botão vai para a página "PaginaInicial (Menu).html"
}

function dadosthirdsquare(){
window.location.href="Arquivos.html" //ao carregar no botão vai para a página "PaginaInicial (Menu).html"
}

function dadosfourthsqaure(){
window.location.href="DadosPessoais.html" //ao carregar no botão vai para a página "PaginaInicial (Menu).html"
}

function dadosfifthsquare(){
window.location.href="Rank.html" //ao carregar no botão vai para a página "PaginaInicial (Menu).html"
}