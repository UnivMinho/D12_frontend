const variavel = document.getElementById("buttonRegistar");
variavel.onclick = enviardados;

const variaveldois = document.getElementById("buttonbackRegisto");
variaveldois.onclick = goBack;

const variaveltres = document.getElementById("buttonLoginRegisto");
variaveltres.onclick = buttonLoginRegisto;

const variavelquatro = document.getElementById("buttonInicioRegisto");
variavelquatro.onclick = buttonInicioRegisto;

const variavelcinco = document.getElementById("buttonClose");
variavelcinco.onclick = buttonClose;

function enviardados() {

    //preenchimento do campo Nome obrigatório
    if (document.getElementById("inputNome").value == "") {
        alert("Preencha o campo Nome!");
        document.getElementById("inputPassword").focus();
    }
    else {

        // //preenchimento do campo Data de Nascimento obrigatório
        // if (document.getElementById("inputDataNascimento").value == "") {
        //     alert("Preencha o campo Data de Nascimento!");
        //     document.getElementById("inputDataNascimento").focus();
        // }
        // else {


            //preenchimento do campo cédula profissional obrigatório
            if (document.getElementById("inputCedulaProfissional").value == "") {
                alert("Preencha o campo Cédula Profissional!");
                document.getElementById("inputCedulaProfissional").focus();
            }
            else {

                //ao preencher o email ter obrigatoriamente "@" e "." (preenchimento obrigatório)
                if (document.getElementById("inputEmail").value == "" ||
                    document.getElementById("inputEmail").value.indexOf('@') == -1 ||
                    document.getElementById("inputEmail").value.indexOf('.') == -1) {
                    alert("Preencha campo email corretamente!");
                    document.getElementById("inputEmail").focus();
                }
                else {

                    //preenchimento da Password, não pode estar vazia (campo obrigatório)
                    if (document.getElementById("inputPassword").value == "") {
                        alert("Preencha o campo Password!");
                        document.getElementById("inputPassword").focus();
                    }
                    else {

                        //caso as passwords não coincidirem (preenchimento de ambas obrigatórias)
                        if (document.getElementById("inputPassword").value != document.getElementById("inputConfirmarPassword").value) {
                            alert("As passwords não coincidem!");
                            document.getElementById("inputPassword").focus();
                        }
                        else {

                            //preenchimento do campo Telemovel obrigatório
                            if (document.getElementById("inputTelemovel").value == "") {
                                alert("Preencha o campo Telemovel!");
                                document.getElementById("inputTelemovel").focus();
                            }
                            else {
                                document.getElementById("bgmodalRegisto").className = "bgmodal"; //Apaarecer o aviso
                            }
                        }
                    }
                }
            }
        }
    // }
}

function goBack() { //voltar para a página anterior
    window.history.back()
}

function buttonLoginRegisto() {
    window.location.href = "Login.html" //ao carregar no botão vai para a página "Login.html"
}

function buttonInicioRegisto() {
    window.location.href = "Inicio.html" //ao carregar no botão vai para a página "Inicio.html"
}

function buttonClose() {
    document.getElementById("bgmodalRegisto").className = "hidden" //carregar no X e fechar o aviso
}


let pswd = false;

function showPswd() {
    if (pswd) {
        document.getElementById("inputPasswordRegisto").setAttribute("type", "password");
        pswd = false;
    }
    else {
        document.getElementById("inputPasswordRegisto").setAttribute("type", "text");
        pswd = true;
    }
}


let password = false;

function showPassword() {
    if (pswd) {
        document.getElementById("inputConfirmarPasswordRegisto").setAttribute("type", "password");
        pswd = false;
    }
    else {
        document.getElementById("inputConfirmarPasswordRegisto").setAttribute("type", "text");
        pswd = true;
    }
}