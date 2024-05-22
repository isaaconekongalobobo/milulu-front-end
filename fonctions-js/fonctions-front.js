// Je commence par recuperer les differents div que j`aurrai a utiliser tout au long du code

// Bloc mere ou bloc principale qui contiendra toute les composant dynamique
const blocMere = document.getElementById ("bloc-mere")
// Je recupere la div pour l`en tete de chaque page
const blocEnTete = document.getElementById ("block-entete")











// -------------------------------------------------------------------------
// Je donne un nouveau contenu a cette div
blocEnTete.innerHTML = `
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="Milulu est une plateforme en ligne conçue pour la gestion des vos évenements ou pour mettre en services vos compétences dans ce dommaine. ">
<meta name="author" content="">
<link rel="icon" href="favicon.ico">
<title>Milulu RD congo</title>
<!-- Simple bar CSS -->
<link rel="stylesheet" href="css/simplebar.css">
<!-- Fonts CSS -->
<link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<!-- Icons CSS -->
<link rel="stylesheet" href="css/feather.css">
<link rel="stylesheet" href="css/select2.css">
<link rel="stylesheet" href="css/dropzone.css">
<link rel="stylesheet" href="css/uppy.min.css">
<link rel="stylesheet" href="css/jquery.steps.css">
<link rel="stylesheet" href="css/jquery.timepicker.css">
<link rel="stylesheet" href="css/quill.snow.css">
<!-- Date Range Picker CSS -->
<link rel="stylesheet" href="css/daterangepicker.css">
<!-- Style principale-->
<link rel="stylesheet" href="css/app-light.css" id="lightTheme" id="feuille-destyle-principale">
<link rel="stylesheet" href="Mes-styles/style-suplementaire.css" id="feuille-destyle-secondaire">
<!-- <link rel="stylesheet" href="css/app-dark.css" id="darkTheme" disabled> -->
</head>`;
// ---------------------------------------------------------------------------------------------
// Les fonctions que je vais utiliser
// Je commence par créer une fonction qui verifiera si le champ cible n`est pas vide
function champVide (cible) {
    let champCible = document.getElementById (cible);
    // Je verifie si la valeur du champ cible est vide, si oui alors:
    if (champCible.value === undefined || champCible.value === "") {
        // Je change la couleur de la bordure en rouge
        champCible.style.border = "2px solid red";
        // Je donne au texte de ce champ la couleur rouge
        champCible.style.color = "red";
        // Je change le texte a l`interieur de ce champ
        champCible.placeholder = "Ce champs est obligatoire";
        // Et enfin je retourne la valeur false
        return false
    }  else {
        // Si la valeur du champ cible n`est pas vide alors je retourne true
        return true;
    }    
}
// ---------------------------------------------------------------------------------------------
// Je me mets a l`écoute des évenement submit pour controler les formulaires de mon site
document.addEventListener ("submit", function (event) {
    event.preventDefault ();
    // Je recupere la cible de l`évenement
    let element = event.target;
    // Je recupere l`id de la cible
    let idElement = element.id;
    // Je verifie si il s`agit du formulaire de connexion
    if (idElement === "form-connexion") {
        // Je recupere les champ soumis
        let numero = document.getElementById ("numero");
        let motDePasse = document.getElementById ("mdp");
        let typeCompte = document.getElementById ()

    }
    
})