const variavel=document.getElementById("iconmenuPaginaInicial");
variavel.onclick=dadosmenu;

const variavelum=document.getElementById("iconfirstsquarePaginaInicial");
variavelum.onclick=dadosfirstsquare;

const variaveldois=document.getElementById("iconsecondsquarePaginaInicial");
variaveldois.onclick=dadossecondsquare;

const variaveltres=document.getElementById("iconthirdsquarePaginaInicial");
variaveltres.onclick=dadosthirdsquare;

const variavelquatro=document.getElementById("iconfourthsquarePaginaInicial");
variavelquatro.onclick=dadosfourthsqaure;

const variavelcinco=document.getElementById("iconfifthsquarePaginaInicial");
variavelcinco.onclick=dadosfifthsquare;


function dadosmenu(){
window.location.href="Menu.html" //ao carregar no botão vai para a página "PaginaInicial (Menu).html"
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