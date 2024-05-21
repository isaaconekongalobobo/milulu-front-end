<?php 
session_start();
if (isset($_POST['planning1'])) {
	extract($_POST);
	if (empty($projectname)) {
		header("location:creerun-projet");
		exit();
	}elseif (empty($type_event)) {
		echo "Type vide";
		header("location:creerun-projet");
		exit();
	}elseif (empty($nombre_dinvite)) {
		echo "nombre d'invité vide";
		header("location:creerun-projet");
		exit();
	}elseif (empty($project_bio)) {
		header("location:creerun-projet");
		exit();
	}elseif (empty($lieu_event)) {
		header("location:creerun-projet");
		exit();
	}elseif (empty($date_event)) {
		header("location:creerun-projet");
		exit();
	}elseif (empty($budjet)) {
		header("location:creerun-projet");
		exit();
	}elseif (empty($id_user)) {
		header("location:creerun-projet");
		exit();
	}else {
		include("modules/module_filtre.php");
		include("serveur.php");
		// Je filtre les entrées de l'utilisateur
		$projectname = filtre_chaine_simple($projectname);
		$project_type = filtre_chaine_simple($type_event);
		$nombre_dinvite = filtre_chaine_simple($nombre_dinvite);
		$project_description = addslashes(filtre_chaine_simple($project_bio));
		$lieu_event = filtre_chaine_simple($lieu_event);
		$date_event = filtre_chaine_simple($date_event);
		$budjet = filtre_chaine_simple($budjet);
        $donnee = [$id_user,$projectname,$project_type,$project_description,$nombre_dinvite,$lieu_event,$date_event,$budjet];
		$requette="INSERT INTO projets(id_user,nom_pj,type_pj,description,nb_invite,ville,date_event,budjet) VALUES(?,?,?,?,?,?,?,?)";
      	$req=$pdo->prepare($requette);
      	$req->execute($donnee);
      	if ($req==true) {
        	header("location:gestion-devos-projets");
            exit();		 
		}
		
	}
}

 ?>