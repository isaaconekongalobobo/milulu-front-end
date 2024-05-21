
function rdr(){
    alert("Voulez vous passer?")
}
function exnom(){
    let nom_projet = document.getElementById("exe")
    nom_projet.innerHTML= "<h4>Comment bien nommer votre projet ?</h4> <br>Vous pouvez nommer votre projet de la manière que vous voulez, mais de préference avec un nom qui saura vous le faire distinguer des vos autres projet<br><br> Ex: Mon mariage-coutumier"
    let btn = document.getElementById("btnpj")
    nom_projet.disabled=""
    
}

function extype(){
    let type_projet = document.getElementById("exe")
    type_projet.innerHTML="<h4>De quel type doit etre mon projet ?</h4>Vous devez choisir le type d'évenement avec par categorie.<br>Ce grace à cela que milulu saura vous orienter vers les élements qui cadrent avec le type que vous avez choisie.<br>Et par la suite, vous ajouterez plus des précisions à votre projet.<br>Ex: Mariage"
    
}

function exinvite(){
    let nb_invite = document.getElementById("exe")
    nb_invite.innerHTML="<h4>Que dois-je savoir sur le nombre de participants ?</h4>Milulu ne limite pas le nombre des gens que vous pouvez inviter.<br>Mais sachez que le nombre d'invité ou des participant influencera les calculs et ainsi la facture final.<br>Mais en moyenne, le nombre des participants est géneralement à 200"
    
}

function exdescription(){
    let description = document.getElementById("exe")
    description.innerHTML="<h4>Comment faire la description de mon projet ?</h4>Donnez quelques informations sur vous et les motivations qui vous on pousseé à organiser cette évenement.<br>C'est cette description qui expliquera à ceux que vous inviterez tout ce qu'ils doivent savoir.<br>Mais en raison du nombre limité des caractères, tachez d'etre bref et précis dans vos descriptions"
    
}


