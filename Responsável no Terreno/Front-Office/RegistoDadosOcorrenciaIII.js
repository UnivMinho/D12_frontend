const variavel = document.getElementById("buttonbackRegistoDadosOcorrenciaIII");
variavel.onclick = goBack;

const variavelum=document.getElementById("iconfirstsquareRegistoDadosOcorrenciaIII");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareRegistoDadosOcorrenciaIII");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareRegistoDadosOcorrenciaIII");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareRegistoDadosOcorrenciaIII");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareRegistoDadosOcorrenciaIII");
variavelcinco.onclick=dadosfifthsquare;

const variavelseis=document.getElementById("arrowOneRegistoDadosOcorrenciaIII");
variavelseis.onclick=dadosArrowOne;

const variavelsete=document.getElementById("arrowTwoRegistoDadosOcorrenciaIII");
variavelsete.onclick=dadosArrowTwo;

const variaveloito=document.getElementById("arrowThreeRegistoDadosOcorrenciaIII");
variaveloito.onclick=dadosArrowThree;

const variavelnove=document.getElementById("arrowFourRegistoDadosOcorrenciaIII");
variavelnove.onclick=dadosArrowFour;

const variaveldez=document.getElementById("arrowFiveRegistoDadosOcorrenciaIII");
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