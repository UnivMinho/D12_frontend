const variavel = document.getElementById("buttonbackRankOcorrencias");
variavel.onclick = goBack;

const variavelRankOcorrenciaUm = document.getElementById("primeiroQuadradoOcorrencias");
variavelRankOcorrenciaUm.onclick = dadosOcorrenciaPrimeiro;

const variavelRankOcorrenciaDois = document.getElementById("segundoQuadradoOcorrencias");
variavelRankOcorrenciaDois.onclick = dadosOcorrenciaSegundo;

const variavelRankOcorrenciaTerceiro = document.getElementById("terceiroQuadradoOcorrencias");
variavelRankOcorrenciaTerceiro.onclick = dadosOcorrenciaTerceiro;

const variavelRankOcorrenciaQuarto = document.getElementById("quartoQuadradoOcorrencias");
variavelRankOcorrenciaQuarto.onclick = dadosOcorrenciaQuarto;


const variavelum=document.getElementById("iconfirstsquareRankOcorrencia");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareRankOcorrencia");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareRankOcorrencia");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareRankOcorrencia");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareRankOcorrencia");
variavelcinco.onclick=dadosfifthsquare;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosOcorrenciaPrimeiro(){
window.location.href="Equipa.html" //ao carregar no botão vai para a página "Equipa.html"
}

function dadosOcorrenciaSegundo(){
window.location.href="Equipa.html" //ao carregar no botão vai para a página "Equipa.html"
}

function dadosOcorrenciaTerceiro(){
window.location.href="Equipa.html" //ao carregar no botão vai para a página "Equipa.html"
}

function dadosOcorrenciaQuarto(){
window.location.href="Equipa.html" //ao carregar no botão vai para a página "Equipa.html"
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