var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'))

fetch(`http://18.212.200.1:8080/requests/${urlParams.get('id')}`)
    .then(response => response.json())
    .then(requests => {
        console.log(requests[0])
        var anonymity = document.getElementById('anonymity')
        var date = document.getElementById('date')
        var complainer = document.getElementById('complainer')
        var local = document.getElementById('local')
        var description = document.getElementById('description')
        requests.map(request => {
            console.log(request.place)
            if (request.anonymity == "Anonimo") {
                var anonymityContent = '<div class="form-group col-md-6">'+
                                        '<input type="radio" id="anonimo" name="anonimato" value="anonimo" checked>' +
                                        '<label for="anonimo">Anonimo</label><br>' +
                                        '<input type="radio" id="naoAnonimo" name="anonimato" value="naoAnonimo" disabled>' +
                                        '<label for="naoAnonimo">Não Anonimo</label><br>'+
                                        '</div>'

                anonymity.innerHTML = anonymityContent;
                var dateContent = `<input type="text" id="dateOcurrence" class="form-control" name="dateOcurrence" value=${request.date} readonly>
                                                <label></label>`
                date.innerHTML = dateContent;

                var localContent = `<div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="inputOptionLocal">Local</label>
                                    <input type="text" class="form-control" id="inputOptionLocal" value=${request.place} readonly>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEntity">Entidade</label>
                                        <input type="text" class="form-control" id="inputEntity" value=${request.entity} readonly>
                                    </div>
                                    </div>
                                    <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputLocality">Localidade</label>
                                        <input type="text" class="form-control" id="inputLocality" value=${request.locality} readonly>
                                    </div>
                                                
                                    <div class="form-group col-md-6">
                                        <label for="inputAdress">Morada</label>
                                        <input type="text" class="form-control" id="inputAdress" value=${request.address} readonly>
                                    </div>
                                    </div>`
                local.innerHTML = localContent;

                if (request.type == "Roubo") {
                    var descriptionContent = ` <div class="form-group col-md-6">
                                                    <label for="type">Tipo<p>
                                                    <div id="type" >
                                                     <input type="radio" id="roubo" name="type" value="roubo" checked>
                                                     <label for="male">Roubo</label><br>
                                                    <input type="radio" id="furto" name="type" value="furto" disabled>
                                                    <label for="female">Furto</label><br>
                                                </div>
                                            </div>`

                } else{
                     var descriptionContent = ` <div class="form-group col-md-6">
                                                    <label for="type">Tipo<p>
                                                    <div id="type" >
                                                     <input type="radio" id="roubo" name="type" value="roubo" disabled>
                                                     <label for="male">Roubo</label><br>
                                                    <input type="radio" id="furto" name="type" value="furto" checked>
                                                    <label for="female">Furto</label><br>
                                                </div>
                                            </div>`

                }
                
                descriptionContent += `<label for="TextareaDescription">Breve decrição da queixa (informações sobre o incidente que considere importante referir) 
                                                </label>
                                            <textarea class="form-control" id="TextareaDescription" rows="10" readonly>${request.description}</textarea>
                                            </div>`
                                            
                description.innerHTML = descriptionContent;
            }
            else {
                var anonymityContent =  '<div class="form-group col-md-6">'+
                                        '<input type="radio" id="anonimo" name="anonimato" value="anonimo" disabled>' +
                                        '<label for="anonimo">Anonimo</label><br>' +
                                        '<input type="radio" id="naoAnonimo" name="anonimato" value="naoAnonimo" checked>' +
                                        '<label for="naoAnonimo">Não Anonimo</label><br>'+
                                        '</div>'
                anonymity.innerHTML = anonymityContent;
                
                var dateContent = `<input type="text" id="dateOcurrence" class="form-control" name="dateOcurrence" value=${request.date} readonly>
                                    <label></label>`
                date.innerHTML = dateContent;


                var complainerContent = `<labelfor = "inputCC">Nº CC</label> <input type = "text" class="form-control" id="inputCC" value=${request.fk_Requests_complainer_cc} readonly></div>`
                complainer.innerHTML = complainerContent;
                
                var localContent = `<div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="inputOptionLocal">Local</label>
                                    <input type="text" class="form-control" id="inputOptionLocal" value=${request.place} readonly>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEntity">Entidade</label>
                                        <input type="text" class="form-control" id="inputEntity" value=${request.entity} readonly>
                                    </div>
                                    </div>
                                    <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputLocality">Localidade</label>
                                        <input type="text" class="form-control" id="inputLocality" value=${request.locality} readonly>
                                    </div>
                                                
                                    <div class="form-group col-md-6">
                                        <label for="inputAdress">Morada</label>
                                        <input type="text" class="form-control" id="inputAdress" value=${request.address} readonly>
                                    </div>
                                    </div>`
                local.innerHTML = localContent;
                
                if (request.type == "Roubo") {
                    var descriptionContent = ` <div class="form-group col-md-6">
                                                    <label for="type">Tipo<p>
                                                    <div id="type" >
                                                     <input type="radio" id="roubo" name="type" value="roubo" checked>
                                                     <label for="male">Roubo</label><br>
                                                    <input type="radio" id="furto" name="type" value="furto" disabled>
                                                    <label for="female">Furto</label><br>
                                                </div>
                                            </div>`

                } else{
                     var descriptionContent = ` <div class="form-group col-md-6">
                                                    <label for="type">Tipo<p>
                                                    <div id="type" >
                                                     <input type="radio" id="roubo" name="type" value="roubo" disabled>
                                                     <label for="male">Roubo</label><br>
                                                    <input type="radio" id="furto" name="type" value="furto" checked>
                                                    <label for="female">Furto</label><br>
                                                </div>
                                            </div>`

                }
                
                descriptionContent += `<label for="TextareaDescription">Breve decrição da queixa (informações sobre o incidente que considere importante referir) 
                                                </label>
                                            <textarea class="form-control" id="TextareaDescription" rows="10" readonly>${request.description}</textarea>
                                            </div>`
                                            
                description.innerHTML = descriptionContent;
            }

        })
    })
/*
<div class="form-group ">
                                                    <label for="inputName">Nome</label>
                                                    <input type="text" class="form-control" id="inputName" value=${request.name} readonly>
                                                </div>                                                    
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputContact">Contacto</label>
                                                        <input type="text" class="form-control" id="inputContact" value=${request.contact} readonly>
                                                    </div>
                                                <div class="form-group col-md-4">
                                                        <label for="inputState">Data de Nascimento</label>
                                                        <input type="text" class="form-control" id="dateOcurrence" name="dateOcurrence" value=${request.???} readonly>
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                        <label for="inputZip">Código Postal</label>
                                                        <input type="text" class="form-control" id="inputZip" value=${request.???} readonly>
                                                    </div>
                                                </div>
                                                
                                                if (request.??? == "Masculino") {
                var genderContent = '<label for="genero">Género<p>' +
                                        '<input type="radio" id="male" name="gender" value="male" checked>' +
                                            '<label for="male">Masculino</label><br>' +
                                            '<input type="radio" id="female" name="gender" value="female" disabled>' +
                                            '<label for="female">Feminino</label><br>' +
                                        '</div>'+
                                        '</div>'
                complainer.innerHTML += genderContent;
                else {
                    var genderContent = '<label for="genero">Género<p>' +
                                        '<input type="radio" id="male" name="gender" value="male" disabled>' +
                                            '<label for="male">Masculino</label><br>' +
                                            '<input type="radio" id="female" name="gender" value="female" checked>' +
                                            '<label for="female">Feminino</label><br>' +
                                        '</div>'+
                                        '</div>'
                    complainer.innerHTML += genderContent;
                }                    
        
                
                
            }*/
