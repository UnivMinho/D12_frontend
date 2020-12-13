const variavel=document.getElementById("loginInicio");
variavel.onclick=dadoslogin;

const variaveldois=document.getElementById("registoInicio");
variaveldois.onclick=dadosregisto;

function dadoslogin(){
window.location.href="Login.html" //ao carregar no botão vai para a página "Login.html"
}

function dadosregisto(){
window.location.href="Registo.html" //ao carregar no botão vai para a página "Registo.html"
}
