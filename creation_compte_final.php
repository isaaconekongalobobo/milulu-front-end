<?php 
session_start();
if (empty($_SESSION['info_user1']) and strlen($_SESSION['info_user1' ]) < 6) {
  header("location:creer-votre-compte-milulu");
  exit();
}
 ?>
<!doctype html>
<html lang="en">
  <?php include("en-tete.html"); ?>
  <body class="light ">
    <div class="wrapper vh-100">
      <div class="row align-items-center h-100">
        <form class="col-lg-6 col-md-8 col-10 mx-auto" method="post" action="traitement_compte_final" enctype="multipart/form-data">
          <div class="mx-auto text-center my-4">
            <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
              <!-- Logo au dessu du formulaire -->
              <g>
                <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
              </g>
              </svg>
            </a>
            <h2 class="my-3 texte">Finaliser la création de votre compte milulu</h2>
          </div>
          <div class="form-group">
            <label for="nom">Ajoutez une description (bio)</label>
            <textarea class="form-control" name="bio" id="bio" rows="4" autofocus></textarea>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="photo" name="photo" required>
                <label class="custom-file-label" for="customFile">Selectionner un fichier</label>
              </div>

            </div>
            <div class="form-group col-md-6">
              <input type="text" name="nom_user" id="nom_user" class="form-control" required maxlength="15" placeholder="Créer un nom d'utilisateur">
            </div>
          </div>
          <hr class="my-4">
          <div class="row mb-4">
            <div class="col-md-6">
              <p class="small text-muted mb-2">En vous inscrivant vous acceptez notre politique de confidentialité: </p>
              <div class="custom-control custom-radio">
                <input type="radio" id="oui" name="politique" value="oui" class="custom-control-input" required>
                <label class="custom-control-label" for="oui">Accepter</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="non" name="politique" value="non" class="custom-control-input" checked required>
                <label class="custom-control-label" for="non">Refuser</label>
              </div>
            </div>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit" name="enregistrer">Enregistrer</button>
          <p class="mt-5 mb-3 text-muted text-center"><a href="connexion" class="texte">Vous avez déja un compte ?</a></p>
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