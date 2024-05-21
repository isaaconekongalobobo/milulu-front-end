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
  <body class="light ">
    <div class="wrapper vh-100">
      <div class="align-items-center h-100 d-flex w-50 mx-auto">
        <div class="mx-auto text-center">
          <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
            <g>
              <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
            </g>
          </a>
          <h1 class="mb-1 text-muted font-weight-bold">Commencez la création de votre projet d'évenement</h1>
          <h6 class="mb-3 text-muted">Cette partie vous permet de structurer et plannifier un futur évenement, inviter des proches, recevoir des suggestion, bref...tout plannifier!</h6>
          <a href="creerun-projet" class="btn btn-lg btn-primary px-5">commencer</a>
        </div>
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