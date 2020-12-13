const variavelum=document.getElementById("iconfirstsquareRank");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareRank");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareRank");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareRank");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareRank");
variavelcinco.onclick=dadosfifthsquare;

const variavelseis = document.getElementById("buttonbackRank");
variavelseis.onclick = goBack;


function dadosfirstsquare(){
window.location.href="Notificacoes.html" //ao carregar no botão vai para a página "Notificacoes.html"
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