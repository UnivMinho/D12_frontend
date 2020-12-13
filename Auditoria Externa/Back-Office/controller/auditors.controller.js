//quando inicia a página faz
const fetch = require('node-fetch')
window.onload = function() {
    //chama a função para atualizar os users
    refreshAuditors(); //adicionar função de validação ao formulário
    validator();
    document.getElementById("formNewAuditor").onsubmit = function(e) {
        //validação do formulário ao submeter
        validator();
    };
}

//função de validação
    function validator() {
         let validator = new validator(document.querySelector('form[name="formNewAuditor"]'), function (err, res) {
            if (res) {
                saveAuditors();
            }
        }, {
                rules: {
                    password: function(value) {
                        return (value === document.getElementById("myPassword").value);
                    }
                },
                messages: {
                    en: {
                        password: {
                            incorrect: "Password didn't match"
                        }
                    }
                }
            });
    }

function saveUsers() {
    var data = {};
    data.user_id = 17;
    data.password = document.getElementById("myPassword").value;
    data.type = 4;
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch('54.226.165.238:8080/users', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            if (response.status === 409) {
                alert("Duplicated Email");
            }
            else {
                throw Error(response.statusText);
            }
        }
        else {
            document.getElementById("formregistar").reset(); //limpeza dos dados do form
            alert("submitted with success");
            refreshAuditors();
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}

function saveAuditors() {
    var data = {};
    data.cc_auditor = document.getElementById("myNome").value;
    data.name = document.getElementById("myNome").value;
    data.birth_date = document.getElementById("date").value;
    data.phone_number = document.getElementById("").value;
    data.address = document.getElementById("").value;
    
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    fetch('54.226.165.238:8080/auditors/10', {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            if (response.status === 409) {
                alert("Duplicated Email");
            }
            else {
                throw Error(response.statusText);
            }
        }
        else {
            document.getElementById("formNewAuditor").reset(); //limpeza dos dados do form
            alert("submitted with success");
            refreshAuditors();
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}

function refreshAuditors() {
    async function fetchAsync() {
        const renderUsers = document.getElementById("result");
        let txt = "";
        const response = await fetch('https://umpw-cfportela.c9users.io/users');
        const users = await response.json();
        //criação de uma tabela para demonstração dos resultados recebidos
        txt += "<table class='table' style='padding:10px; width:70%; margin:0% 15% 0% 15%'>";
        txt += "<thead style='background-color:#607d8b; color:white '>";
        txt += "<tr><th>Name</th><th>Email</th><th>Reg. Date</th></tr></thead><tbody>";
        //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
        for (const user of users) {
            txt += "<tr><td style='text-align:right'>" + user.name + "</td><td>" + user.email + "</td><td>" +
                user.dateReg + "</td></tr>";
        }
        txt += "</tbody></table>";
        //envia a tabela construida para a view e mostra no object com ID result
        renderUsers.innerHTML = txt;
    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
};
