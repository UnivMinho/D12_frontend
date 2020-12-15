const variavel = document.getElementById("buttonbackRegistoDadosOcorrenciaII");
variavel.onclick = goBack;

const variavelum=document.getElementById("iconfirstsquareRegistoDadosOcorrenciaII");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareRegistoDadosOcorrenciaII");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareRegistoDadosOcorrenciaII");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareRegistoDadosOcorrenciaII");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareRegistoDadosOcorrenciaII");
variavelcinco.onclick=dadosfifthsquare;


function goBack() { //voltar para a página anterior
    window.history.back()
}

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
