const variavel = document.getElementById("buttonbackRegistoDadosOcorrenciaIV");
variavel.onclick = goBack;

const variavelum=document.getElementById("iconfirstsquareRegistoDadosOcorrenciaIV");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareRegistoDadosOcorrenciaIV");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareRegistoDadosOcorrenciaIV");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareRegistoDadosOcorrenciaIV");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareRegistoDadosOcorrenciaIV");
variavelcinco.onclick=dadosfifthsquare;

const variavelseis=document.getElementById("arrowOneRegistoDadosOcorrenciaIV");
variavelseis.onclick=dadosArrowOne;

const variavelsete=document.getElementById("arrowTwoRegistoDadosOcorrenciaIV");
variavelsete.onclick=dadosArrowTwo;

const variaveloito=document.getElementById("arrowThreeRegistoDadosOcorrenciaIV");
variaveloito.onclick=dadosArrowThree;

const variavelnove=document.getElementById("arrowFourRegistoDadosOcorrenciaIV");
variavelnove.onclick=dadosArrowFour;

const variaveldez=document.getElementById("arrowFiveRegistoDadosOcorrenciaIV");
variaveldez.onclick=dadosArrowFive;



function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstsquare(){
window.location.href="SemNotificacoes.html" //ao carregar no botão vai para a página "Notificacoes.html"
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

function dadosArrowOne(){
window.location.href="LevantamentoMaterial.html" //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowTwo(){
window.location.href="PresencasOperacionais.html" //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowThree(){
window.location.href="DadosComplementares.html" //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowFour(){
window.location.href="MaterialUtilizado.html" //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowFive(){
window.location.href="AvaliacaoEquipa.html" //ao carregar no botão vai para a página "Rank.html"
}
