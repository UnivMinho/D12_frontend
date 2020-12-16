const variavelseis=document.getElementById("caixaTerminarSessaoMenu");
variavelseis.onclick=dadosTerminarSessao;

const variavel = document.getElementById("buttonbackMenu");
variavel.onclick = goBack;

const variavelum=document.getElementById("iconfirstsquareMenu");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquareMenu");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquareMenu");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquareMenu");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquareMenu");
variavelcinco.onclick=dadosfifthsquare;

const variavelsete = document.getElementById("buttonNaoMenu");
variavelsete.onclick = buttonNaoMenu;

const variaveloito = document.getElementById("buttonSimMenu");
variaveloito.onclick = buttonSimMenu;

const variavelnove = document.getElementById("buttonCloseMenu");
variavelnove.onclick = buttonCloseMenu;


function dadosTerminarSessao(){
document.getElementById("bgmodalMenu").className = "bgmodal"; //Apaarecer o aviso //ao carregar no botão vai para a página "Rank.html"
}

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

function buttonNaoMenu() {
    window.location.href = "Menu.html" //ao carregar no botão vai para a página "Página Inicial.html"
}

function buttonSimMenu() {
    window.location.href = "Inicio.html" //ao carregar no botão vai para a página "Página Inicial.html"
}

function buttonCloseMenu() {
    document.getElementById("bgmodalRegisto").className = "hidden" //carregar no X e fechar o aviso
}
