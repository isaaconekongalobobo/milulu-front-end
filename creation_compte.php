<!doctype html>
<html lang="en">
  <?php include("en-tete.html"); ?>
  <body class="light ">
    <div class="wrapper vh-100">
      <div class="row align-items-center h-100">
        <form class="col-lg-6 col-md-8 col-10 mx-auto" method="post" action="traitement_compte1">
          <div class="mx-auto text-center my-4">
            <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
              <!-- Logo au dessu du formulaire -->
              <g>
                <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
              </g>
              </svg>
            </a>
            <h2 class="my-3 texte">Créez un compte utilisateur</h2>
          </div>
          <div class="form-group">
            <label for="nom">Nom</label>
            <input type="text" name="nom" class="form-control" id="nom" required maxlength="15" autofocus>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="prenom">Prenom</label>
              <input type="text" name="prenom" id="prenom" class="form-control" required maxlength="15">
            </div>
            <div class="form-group col-md-6">
              <label for="age">Age</label>
              <input type="number" name="age" id="age" class="form-control" required max="100">
            </div>
          </div>
          <hr class="my-4">
          <div class="row mb-4">
            <div class="col-md-6">
              <div class="form-group">
                <label for="numero">Votre numero mobile</label>
                <input type="text" name="numero" class="form-control" id="numero" maxlength="13" required>
              </div>
              <div class="form-group">
                <label for="email">Adresse email</label>
                <input type="email" name="email" class="form-control" id="email" required >
              </div>
              <div class="form-group">
                <label for="password1">Mot de passe</label>
                <input type="password" name="mdp1" class="form-control" id="password1" required minlength="8">
              </div>
              <div class="form-group">
                <label for="password2">Confirmer le mot de passe</label>
                <input type="password" name="mdp2" class="form-control" id="password2" required minlength="8">
              </div>
            </div>
            <div class="col-md-6">
              <p class="mb-2">Password requirements</p>
              <p class="small text-muted mb-2">Voici quelques suggestions pour créer un mot de passe sur: </p>
              <ul class="small text-muted pl-4 mb-0">
                <li>Au Minimum 8 caractères </li>
                <li>Au moins un caractère spécial</li>
                <li>Au moins un chiffre</li>
                <li>Ne jamais utiliser un meme mot de passe pour plusieurs comptes</li>
              </ul>
            </div>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit" name="suivant">Suivant</button>
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