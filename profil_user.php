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
  $type_compte = $user[2];
  $id_compte = $_GET['id_compte'];
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
      $nom_dutilisateur=$tab[$i][1];
      $services= explode('-',$tab[$i][2]);
      $prix_min=$tab[$i][3];
      $prix_max=$tab[$i][4];
      $addresse=$tab[$i][5];
      $catalogue=$tab[$i][6];
      $bio=$tab[$i][7];
      $photo_profil=$tab[$i][8];
      $numero=$tab[$i][9];
      $email=$tab[$i][10];
      $num_whatsapp=$tab[$i][11];
      $info = array($nom_dutilisateur,$photo_profil,"Compte fournisseur");
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
  // Je creer une requette pour sélectionner toutes les publications de l'utilisateur connécté
  $req_publication=("SELECT * FROM publication WHERE id_auteur = $id_user ORDER BY date_publication DESC");
  $publication=$pdo->query($req_publication);
} 

 ?>

<!doctype html>
<html lang="en">
  <?php include("en-tete.html"); ?>
  <body class="vertical  light  ">
    <div class="wrapper">
      <!-- J'inclus le fichier qui contient la barre de navigation -->
      <?php include("navigation.php") ?>
      <!-- J'inclu le fichier contenant le sidebar -->
      <?php include("side-bar.php") ?>
      <!--------------------------------------------------------------------------------------->
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <div class="col">
                  <h2 class="texte" >Votre compte d'utilisateur</h2>
                </div>
                <div class="col-auto">
                  <?= $info[2];  ?>
                </div>
              </div>
              <div class="mb-2 align-items-center" style="color:#702d53;">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div class="row mt-1 align-items-center">
                      <div class="col-12 col-lg-4 text-left pl-4">
                        <p class="mb-1 small text-muted"> <?= $info[0]; ?> </p>
                        <span class="h3"><?= "@".$nom_dutilisateur ?></span>
                        <p class="text-muted mt-2"><?= $bio; ?></p>
                      </div>
                    </div>
                    <center>
                      <div class="chartbox mr-4">
                        <a href="detail_photoprofil.php">
                          <img src="<?= $dossier_img.$photo_profil; ?>" class="pub" width="500" height="450">
                        </a>
                      </div>
                    </center>
                    <div class="row mt-1 align-items-center">
                      <div class="col-12 col-lg-4 text-left pl-4">
                        <?php 
                        if ($type_compte == "user") {
                          ?>
                          <p class="mb-1 small text-muted">Nom :<?= ucfirst($nom) ; ?></p>
                          <p class="mb-1 small text-muted">Prenom :<?= ucfirst($prenom) ; ?></p>
                          <p class="mb-1 small text-muted">Age :<?= $age." ans"; ?></p>
                          <p class="mb-1 small text-muted">Numero mobile :<a href="tel:<?= $numero; ?>"><?= $numero; ?></a></p>
                          <p class="mb-1 small text-muted">Adresse email :<a href="mailto:<?= $email; ?>"><?= $email; ?></a></p>
                          <p class="mb-1 small text-muted"><?= $nom; ?></p>
                          <?php
                        }elseif ($type_compte == "fournisseur") {
                          ?>
                          <p class="mb-1 small text-muted">Nom :<?= ucfirst($nom_dutilisateur) ; ?></p>
                          <p class="mb-1 small text-muted">Services :<?php foreach ($services as $value) {
                            echo ucfirst($value)."";
                          }; ?></p>
                          <p class="mb-1 small text-muted">Prix minimum des services :<?= $prix_min ; ?></p>
                          <p class="mb-1 small text-muted">Prix Maximum des services :<?= $prix_max ; ?></p>
                          <p class="mb-1 small text-muted">Adresse physique:<?= ucfirst($addresse); ?></p>
                          <p class="mb-1 small text-muted">Prix minimum des services :<?= $prix_min ; ?></p>
                          <p class="mb-1 small text-muted">Prix minimum des services :<?= $prix_min ; ?></p>
                          <p class="mb-1 small text-muted">Numero :<?= $numero; ?></p>
                          <p class="mb-1 small text-muted">Numero mobile :<a href="tel:<?= $numero; ?>"><?= $numero; ?></a></p>
                          <p class="mb-1 small text-muted">Adresse email :<a href="mailto:<?= $email; ?>"><?= $email; ?></a></p>
                          <p class="mb-1 small text-muted">Numero whatsapp :<a href="https://wa.me/<?= $num_whatsapp; ?>"><?= $num_whatsapp; ?></a></p>
                          
                          <?php
                        }
                        ?>
                        
                      </div>
                    </div>
                  </div> <!-- .card-body -->
                </div> <!-- .card -->
              </div>

              <div class="mb-2 align-items-center" style="color:#702d53;">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div class="row mt-1 align-items-center">
                      <div class="col-12 col-lg-4 text-left pl-4">
                        <span class="h3">
                          <?php 
                          // Si aucunne publication n'est trouvée
                          if (empty($publication->fetch())) {
                            echo "Vous n'avez aucune publication <br><br>";
                            ?>
                            <a href="connexion" class="bouton btn btn-lg btn-primary px-5"><i class="fe fe-plus"></i></a>
                            <?php
                          }else {
                            // Si il est trouvée des publications
                            echo "Vos publications";
                          }

                          ?>
                        </span>
                      </div>
                    </div>
                    <center>
                      <div class="chartbox mr-4" style="display:flex; gap:10px;">
                        <?php 
                        while ($pub = $publication->fetch()) {
                         ?>
                          <!-- Chaque image affichée ici fera réference à une publicaton -->
                          <a href="detail_publication.php">
                            <img src="<?= $dossier_img.$photo_profil; ?>" class="pub" width="60" height="60">
                          </a>
                         <?php 
                        }
                        ?>
                      </div>
                    </center>
                    
                  </div> <!-- .card-body -->
                </div> <!-- .card -->
              </div>
                <!-- Section pour les catalogues du fournisseur -->
                <?php 
                if ($type_compte == "fournisseur") {
                  $req_catalogue = "SELECT * FROM catalogue WHERE id_fournisseur = $id_user ORDER BY id_cat DESC";
                  $catalogue=$pdo->query($req_catalogue);
                  ?>
                  <div class="mb-2 align-items-center" style="color:#702d53;">
                    <div class="card shadow mb-4">
                      <div class="card-body">
                        <div class="row mt-1 align-items-center">
                          <div class="col-12 col-lg-4 text-left pl-4">
                            <span class="h3">
                              Catalogue
                            </span>
                          </div>
                        </div>
                        <center>
                          <div class="chartbox mr-4" style="display:flex; gap:10px;">
                            <?php 
                            while ($cat = $catalogue->fetch()) {
                             ?>
                              <!-- Chaque image affichée ici fera réference à une publicaton -->
                              <a href="detail_catalogue.php?id_cat=<?= $cat[0]; ?>">
                                <img src="/catalogue/<?= $cat[2]; ?>" class="pub" width="60" height="60">
                              </a>
                             <?php 
                            }
                            ?>
                          </div>
                        </center>
                      </div> <!-- .card-body -->
                    </div> <!-- .card -->
                  </div>                
                  <?php
                }
                ?>
              </div> <!-- .row -->
            </div> <!-- .col-12 -->
          </div> <!-- .row -->
        </div> <!-- .container-fluid -->
      </main> <!-- main -->
    </div> <!-- .wrapper -->
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/moment.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/simplebar.min.js"></script>
    <script src='js/daterangepicker.js'></script>
    <script src='js/jquery.stickOnScroll.js'></script>
    <script src="js/tinycolor-min.js"></script>
    <script src="js/config.js"></script>
    <script src="js/d3.min.js"></script>
    <script src="js/topojson.min.js"></script>
    <script src="js/datamaps.all.min.js"></script>
    <script src="js/datamaps-zoomto.js"></script>
    <script src="js/datamaps.custom.js"></script>
    <script src="js/Chart.min.js"></script>
    <script>
      /* defind global options */
      Chart.defaults.global.defaultFontFamily = base.defaultFontFamily;
      Chart.defaults.global.defaultFontColor = colors.mutedColor;
    </script>
    <script src="js/gauge.min.js"></script>
    <script src="js/jquery.sparkline.min.js"></script>
    <script src="js/apexcharts.min.js"></script>
    <script src="js/apexcharts.custom.js"></script>
    <script src='js/jquery.mask.min.js'></script>
    <script src='js/select2.min.js'></script>
    <script src='js/jquery.steps.min.js'></script>
    <script src='js/jquery.validate.min.js'></script>
    <script src='js/jquery.timepicker.js'></script>
    <script src='js/dropzone.min.js'></script>
    <script src='js/uppy.min.js'></script>
    <script src='js/quill.min.js'></script>
    <script>
      $('.select2').select2(
      {
        theme: 'bootstrap4',
      });
      $('.select2-multi').select2(
      {
        multiple: true,
        theme: 'bootstrap4',
      });
      $('.drgpicker').daterangepicker(
      {
        singleDatePicker: true,
        timePicker: false,
        showDropdowns: true,
        locale:
        {
          format: 'MM/DD/YYYY'
        }
      });
      $('.time-input').timepicker(
      {
        'scrollDefault': 'now',
        'zindex': '9999' /* fix modal open */
      });
      /** date range picker */
      if ($('.datetimes').length)
      {
        $('.datetimes').daterangepicker(
        {
          timePicker: true,
          startDate: moment().startOf('hour'),
          endDate: moment().startOf('hour').add(32, 'hour'),
          locale:
          {
            format: 'M/DD hh:mm A'
          }
        });
      }
      var start = moment().subtract(29, 'days');
      var end = moment();

      function cb(start, end)
      {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      }
      $('#reportrange').daterangepicker(
      {
        startDate: start,
        endDate: end,
        ranges:
        {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      }, cb);
      cb(start, end);
      $('.input-placeholder').mask("00/00/0000",
      {
        placeholder: "__/__/____"
      });
      $('.input-zip').mask('00000-000',
      {
        placeholder: "____-___"
      });
      $('.input-money').mask("#.##0,00",
      {
        reverse: true
      });
      $('.input-phoneus').mask('(000) 000-0000');
      $('.input-mixed').mask('AAA 000-S0S');
      $('.input-ip').mask('0ZZ.0ZZ.0ZZ.0ZZ',
      {
        translation:
        {
          'Z':
          {
            pattern: /[0-9]/,
            optional: true
          }
        },
        placeholder: "___.___.___.___"
      });
      // editor
      var editor = document.getElementById('editor');
      if (editor)
      {
        var toolbarOptions = [
          [
          {
            'font': []
          }],
          [
          {
            'header': [1, 2, 3, 4, 5, 6, false]
          }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [
          {
            'header': 1
          },
          {
            'header': 2
          }],
          [
          {
            'list': 'ordered'
          },
          {
            'list': 'bullet'
          }],
          [
          {
            'script': 'sub'
          },
          {
            'script': 'super'
          }],
          [
          {
            'indent': '-1'
          },
          {
            'indent': '+1'
          }], // outdent/indent
          [
          {
            'direction': 'rtl'
          }], // text direction
          [
          {
            'color': []
          },
          {
            'background': []
          }], // dropdown with defaults from theme
          [
          {
            'align': []
          }],
          ['clean'] // remove formatting button
        ];
        var quill = new Quill(editor,
        {
          modules:
          {
            toolbar: toolbarOptions
          },
          theme: 'snow'
        });
      }
      // Example starter JavaScript for disabling form submissions if there are invalid fields
      (function()
      {
        'use strict';
        window.addEventListener('load', function()
        {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form)
          {
            form.addEventListener('submit', function(event)
            {
              if (form.checkValidity() === false)
              {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
    </script>
    <script>
      var uptarg = document.getElementById('drag-drop-area');
      if (uptarg)
      {
        var uppy = Uppy.Core().use(Uppy.Dashboard,
        {
          inline: true,
          target: uptarg,
          proudlyDisplayPoweredByUppy: false,
          theme: 'dark',
          width: 770,
          height: 210,
          plugins: ['Webcam']
        }).use(Uppy.Tus,
        {
          endpoint: 'https://master.tus.io/files/'
        });
        uppy.on('complete', (result) =>
        {
          console.log('Upload complete! We’ve uploaded these files:', result.successful)
        });
      }
    </script>
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