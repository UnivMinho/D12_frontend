const variavel = document.getElementById("buttonbackRegistoOcorrencia");
variavel.onclick = goBack;

const variavelum=document.getElementById("iconfirstsquareRegistoOcorrencia");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareRegistoOcorrencia");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareRegistoOcorrencia");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareRegistoOcorrencia");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareRegistoOcorrencia");
variavelcinco.onclick=dadosfifthsquare;

const variavelseis = document.getElementById("buttonbackRegistoOcorrencia");
variavelseis.onclick = goBack;

const variavelsete = document.getElementById("botaoEntrarRegistoOcorrencia");
variavelsete.onclick = dadosBotaoEntrar;


function goBack() { //voltar para a página anterior
    window.history.back()
}

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

function dadosBotaoEntrar(){
window.location.href="RegistoDadosOcorrenciaI.html" //ao carregar no botão vai para a página "RegistoDadosOcorrenciaI.html"
}