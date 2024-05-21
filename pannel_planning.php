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
      <?php include("navigation.php"); ?>
      <?php include("side-bar.php"); ?>
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="row align-items-center my-3">
                <div class="col">
                  <h2 class="page-title texte">Panneau de gestion</h2>
                </div>
<!--                 <div class="col-auto">
                  <button type="button" class="btn btn-lg btn-primary"><span class="fe fe-plus fe-16 mr-3"></span>New</button>
                </div> -->
              </div>
              <div class="file-container border-top">
                <div class="file-panel mt-4">
                  <h6 class="mb-3 texte">Utilisez les onglets ci-dessous pour gerer vos projet</h6>
                  <hr class="my-4">

                  <div class="row">

                  <div class="col-md-6 col-lg-4" >
                      <a href="selection-projet" style="text-decoration: none;">
                        <div class="shadow mb-4" style="background-color: #fff; border-radius: 5px;">
                          <div class="card-body file-list">
                            <div class="d-flex align-items-center">
                              <div class="circle circle-md bg-secondary">
                                <span class="fe fe-folder fe-16 text-white"></span>
                              </div>
                              <div class="flex-fill ml-4 fname">
                                <strong>Mes projets</strong><br />
                              </div>
                            </div>
                          </div> <!-- .card-body -->
                        </div>
                      </a> <!-- .card -->
                    </div> <!-- .col -->

                    <div class="col-md-6 col-lg-4" >
                      <a href="" style="text-decoration: none;">
                        <div class="shadow mb-4" style="background-color: #fff; border-radius: 5px;">
                          <div class="card-body file-list">
                            <div class="d-flex align-items-center">
                              <div class="circle circle-md bg-secondary">
                                <span class="fe fe-user-plus fe-16 text-white"></span>
                              </div>
                              <div class="flex-fill ml-4 fname">
                                <strong>Inviter</strong><br />
                              </div>
                            </div>
                          </div> <!-- .card-body -->
                        </div>
                      </a> <!-- .card -->
                    </div> <!-- .col -->

                    <div class="col-md-6 col-lg-4" >
                      <a href="" style="text-decoration: none;">
                        <div class="shadow mb-4" style="background-color: #fff; border-radius: 5px;">
                          <div class="card-body file-list">
                            <div class="d-flex align-items-center">
                              <div class="circle circle-md bg-secondary">
                                <span class="fe fe-file-text fe-16 text-white"></span>
                              </div>
                              <div class="flex-fill ml-4 fname">
                                <strong>Sondages</strong><br />
                              </div>
                            </div>
                          </div> <!-- .card-body -->
                        </div>
                      </a> <!-- .card -->
                    </div> <!-- .col -->

                    <div class="col-md-6 col-lg-4" >
                      <a href="" style="text-decoration: none;">
                        <div class="shadow mb-4" style="background-color: #fff; border-radius: 5px;">
                          <div class="card-body file-list">
                            <div class="d-flex align-items-center">
                              <div class="circle circle-md bg-secondary">
                                <span class="fe fe-alert-octagon fe-16 text-white"></span>
                              </div>
                              <div class="flex-fill ml-4 fname">
                                <strong>Suggestions</strong><br />
                              </div>
                            </div>
                          </div> <!-- .card-body -->
                        </div>
                      </a> <!-- .card -->
                    </div> <!-- .col -->

                    <div class="col-md-6 col-lg-4" >
                      <a href="http://localhost:4000/" style="text-decoration: none;">
                        <div class="shadow mb-4" style="background-color: #fff; border-radius: 5px;">
                          <div class="card-body file-list">
                            <div class="d-flex align-items-center">
                              <div class="circle circle-md bg-secondary">
                                <span class="fe fe-user fe-16 text-white"></span>
                              </div>
                              <div class="flex-fill ml-4 fname">
                                <strong>Fournisseurs</strong><br />
                              </div>
                            </div>
                          </div> <!-- .card-body -->
                        </div>
                      </a> <!-- .card -->
                    </div> <!-- .col -->

                    <div class="col-md-6 col-lg-4" >
                      <a href="" style="text-decoration: none;">
                        <div class="shadow mb-4" style="background-color: #fff; border-radius: 5px;">
                          <div class="card-body file-list">
                            <div class="d-flex align-items-center">
                              <div class="circle circle-md bg-secondary">
                                <span class="fe fe-activity fe-16 text-white"></span>
                              </div>
                              <div class="flex-fill ml-4 fname">
                                <strong>Statistiques</strong><br />
                              </div>
                            </div>
                          </div> <!-- .card-body -->
                        </div>
                      </a> <!-- .card -->
                    </div> <!-- .col -->




                  </div> <!-- .row -->
                  <hr class="my-4">
                  <h6 class="mb-3 texte">Publications</h6>
                  
                </div> <!-- .file-panel -->
                <div class="info-panel">
                  <div class="info-content p-3 border-left">
                    <div class="d-flex align-items-center mb-3">
                      <div class="flex-fill">
                        <span class="circle circle-sm bg-white mr-2">
                          <span class="fe fe-image fe-12 text-success"></span>
                        </span>
                        <span class="h6">Creative Logo.PNG</span>
                      </div>
                      <span class="btn close-info">
                        <i class="fe fe-x"></i>
                      </span>
                    </div>
                    <ul class="nav nav-tabs nav-fill mb-3" id="file-detail" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="tab-detail" data-toggle="tab" href="#detail" role="tab" aria-controls="detail" aria-selected="true">Details</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="tab-activity" data-toggle="tab" href="#activity" role="tab" aria-controls="activity" aria-selected="false">Activities</a>
                      </li>
                    </ul>
                    <div class="tab-content" id="file-tabs">
                      <div class="tab-pane fade show active" id="detail" role="tabpanel" aria-labelledby="tab-detail">
                        <img src="./assets/products/p4.jpg" alt="..." class="img-fluid rounded">
                        <ul class="avatars-list my-4 mx-0">
                          <li>
                            <a href="#!" class="avatar avatar-sm">
                              <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-2.jpg">
                            </a>
                          </li>
                          <li>
                            <a href="#!" class="avatar avatar-sm">
                              <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-4.jpg">
                            </a>
                          </li>
                        </ul>
                        <dl class="row my-4 small">
                          <dt class="col-6 text-muted">Owner</dt>
                          <dd class="col-6">Whilemina Pate</dd>
                          <dt class="col-6 text-muted">Type</dt>
                          <dd class="col-6">Image</dd>
                          <dt class="col-6 text-muted">Size</dt>
                          <dd class="col-6">32M</dd>
                          <dt class="col-6 text-muted">Location</dt>
                          <dd class="col-6"><a href="#" class="text-muted">Design File</a></dd>
                          <dt class="col-6 text-muted">Created at</dt>
                          <dd class="col-6">Aug 20, 2020</dd>
                          <dt class="col-6 text-muted">Last update</dt>
                          <dd class="col-6">Aug 21, 2020</dd>
                        </dl>
                      </div> <!-- .tab-pane -->
                      <div class="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="tab-activity">
                        <div class="timeline">
                          <div class="pb-3 timeline-item item-primary">
                            <div class="pl-5 small">
                              <div class="mb-1"><strong>@Brown Asher</strong><span class="text-muted mx-1">have uploaded</span><strong>Tinydash</strong></div>
                              <span class="badge badge-pill badge-dark">1h ago</span>
                            </div>
                          </div>
                          <div class="pb-3 timeline-item item-warning">
                            <div class="pl-5 small">
                              <div class="mb-3"><strong>@Fletcher</strong><span class="text-muted mx-1">shared</span><strong>Tiny Admin</strong></div>
                              <ul class="avatars-list mb-2">
                                <li>
                                  <a href="#!" class="avatar avatar-sm">
                                    <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-1.jpg">
                                  </a>
                                </li>
                                <li>
                                  <a href="#!" class="avatar avatar-sm">
                                    <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-4.jpg">
                                  </a>
                                </li>
                                <li>
                                  <a href="#!" class="avatar avatar-sm">
                                    <img alt="..." class="avatar-img rounded-circle" src="./assets/avatars/face-3.jpg">
                                  </a>
                                </li>
                              </ul>
                              <span class="badge badge-pill badge-dark">1h ago</span>
                            </div>
                          </div>
                          <div class="pb-3 timeline-item item-success">
                            <div class="pl-5 small">
                              <div class="mb-2"><strong>@Kelley Sonya</strong><span class="text-muted small mx-1">has commented on</span><strong>Advanced table</strong></div>
                              <div class="card d-inline-flex mb-2">
                                <div class="card-body bg-light py-2 px-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                              </div>
                              <span class="badge badge-pill badge-dark">1h ago</span>
                            </div>
                          </div>
                        </div> <!-- / .timeline -->
                      </div> <!-- .tab-pane -->
                    </div> <!-- .tab-content -->
                  </div>
                </div>
              </div> <!-- .file-container -->
            </div> <!-- .col -->
          </div> <!-- .row -->
        </div> <!-- .container-fluid -->
        <div class="modal fade modal-notif modal-slide" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="defaultModalLabel">Notifications</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="list-group list-group-flush my-n3">
                  <div class="list-group-item bg-transparent">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="fe fe-box fe-24"></span>
                      </div>
                      <div class="col">
                        <small><strong>Package has uploaded successfull</strong></small>
                        <div class="my-0 text-muted small">Package is zipped and uploaded</div>
                        <small class="badge badge-pill badge-light text-muted">1m ago</small>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item bg-transparent">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="fe fe-download fe-24"></span>
                      </div>
                      <div class="col">
                        <small><strong>Widgets are updated successfull</strong></small>
                        <div class="my-0 text-muted small">Just create new layout Index, form, table</div>
                        <small class="badge badge-pill badge-light text-muted">2m ago</small>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item bg-transparent">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="fe fe-inbox fe-24"></span>
                      </div>
                      <div class="col">
                        <small><strong>Notifications have been sent</strong></small>
                        <div class="my-0 text-muted small">Fusce dapibus, tellus ac cursus commodo</div>
                        <small class="badge badge-pill badge-light text-muted">30m ago</small>
                      </div>
                    </div> <!-- / .row -->
                  </div>
                  <div class="list-group-item bg-transparent">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="fe fe-link fe-24"></span>
                      </div>
                      <div class="col">
                        <small><strong>Link was attached to menu</strong></small>
                        <div class="my-0 text-muted small">New layout has been attached to the menu</div>
                        <small class="badge badge-pill badge-light text-muted">1h ago</small>
                      </div>
                    </div>
                  </div> <!-- / .row -->
                </div> <!-- / .list-group -->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">Clear All</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade modal-shortcut modal-slide" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="defaultModalLabel">Shortcuts</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body px-5">
                <div class="row align-items-center">
                  <div class="col-6 text-center">
                    <div class="squircle bg-success justify-content-center">
                      <i class="fe fe-cpu fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Control area</p>
                  </div>
                  <div class="col-6 text-center">
                    <div class="squircle bg-primary justify-content-center">
                      <i class="fe fe-activity fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Activity</p>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-6 text-center">
                    <div class="squircle bg-primary justify-content-center">
                      <i class="fe fe-droplet fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Droplet</p>
                  </div>
                  <div class="col-6 text-center">
                    <div class="squircle bg-primary justify-content-center">
                      <i class="fe fe-upload-cloud fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Upload</p>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-6 text-center">
                    <div class="squircle bg-primary justify-content-center">
                      <i class="fe fe-users fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Users</p>
                  </div>
                  <div class="col-6 text-center">
                    <div class="squircle bg-primary justify-content-center">
                      <i class="fe fe-settings fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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