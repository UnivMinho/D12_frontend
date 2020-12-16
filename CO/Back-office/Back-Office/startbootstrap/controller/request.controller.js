//pedir dados
//iterar tabela :linha e celula 
//colocar dados que vem no sitio certo 

fetch('http://107.20.66.66:8080/requests')
    .then(response => response.json())
    .then(requests => {
        console.log(requests);
        var tableBody = document.getElementById('tableBody');
        requests.map(request => {
            console.log(request.anonymity)
            var row = tableBody.insertRow(tableBody.rows.length)
            var idCell = row.insertCell()
            idCell.innerHTML = request.request_id;
            var dateCell = row.insertCell()
            dateCell.innerHTML = request.date;
            var statusCell = row.insertCell()
            var statusCellContent = `<span class="btn btn-${request.status == "Validado" ? 'success':'warning'} btn-icon-split">${request.status}</span>`
            statusCell.innerHTML = statusCellContent;
            var urgencyCell = row.insertCell()
            urgencyCell.innerHTML = request.urgency;
            var typeCell = row.insertCell()
            typeCell.innerHTML = request['type'];
            console.log(request.type)
            var actionsCell = row.insertCell()
            var actionsCellContent = `<a class="btn btn-primary btn-icon-split " href="anonymous.html?id=${request.request_id}" style="color:#091A44">
                                        <span class="icon text-white">
                                            <i class="fas fa-eye"></i>
                                        </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon-split ">
                                            <span class="icon text-white">
                                                <i class="fas fa-folder-open" data-toggle="modal" data-target="#archiveRequestsModal"></i>
                                            </span>
                                        </a>`
            if(request.status != "Validado"){
                actionsCellContent += `<a class="btn btn-primary btn-icon-split ">
                                        <span class="icon text-white">
                                            <i class="fas fa-check" data-toggle="modal" data-target="#successModal"></i>
                                        </span>
                                       </a>`
            }
            actionsCell.innerHTML = actionsCellContent;
        })       
    })
/*
function saveRequest(){
    //criar dicionario
    var data = {};
    data.anonimity = anonimityValue;
    if (document.getElementById('anonimo').checked) {
    anonimityValue = document.getElementById('anonimo').value;
} else {
    anonimityValue = document.getElementById('naoAnonimo').value;
}
    data.email = document.getElementById("email").value;
    data.pass = document.getElementById("pwd").value; 
    //submeter dados no servidor
    fetch('http://107.20.66.66:8080/requests', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function (response){
            if (!response.ok) {
                console.log(response.status); 
                console.log(response.statusText); 
                console.log(response.headers); 
                console.log(response.url); 
                if (response.status === 409) {
                alert("Duplicated Email");
            } else {
                throw Error(response.statusText);
            }
            
        }
}
*/