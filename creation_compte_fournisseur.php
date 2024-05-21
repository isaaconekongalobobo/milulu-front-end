<!doctype html>
<html lang="en">
  <?php include("en-tete.html"); ?>
  <body class="light ">
    <div class="wrapper vh-100">
      <div class="row align-items-center h-100">
        <form class="col-lg-6 col-md-8 col-10 mx-auto" method="post" action="traitement_compte_fournisseur">
          <div class="mx-auto text-center my-4">
            <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
              <!-- Logo au dessu du formulaire -->
              <g>
                <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
              </g>
              </svg>
            </a>
            <h2 class="my-3 texte">Créez un compte fournisseur</h2>
          </div>
          <div class="form-group">
            <label for="nom">Nom d'utilisateur</label>
            <input type="text" name="nom" class="form-control" id="nom" required maxlength="25" autofocus>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="prix-min">Prix minimum ($)</label>
              <input type="number" name="prix_min" id="prix-min" class="form-control" required >
            </div>
            <div class="form-group col-md-6">
              <label for="prix-max">Prix maximum ($)</label>
              <input type="number" name="prix_max" id="prix_max" class="form-control" required >
            </div>
          </div>
          <hr class="my-4">
          <div class="row mb-4">
            <div class="col-md-6">
              <div class="form-group">
                <label for="addresse">Adresse physique</label>
                <input type="text" name="addresse" class="form-control" id="addresse" required >
              </div>
              <div class="form-group">
                <label for="numero">Votre numero mobile</label>
                <input type="text" name="numero" class="form-control" id="numero" maxlength="13" required minlength="13">
              </div>
              <div class="form-group">
                <label for="email">Adresse email</label>
                <input type="email" name="email" class="form-control" id="email" required >
              </div>
              <div class="form-group">
                <label for="num_whatsapp">Ajoutez un numero whatsapp</label>
                <input type="text" name="num_whatsapp" class="form-control" id="num_whatsapp" required minlength="13" maxlength="13">
              </div>

            </div>
            <div class="col-md-6">
                    <div class="card-body">
                      <p class="texte mb-2"><strong class="texte">Sélectionnez les services que vous fournissez</strong></p>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="decoration" name="services1" value="coiffure">
                        <label class="custom-control-label" for="decoration">Décoration</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="services2" class="custom-control-input" id="coiffure" value="coiffure">
                        <label class="custom-control-label" for="customCheck2">Coiffure</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="services3" class="custom-control-input" id="maquillage" value="Maquillage">
                        <label class="custom-control-label" for="maquillage">Maquillage</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="services4" class="custom-control-input" id="photo" value="Photographie">
                        <label class="custom-control-label" for="photo">Photographie</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="services5" class="custom-control-input" id="video" value="Videographie">
                        <label class="custom-control-label" for="video">Videographie</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="services6" class="custom-control-input" id="traiteur-1" value="service traiteur">
                        <label class="custom-control-label" for="traiteur">Service traiteur</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="services7" class="custom-control-input" id="location" value="location articles">
                        <label class="custom-control-label" for="location">Location articles</label>
                      </div>
                    </div>
            </div>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit" name="suivant-fournisseur">Suivant</button>
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