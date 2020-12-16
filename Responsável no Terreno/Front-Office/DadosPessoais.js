const variavel = document.getElementById("buttonbackDadosPessoais");
variavel.onclick = goBack;

const variavelum = document.getElementById("iconfirstsquareDadosPessoais");
variavelum.onclick = dadosfirstsquare;

const variaveldois = document.getElementById("iconsecondsquareDadosPessoais");
variaveldois.onclick = dadossecondsquare;

const variaveltres = document.getElementById("iconthirdsquareDadosPessoais");
variaveltres.onclick = dadosthirdsquare;

const variavelquatro = document.getElementById("iconfourthsquareDadosPessoais");
variavelquatro.onclick = dadosfourthsqaure;

const variavelcinco = document.getElementById("iconfifthsquareDadosPessoais");
variavelcinco.onclick = dadosfifthsquare;

const checkbox = document.getElementById("checkboxDadosPessoais");
checkbox.onclick = checkboxCheckedDadosPessoais;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstsquare() {
    window.location.href = "PaginaInicial.html" //ao carregar no botão vai para a página "Notificacoes.html"
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

function checkboxCheckedDadosPessoais() {
    if ((document.getElementById("checkboxDadosPessoais").checked))
        document.getElementById("boxConfirmarPassword").style.visibility = "visible";
        document.getElementById("textoConfirmarPassword").style.visibility = "visible";

        document.getElementById("boxNovaPassword").style.visibility = "visible";
        document.getElementById("textoNovaPassword").style.visibility = "visible";

        document.getElementById("boxConfirmarNovaPassword").style.visibility = "visible";
        document.getElementById("textoConfirmarNovaPassword").style.visibility = "visible";
        
        document.getElementById("boxPassword1").style.background = "#EFF3F6";
        document.getElementById("textoPassword").style.color = "#6e7191";
}
