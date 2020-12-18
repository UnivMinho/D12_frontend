const variavel = document.getElementById("buttonbackRegistoDadosOcorrenciaVI");
variavel.onclick = goBack;

const variavelum = document.getElementById("iconfirstsquareRegistoDadosOcorrenciaVI");
variavelum.onclick = dadosfirstsquare;

const variaveldois = document.getElementById("iconsecondsquareRegistoDadosOcorrenciaVI");
variaveldois.onclick = dadossecondsquare;

const variaveltres = document.getElementById("iconthirdsquareRegistoDadosOcorrenciaVI");
variaveltres.onclick = dadosthirdsquare;

const variavelquatro = document.getElementById("iconfourthsquareRegistoDadosOcorrenciaVI");
variavelquatro.onclick = dadosfourthsqaure;

const variavelcinco = document.getElementById("iconfifthsquareRegistoDadosOcorrenciaVI");
variavelcinco.onclick = dadosfifthsquare;

const variavelseis = document.getElementById("arrowOneRegistoDadosOcorrenciaVI");
variavelseis.onclick = dadosArrowOne;

const variavelsete = document.getElementById("arrowTwoRegistoDadosOcorrenciaVI");
variavelsete.onclick = dadosArrowTwo;

const variaveloito = document.getElementById("arrowThreeRegistoDadosOcorrenciaVI");
variaveloito.onclick = dadosArrowThree;

const variavelnove = document.getElementById("arrowFourRegistoDadosOcorrenciaVI");
variavelnove.onclick = dadosArrowFour;

const variaveldez = document.getElementById("arrowFiveRegistoDadosOcorrenciaVI");
variaveldez.onclick = dadosArrowFive;

const variavelonze = document.getElementById("buttonNaoRegistoDadosOcorrenciaVI");
variavelonze.onclick = buttonNao;

const variaveldoze = document.getElementById("buttonSimRegistoDadosOcorrenciaVI");
variaveldoze.onclick = buttonSim;

const variaveltreze = document.getElementById("buttonEnviarCORegistoDadosOcorrencia");
variaveltreze.onclick = buttonEnviarCO;

const variavelcatorze = document.getElementById("buttonCloseRegistoDadosOcorrenciaVI");
variavelcatorze.onclick = buttonClose;

const variavelquinze = document.getElementById("horasChegada");
variavelquinze.onclick = dadosDesativarUm;

const variaveldezasseis = document.getElementById("horasPartida");
variaveldezasseis.onclick = dadosDesativarDois;

const variaveldezassete = document.getElementById("arrowThreeRegistoDadosOcorrenciaVI");
variaveldezassete.onclick = dadosDesativarTres;

const variaveldezoito = document.getElementById("arrowFourRegistoDadosOcorrenciaVI");
variaveldezoito.onclick = dadosDesativarQuatro;

const variaveldezanove = document.getElementById("arrowFiveRegistoDadosOcorrenciaVI");
variaveldezanove.onclick = dadosDesativarCinco;





function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstsquare() {
    window.location.href = "SemNotificacoes.html" //ao carregar no botão vai para a página "Notificacoes.html"
}

function dadossecondsquare() {
    window.location.href = "RegistoOcorrencia.html" //ao carregar no botão vai para a página "RegistoOcorrencia.html"
}

function dadosthirdsquare() {
    window.location.href = "Arquivos.html" //ao carregar no botão vai para a página "Arquivos.html"
}

function dadosfourthsqaure() {
    window.location.href = "DadosPessoais.html" //ao carregar no botão vai para a página "DadosPessoais.html"
}

function dadosfifthsquare() {
    window.location.href = "Rank.html" //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowOne() {
    window.location.href = "LevantamentoMaterial.html" //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowTwo() {
    window.location.href = "PresencasOperacionais.html" //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowThree() {
    //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowFour() {
    //ao carregar no botão vai para a página "Rank.html"
}

function dadosArrowFive() {
    //ao carregar no botão vai para a página "Rank.html"
}

function buttonNao() {
    window.location.href = "PaginaInicial.html" //ao carregar no botão vai para a página "Página Inicial.html"
}

function buttonSim() {
    window.location.href = "PaginaInicial.html" //ao carregar no botão vai para a página "Página Inicial.html"
}

function buttonEnviarCO() {
    document.getElementById("bgmodalRegistoDadosOcorrenciaVI").className = "bgmodal"; //Apaarecer o aviso
}

function buttonClose() {
    document.getElementById("bgmodalRegistoDadosOcorrenciaVI").className="hidden" //carregar no X e fechar o aviso
}

function dadosDesativarUm() {
        document.getElementById("boxPartida").style.background = "#eff0f6";
        document.getElementById("textoPartida").style.color = "#414145";
}

function dadosDesativarDois() {
        document.getElementById("boxChegada").style.background = "#eff0f6";
        document.getElementById("textoChegada").style.color = "#414145";
}

function dadosDesativarTres() {
        document.getElementById("boxDadosComplementares").style.background = "#eff0f6";
        document.getElementById("textoDadosComplementares").style.color = "#414145";
        window.location.href = "DadosComplementares.html"
}

function dadosDesativarQuatro() {
        document.getElementById("boxMaterialUtilizado").style.background = "#eff0f6";
        document.getElementById("textoMaterialUtilizado").style.color = "#414145";
        window.location.href = "MaterialUtilizado.html" 
}

function dadosDesativarCinco() {
        document.getElementById("boxAvaliacao").style.background = "#eff0f6";
        document.getElementById("textoAvaliacao").style.color = "#414145";
        window.location.href = "AvaliacaoEquipa.html"
}