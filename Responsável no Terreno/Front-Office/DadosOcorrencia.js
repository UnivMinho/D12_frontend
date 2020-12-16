const variavel = document.getElementById("buttonbackDadosOcorrencia");
variavel.onclick = goBack;

const variavelum=document.getElementById("buttonAddTestemunhasNotas");
variavelum.onclick=dados;

function goBack() { //voltar para a página anterior
    window.history.back()
}

function dados(){
window.location.href="AdicionarTestemunhasENotas.html" //ao carregar no botão vai para a página "Notificacoes.html"
}

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
