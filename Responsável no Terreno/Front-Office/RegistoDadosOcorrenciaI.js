const variavel = document.getElementById("buttonbackRegistoDadosOcorrenciaI");
variavel.onclick = goBack;

const variavelum=document.getElementById("iconfirstsquareRegistoDadosOcorrenciaI");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareRegistoDadosOcorrenciaI");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareRegistoDadosOcorrenciaI");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareRegistoDadosOcorrenciaI");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareRegistoDadosOcorrenciaI");
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
