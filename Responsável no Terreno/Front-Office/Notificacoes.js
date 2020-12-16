const variavelum=document.getElementById("iconfirstsquareNotificacoes");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareNotificacoes");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareNotificacoes");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareNotificacoes");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareNotificacoes");
variavelcinco.onclick=dadosfifthsquare;

const variavelseis = document.getElementById("buttonbackNotificacoes");
variavelseis.onclick = goBack;


function dadosfirstsquare(){
window.location.href="PaginaInicial.html" //ao carregar no botão vai para a página "Notificacoes.html"
}

function dadossecondsquare(){
window.location.href="RegistoOcorrencia.html" //ao carregar no botão vai para a página "RegistoOcorrencia.html"
}

function dadosthirdsquare(){
window.location.href="Arquivos.html" //ao carregar no botão vai para a página "Arquivos.html"
}

function dadosfourthsqaure(){
window.location.href="DadosPessoais.html" //ao carregar no botão vai para a página "DadosPessoais.html"
}

function dadosfifthsquare(){
window.location.href="Rank.html" //ao carregar no botão vai para a página "Rank.html"
}

function goBack() { //voltar para a página anterior
    window.history.back()
}