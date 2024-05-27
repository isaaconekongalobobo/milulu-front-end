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
  // Je verifie le type de compte de l'utilisateur authentifié
  if ($type_compte == "fournisseur") {
    $requette = "SELECT * FROM fournisseur WHERE id_fournisseur = ? LIMIT 1";
    include("serveur.php");
    $req2=$pdo->prepare($requette);
    $req2->setFetchMode(PDO::FETCH_BOTH);
    $req2->execute(array($id_compte));
    $tab=$req2->fetchall();
    $i=0;
    while ($i<count($tab)) {
      $id_user=$tab[$i][0];
      $nom=$tab[$i][1];
      $services=$tab[$i][2];
      $prix_min=$tab[$i][3];
      $prix_max=$tab[$i][4];
      $addresse=$tab[$i][5];
      $catalogue=$tab[$i][6];
      $bio=$tab[$i][7];
      $photo_profil=$tab[$i][8];
      $numero=$tab[$i][9];
      $email=$tab[$i][10];
      $num_whatsapp=$tab[$i][11];
      $info = array($nom,$photo_profil,"Compte fournisseur");
      $i++;
      $type_compte = "fournisseur";
      $dossier_img = "./profil_fournisseur/";
    }
  }elseif ($type_compte == "user") {
    $requette = "SELECT * FROM user WHERE id_user = ? LIMIT 1";
    include("serveur.php");
    $req2=$pdo->prepare($requette);
    $req2->setFetchMode(PDO::FETCH_BOTH);
    $req2->execute(array($id_compte));
    $tab=$req2->fetchall();
    $i=0;
    while ($i<count($tab)) {
      $id_user=$tab[$i][0];
      $nom_dutilisateur=$tab[$i][1];
      $nom=$tab[$i][2];
      $prenom=$tab[$i][3];
      $age=$tab[$i][4];
      $numero=$tab[$i][5];
      $email=$tab[$i][6];
      $bio=$tab[$i][9];
      $photo_profil=$tab[$i][10];
      $info = array($nom_dutilisateur,$photo_profil,"Compte d'utilisateur");
      $i++;
      $type_compte = "user";
      $dossier_img = "./profil_user/";
    }
  }

} 

 ?>

<!doctype html>
<html lang="en">
  <?php include("en-tete.html"); ?>
  <body class="vertical  light  ">
    <div class="wrapper">
    <!-- Je crée une div dans lequel je vais generer l’en tete de la page grace au javascripts -->
    <div id="block-navigation"></div>      
    <!-- Je crée une div dans lequel je vais generer le sidebar de la page grace au javascripts -->
    <div id="block-sidebar"></div>
      <!--------------------------------------------------------------------------------------->
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <div class="col">
                  <h2 class="texte" >Hey! Quoi d'neuf ?...</h2>
                </div>
                <div class="col-auto">
                  <p>Info user</p>
                </div>
              </div>
              <div class="mb-2 align-items-center" style="color:#702d53;">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div class="row mt-1 align-items-center">
                      <div class="col-12 col-lg-4 text-left pl-4">
                        <p class="mb-1 small text-muted"> Type de compte</p>
                        <span class="h3">Une soirée de gala...</span>
                        <p class="text-muted mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Voluptas, accusantium tenetur! Iste suscipit laudantium quas maxime cumque facere dignissimos nulla. Fugiat cupiditate nemo, distinctio tenetur in eveniet totam?</p>
                      </div>
                    </div>
                    <center>
                      <div class="chartbox mr-4">
                        <img src="affiche milulu.jpg" class="pub" width="500" height="450">
                      </div>
                    </center>
                    
                  </div> <!-- .card-body -->
                </div> <!-- .card -->
              </div>
            </div> <!-- .col-12 -->
          </div> <!-- .row -->
        </div> <!-- .container-fluid -->
      </main> <!-- main -->
    </div> <!-- .wrapper -->
    <!-- Je crée une div dans lequel je vais generer les scripts -->
    <div id="block-scripts"></div>
  </body>
</html>