<?php 
session_start();
if (isset($_POST['terminer'])) {
	extract($_POST);
	include("serveur.php");
	include("modules/module_filtre.php");
	include("modules/module_upload.php");
	if (!$politique === "oui" ) {
		header("location:message6");
		exit();
	}elseif (empty($bio)) {
		header("location:creer-votre-compte-milulu");
		exit();
	}else {
		$bio = filtre_chaine_simple($bio);
		$nom_temporaire=$_FILES['photo']['tmp_name'];
		$nom_image=$_FILES['photo']['name'];
		$extension_permis=array("jpg","png","jpeg","gif");
		if (is_array($extension_permis)) {
			$tableau_extension_image=explode('.',$nom_image);
			$extension_image=strtolower(end($tableau_extension_image));
			if (in_array($extension_image,$extension_permis)){
				$nom_unique=uniqid('',true);
				$fichier_final=$nom_unique.".".$extension_image;
				$us = $_SESSION['info_fournisseur1'];
				$nom = $us[0];
				$prix_min = $us[1];
				$prix_max = $us[2];
				$addresse = $us[3];
				$numero = $us[4];
				$email = $us[5];
				$num_whatsapp = $us[6];
				$services = $us[7];
				$donnee = array($nom,$services,$prix_min,$prix_max,$addresse,$bio,$fichier_final,$numero,$email,$num_whatsapp,md5($mdp));
				$requette="INSERT INTO fournisseur(nom_dutilisateur,services,prix_min,prix_max,adresse,bio,photo_profil,numero,email,num_whatsapp,motdepasse) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
      			$req=$pdo->prepare($requette);
      			$req->execute($donnee);
      			if ($req==true) {
        			// Si la requette a été éxecuté
        			move_uploaded_file($nom_temporaire,"profil_fournisseur/".$fichier_final);
        			$_SESSION['autoriser']=true;
        			if ($_SESSION['autoriser']) {
            			header("location:connexion.php");
            			exit();
        			}		 
				}
		}	}
	}
}
 ?>