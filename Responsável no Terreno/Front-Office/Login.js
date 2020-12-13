const variavel = document.getElementById("buttonlogin");
variavel.onclick = averiguardados;

const variaveldois = document.getElementById("buttonNaoLogin");
variaveldois.onclick = buttonNao;

const variaveltres = document.getElementById("buttonSimLogin");
variaveltres.onclick = buttonSim;

const variavelquatro = document.getElementById("buttonbackLogin");
variavelquatro.onclick = goBack;

function averiguardados() {
    
    document.getElementById("bgmodalLogin").className="bgmodal"; //Apaarecer o aviso

    if (document.getElementById("inputemail").value == "" ||
        document.getElementById("inputemail").value.indexOf('@') == -1 ||
        document.getElementById("inputemail").value.indexOf('.') == -1) {
        alert("Preencha campo email corretamente!");
        document.getElementById("inputemail").focus();
        return false;
    }

    //TRATAR DA PROGRAMAÇÃO DO EMAIL, VERIFICAR SE O MAIL INSERIDO É UM DOS QUE ESTÁ REGISTADO, SENÃO DÁ UM AVISO COM "O email que inseriu não está registado"
    //Caso as credencais não corresponderem (Email e password) dar um aviso "Não foi possível iniciar a sessão. Não foram fornecidas credenciais de autenticação válidas."

    if (document.getElementById("inputpassword").value == "") {
        alert("Preencha campo Password corretamente!");
        document.getElementById("inputpassword").focus();
        return false;
    }
    
}

function goBack() { //voltar para a página anterior
    window.history.back()
}

function buttonNao() {
    window.location.href = "PaginaInicial.html" //ao carregar no botão vai para a página "Página Inicial.html"
}

function buttonSim() {
    window.location.href = "PaginaInicial.html" //ao carregar no botão vai para a página "Página Inicial.html"
}
