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

const variavelseis=document.getElementById("primeiroQuadradoOcorrencias");
variavelseis.onclick=dadosDadosOcorrenciaI;

const variavelsete=document.getElementById("segundoQuadradoOcorrencias");
variavelsete.onclick=dadosDadosOcorrenciaII;

const variaveloito=document.getElementById("terceiroQuadradoOcorrencias");
variaveloito.onclick=dadosDadosOcorrenciaIII;

const variavelnove=document.getElementById("quartoQuadradoOcorrencias");
variavelnove.onclick=dadosDadosOcorrenciaIV;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstsquare(){
window.location.href="PaginaInicial.html" //ao carregar no botão vai para a página "SemNotificacoes.html"
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

function dadosDadosOcorrenciaI(){
window.location.href="DadosOcorrencia.html" //ao carregar no botão vai para a página "DadosOcorrencia.html"
}

function dadosDadosOcorrenciaII(){
window.location.href="DadosOcorrencia.html" //ao carregar no botão vai para a página "DadosOcorrencia.html"
}

function dadosDadosOcorrenciaIII(){
window.location.href="DadosOcorrencia.html" //ao carregar no botão vai para a página "DadosOcorrencia.html"
}

function dadosDadosOcorrenciaIV(){
window.location.href="DadosOcorrencia.html" //ao carregar no botão vai para a página "DadosOcorrencia.html"
}
