// Dans ce fichier, je vais stocker les differents composants ou code html que j`utiliserais
// pour dynamiser les pages de mon site
// -----------------------------------------------------------------------------------------

// En tete 
const blocEnTete = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="favicon.ico">
<title>Tiny Dashboard - A Bootstrap Dashboard Template</title>
<!-- Simple bar CSS -->
<link rel="stylesheet" href="css/simplebar.css">
<!-- Fonts CSS -->
<link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<!-- Icons CSS -->
<link rel="stylesheet" href="css/feather.css">
<link rel="stylesheet" href="css/select2.css">
<link rel="stylesheet" href="css/dropzone.css">
<link rel="stylesheet" href="css/uppy.min.css">
<link rel="stylesheet" href="css/jquery.steps.css">
<link rel="stylesheet" href="css/jquery.timepicker.css">
<link rel="stylesheet" href="css/quill.snow.css">
<!-- Date Range Picker CSS -->
<link rel="stylesheet" href="css/daterangepicker.css">
<!-- Style principale-->
<link rel="stylesheet" href="css/app-light.css" id="lightTheme" id="feuille-destyle-principale">
<link rel="stylesheet" href="Mes-styles/style-suplementaire.css" id="feuille-destyle-secondaire">`;
// Side Bar
const blocSideBar = `
<aside class="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
  <a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
    <i class="fe fe-x"><span class="sr-only"></span></i>
  </a>
  <nav class="vertnav navbar navbar-light">
  <!-- nav bar -->
    <div class="w-100 mb-4 d-flex">
      <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html" id="icone-sidebar">
        <svg version="1.1" id="logo" class="navbar-brand-img brand-sm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xml:space="preserve">
          <g><img src="logo.png" width="100" height="40"></g>
        </svg>
      </a>
    </div>
    <ul class="navbar-nav flex-fill w-100 mb-2">
      <li class="nav-item dropdown">
      <a href="acceuil"  aria-expanded="false" class="nav-link">
        <i class="fe fe-home fe-16"></i>
        <span class="ml-3 item-text">Acceuil</span><span class="sr-only">(current)</span>
      </a>
      </li>
      </ul>
      <ul class="navbar-nav flex-fill w-100 mb-2">
        <li class="nav-item dropdown">
          <a href="fournisseurs"  aria-expanded="false" class="nav-link">
            <i class="fe fe-box fe-16"></i>
            <span class="ml-3 item-text">Fournisseurs</span>
          </a>
        </li>
        <li class="nav-item w-100">
          <a class="nav-link" href="widgets.html">
            <i class="fe fe-layers fe-16"></i>
            <span class="ml-3 item-text">Evenements</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a href="commentcreer-unprojet"  aria-expanded="false" class="nav-link">
            <i class="fe fe-credit-card fe-16"></i>
            <span class="ml-3 item-text">Planning</span>
          </a>
          <ul class="collapse list-unstyled pl-4 w-100" id="forms">
            <li class="nav-item">
              <a class="nav-link pl-3" href="./form_elements.html"><span class="ml-1 item-text">Abonnées</span></a>
            </li>
          </ul>
            <!-- </li>
          </ul> -->
          <ul class="navbar-nav flex-fill w-100 mb-2">
              <li class="nav-item dropdown">
              <a href="profil_user.php?id_compte=<?=$id_user; ?>?typecompte=<?=$type_compte; ?>" data-toggle="" aria-expanded="false" class="nav-link">
                <i class="fe fe-user fe-16"></i>
                <span class="ml-3 item-text">Profil</span>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item w-100">
              <a class="nav-link" href="../docs/index.html">
                <i class="fe fe-help-circle fe-16"></i>
                <span class="ml-3 item-text">A propos de milulu</span>
              </a>
            </li>
          </ul>
          <div class="btn-box w-100 mt-4 mb-1">
            <a href="deconnexion" target="" class="bouton btn mb-2 btn-primary btn-lg btn-block">
              <i class="fe fe--cart fe-12 mx-2"></i><span class="small">Se deconnecter ?</span>
            </a>
          </div>
        </nav>
      </aside>`;

// Bloc pour les onglets de naavigation
const blocNavigation = `
<nav class="topnav navbar navbar-light">
<button type="button" class="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar">
  <i class="fe fe-menu navbar-toggler-icon"></i>
</button>
<ul class="nav">
  <li class="nav-item nav-notif">
    <a class="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-notif">
      <span class="fe fe-bell fe-16"></span>
      <span class="dot dot-md bg-success"></span>
    </a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle text-muted pr-0" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="avatar avatar-sm mt-2">
        <img src="<?= $dossier_img.$photo_profil; ?>" alt="Votre photo de profil" class="avatar-img rounded-circle">
      </span>
    </a>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
      <a class="dropdown-item" href="profil_user.php?id_compte=<?=$id_user; ?>?typecompte=<?=$type_compte; ?>">Profil</a>
      <a class="dropdown-item" href="#">Paramètres</a>
      <a class="dropdown-item" href="#">Activités</a>
    </div>
  </li>
</ul>
</nav>`;

// Section pour faire appel aux scripts 
const blocScripts = `<script src="js/jquery.min.js"></script>
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
</script>`;

// Page pour le choix du type de compte
const pgChoixTypeCompte = `
<div class="wrapper vh-100" id="bloc-type-compte">
<div class="align-items-center h-100 d-flex w-50 mx-auto">
  <div class="mx-auto text-center">
    <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
      <g>
        <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
      </g>
    </a>
    <h1 class="mb-1 text-muted font-weight-bold">Bienvenue !</h1>
    <h6 class="mb-3 text-muted">Choisissez le type de compte que voulez créer</h6>
    <a href="creer-votre-compte-milulu" class="espace btn btn-lg btn-primary px-5">Compte utilisateur</a>
    <a href="compte-fournisseur" class="btn btn-lg btn-primary px-5">Compte fournisseur</a>
  </div>
</div>
</div>`;

// Message d`erreur
// ------------------------------------------------------------------------------------------

// Email incorrect
const msgEmailIncorrect = `
<div class="wrapper vh-100">
<div class="align-items-center h-100 d-flex w-50 mx-auto">
  <div class="mx-auto text-center">
    <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
      <g>
        <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
      </g>
    </a>
    <h1 class="mb-1 text-muted font-weight-bold">ERREUR!</h1>
    <h6 class="mb-3 text-muted">Le format de l'adresse email est incorrect, veuillez le modifier svp!</h6>
    <a href="connexion" class="btn btn-lg btn-primary px-5">Réessayer</a>
  </div>
</div>
</div>`;
// Numero incorrect
const msgNumeroIncorrect = `
<div class="wrapper vh-100">
<div class="align-items-center h-100 d-flex w-50 mx-auto">
  <div class="mx-auto text-center">
    <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
      <g>
        <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
      </g>
    </a>
    <h1 class="mb-1 text-muted font-weight-bold">ERREUR!</h1>
    <h6 class="mb-3 text-muted">Le format du numero est incorrect, veuillez le modifier svp!</h6>
    <a href="connexion" class="btn btn-lg btn-primary px-5">Réessayer</a>
  </div>
</div>
</div>`;
// Utilisateur non trouvéé
const msgUserNonTrouve = `
<div class="wrapper vh-100">
<div class="align-items-center h-100 d-flex w-50 mx-auto">
  <div class="mx-auto text-center">
    <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
      <g>
        <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
      </g>
    </a>
    <h1 class="mb-1 text-muted font-weight-bold">OOPS!</h1>
    <h6 class="mb-3 text-muted">Aucun utilisateur trouvée avec ces identifiants</h6>
    <a href="connexion" class="btn btn-lg btn-primary px-5">Réessayer</a>
  </div>
</div>
</div>`;
// Message pour une erreur inconnu
const msgErreurInconnue = `
<div class="wrapper vh-100">
<div class="align-items-center h-100 d-flex w-50 mx-auto">
  <div class="mx-auto text-center">
    <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
      <g>
        <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
      </g>
    </a>
    <h1 class="mb-1 text-muted font-weight-bold">OOPS !</h1>
    <h6 class="mb-3 text-muted">Une érreur c'est produite</h6>
    <a href="connexion" class="btn btn-lg btn-primary px-5">Réessayer</a>
  </div>
</div>
</div>`;