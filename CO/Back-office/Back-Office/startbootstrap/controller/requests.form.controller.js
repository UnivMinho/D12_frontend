var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'))

fetch(`http://18.234.79.11:8080/requests/${urlParams.get('id')}`)
    .then(response => response.json())
    .then(requests => {
       console.log(requests[0])
       var anonymity = document.getElementById('anonymity')
       var date = document.getElementById('date')
       var complainer = document.getElementById('complainer')
       var local = document.getElementById('local')
       var description = document.getElementById('description')
       requests.map(request => {
       if(request.anonymity == "Anonimo"){
            var anonymityContent= '<input type="radio" id="anonimo" name="anonimato" value="anonimo" checked>' + 
                                            '<label for="anonimo">Anonimo</label><br>'+
                                            '<input type="radio" id="naoAnonimo" name="anonimato" value="naoAnonimo" disabled>'+
                                            '<label for="naoAnonimo">Não Anonimo</label><br>'
       
           anonymity.innerHTML = anonymityContent;
       } else {
           var formContent= '<input type="radio" id="anonimo" name="anonimato" value="anonimo" disabled>' + 
                                            '<label for="anonimo">Anonimo</label><br>'+
                                            '<input type="radio" id="naoAnonimo" name="anonimato" value="naoAnonimo" checked>'+
                                            '<label for="naoAnonimo">Não Anonimo</label><br>'
       
       }
       var dateContent = `<input type="text" id="dateOcurrence" class="form-control" name="dateOcurrence" value=${request.date} readonly>
                                                <label></label>`
       date.innerHTML = dateContent;
       })
    })