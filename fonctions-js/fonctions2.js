function redirection(){
    let reponse = confirm("voulez vous vraiment passer cette étape ?")
    if(reponse == true) {
        window.location.replace("gestion-devos-projets")
    }
    else {

    }
}

function exbudjet(){
    let type_projet = document.getElementById("exe")
    type_projet.innerHTML="<h4>Quel budjet prévoir pour mon projet ?</h4>Vous pouvez mettre le budjet réel que vous avez prévus pour votre projet<br>Milulu fait les calcul en fonction des données et sondages, et vous donnera le montant aproximatif que vous devez prévoir pour réussir le projet<br>Ce montant permet juste à l'application de savoir vous orienter dans la recherche des services à vos moyens."
    
}
