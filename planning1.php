<?php 
session_start();
if (empty($_SESSION['autoriser']) and !isset($_SESSION['autoriser'])) {
  header("location:connexion");
  exit();
}elseif (count($_SESSION['autoriser']) != 3) {
  header("location:connexion");
  exit();
}else {
  $user = $_SESSION['autoriser'];
  $id_compte = $user[1];
  $type_compte = $user[2];
} 

?>

<!doctype html>
<html lang="en">
  <?php include("en-tete.html"); ?>
  <body class="light" onload="blockbtn()">
    <div class="wrapper vh-100">
      <div class="row align-items-center h-100">
        <form class="col-lg-6 col-md-8 col-10 mx-auto" method="post" action="form_planning1.php">
          <div class="mx-auto text-center my-4">
            <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
              <!-- Logo au dessu du formulaire -->
              <g>
                <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
              </g>
              </svg>
            </a>
            <h2 class="my-3 texte">Les informations basiques sur votre projet</h2>
          </div>
          <div class="form-group">
            <label for="pjname" id="desc">Nom du projet</label>
            <input type="text" name="projectname"  onfocus="exnom()" class="form-control" id="pjname" required maxlength="25" >
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="type_ev">Choisissez le type d'évenement</label>
              <select class="form-control" id="type_ev" name="type_event" onfocus="extype()" required>
                <option value="">Selectionnez le type d'évenement</option>
                <option value="mariage">Mariage</option>
                <option value="anniversaire">Anniversaire</option>
                <option value="baby-shower">Baby shower</option>
                <option  value="fete de fin d'année">Fete de fin d'année</option>
                <option  value="escursion">Escursion</option>
                <option  value="auther">Autres...</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="nbinvite">Nombre d'invité</label>
              <input type="number" name="nombre_dinvite" id="nbinvite" onfocus="exinvite()" class="form-control" required>
            </div>
            <div class="form-group col-md-6">
              <input type="hidden" name="id_user" id="id_user" value="<?= $id_compte; ?>"  class="form-control" required>
            </div>
          </div>
          <div class="form-group">
            <label for="nom">Déscription du projet</label>
            <textarea class="form-control" id="project_description" onfocus="exdescription()" name="project_bio" rows="2" maxlength="800" required></textarea>
          </div>
          <hr class="my-4">
          <div class="row mb-4">
          <div class="col-md-6">
            <div class="form-group">
              <label for="prenom">Lieu de l'évenement</label>
              <select class="form-control" id="lieu" name="lieu_event">
              <option value="">Selectionnez une ville</option>
              <option value="bukavu">Bukavu</option>
              <option value="goma">Goma</option>
              <option value="kinshasa">Kinshasa</option>
              <option value="kikwit">Kikwit</option>
              <option value="kolwezi">Kolwezi</option>
              <option value="kisangani">Kisangani</option>
              <option value="lubumbashi">Lubumbashi</option>
              <option value="matadi">Matadi</option>
              <option value="mbadaka">Mbadaka</option>
              <option value=""></option>
              </select>
            </div>
              <div class="form-group">
                <label for="date_event">date de l'évenement</label>
                <input type="date" name="date_event" class="form-control" id="date_event" required >
              </div>
              <div class="form-group">
                <label for="budjet">Budjet (en $)</label>
                <input type="number" name="budjet" onfocus="exbudjet()" class="form-control" id="budjet" required minlength="8">
              </div>
            </div>
            <div class="col-md-6">
              <p class="small text-muted mb-2" id="exe">En remplissant ce formulaire vous autorisez milulu à collecter et traiter ces données afin de les analyser.<br> C'est sur la base de celle-ci et d'autre données par la suite que milulu vous donnera des informations précieuses sur vos chances de reussites et ce qui vous restera à faire pour reussir votre projet  </p>
            </div>
          </div>
          <button class="espace btn btn-lg btn-primary btn-block" type="submit" name="planning1" id="btnpj">Créer le projet</button>
          <button class="btn btn-lg btn-primary btn-block" type="button" onclick="redirection()" name="redirection1" id="dtrection1">Passer</button><br><br>
        </form>
      </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/moment.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/simplebar.min.js"></script>
    <script src='js/daterangepicker.js'></script>
    <script src='js/jquery.stickOnScroll.js'></script>
    <script src="js/tinycolor-min.js"></script>
    <script src="js/config.js"></script>
    <script src="js/apps.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-56159088-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];

      function gtag()
      {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-56159088-1');
    </script>
  </body>
</html>
</body>
</html>