// Je crée des constantes pour stocker les different contenue html que j’aurais a generer avec le js
// En tete 
const contenueBlocEnTete = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="favicon.ico">
<title>Milulu RDC</title>
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

// Bloc pour les onglets de naavigation
const contenueBlocNavigation = `        <button type="button" class="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar">
<i class="fe fe-menu navbar-toggler-icon"></i>
</button>
<form class="form-inline mr-auto searchform text-muted">
<input class="form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted" type="search" placeholder="Type something..." aria-label="Search">
</form>
<ul class="nav">
<li class="nav-item">
  <a class="nav-link text-muted my-2" href="#" id="modeSwitcher" data-mode="light">
    <i class="fe fe-sun fe-16"></i>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-shortcut">
    <span class="fe fe-grid fe-16"></span>
  </a>
</li>
<li class="nav-item nav-notif">
  <a class="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-notif">
    <span class="fe fe-bell fe-16"></span>
    <span class="dot dot-md bg-success"></span>
  </a>
</li>
</ul>`;
// Side Bar
const contenueBlocSideBar = `<a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
<i class="fe fe-x"><span class="sr-only"></span></i>
</a>
<nav class="vertnav navbar navbar-light">
<!-- nav bar -->
<div class="w-100 mb-4 d-flex">
  <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
    <svg version="1.1" id="logo" class="navbar-brand-img brand-sm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xml:space="preserve">
      <g>
        <polygon class="st0" points="78,105 15,105 24,87 87,87 	" />
        <polygon class="st0" points="96,69 33,69 42,51 105,51 	" />
        <polygon class="st0" points="78,33 15,33 24,15 87,15 	" />
      </g>
    </svg>
  </a>
</div>
<ul class="navbar-nav flex-fill w-100 mb-2">
  <li class="nav-item dropdown">
    <a href="#dashboard" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-home fe-16"></i>
      <span class="ml-3 item-text">Dashboard</span><span class="sr-only">(current)</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="dashboard">
      <li class="nav-item active">
        <a class="nav-link pl-3" href="./index.html"><span class="ml-1 item-text">Default</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./dashboard-analytics.html"><span class="ml-1 item-text">Analytics</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./dashboard-sales.html"><span class="ml-1 item-text">E-commerce</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./dashboard-saas.html"><span class="ml-1 item-text">Saas Dashboard</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./dashboard-system.html"><span class="ml-1 item-text">Systems</span></a>
      </li>
    </ul>
  </li>
</ul>
<p class="text-muted nav-heading mt-4 mb-1">
  <span>Components</span>
</p>
<ul class="navbar-nav flex-fill w-100 mb-2">
  <li class="nav-item dropdown">
    <a href="#ui-elements" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-box fe-16"></i>
      <span class="ml-3 item-text">UI elements</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="ui-elements">
      <li class="nav-item">
        <a class="nav-link pl-3" href="./ui-color.html"><span class="ml-1 item-text">Colors</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./ui-typograpy.html"><span class="ml-1 item-text">Typograpy</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./ui-icons.html"><span class="ml-1 item-text">Icons</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./ui-buttons.html"><span class="ml-1 item-text">Buttons</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./ui-notification.html"><span class="ml-1 item-text">Notifications</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./ui-modals.html"><span class="ml-1 item-text">Modals</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./ui-tabs-accordion.html"><span class="ml-1 item-text">Tabs & Accordion</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./ui-progress.html"><span class="ml-1 item-text">Progress</span></a>
      </li>
    </ul>
  </li>
  <li class="nav-item w-100">
    <a class="nav-link" href="widgets.html">
      <i class="fe fe-layers fe-16"></i>
      <span class="ml-3 item-text">Widgets</span>
      <span class="badge badge-pill badge-primary">New</span>
    </a>
  </li>
  <li class="nav-item dropdown">
    <a href="#forms" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-credit-card fe-16"></i>
      <span class="ml-3 item-text">Forms</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="forms">
      <li class="nav-item">
        <a class="nav-link pl-3" href="./form_elements.html"><span class="ml-1 item-text">Basic Elements</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./form_advanced.html"><span class="ml-1 item-text">Advanced Elements</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./form_validation.html"><span class="ml-1 item-text">Validation</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./form_wizard.html"><span class="ml-1 item-text">Wizard</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./form_layouts.html"><span class="ml-1 item-text">Layouts</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./form_upload.html"><span class="ml-1 item-text">File upload</span></a>
      </li>
    </ul>
  </li>
  <li class="nav-item dropdown">
    <a href="#tables" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-grid fe-16"></i>
      <span class="ml-3 item-text">Tables</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="tables">
      <li class="nav-item">
        <a class="nav-link pl-3" href="./table_basic.html"><span class="ml-1 item-text">Basic Tables</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./table_advanced.html"><span class="ml-1 item-text">Advanced Tables</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./table_datatables.html"><span class="ml-1 item-text">Data Tables</span></a>
      </li>
    </ul>
  </li>
  <li class="nav-item dropdown">
    <a href="#charts" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-pie-chart fe-16"></i>
      <span class="ml-3 item-text">Charts</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="charts">
      <li class="nav-item">
        <a class="nav-link pl-3" href="./chart-inline.html"><span class="ml-1 item-text">Inline Chart</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./chart-chartjs.html"><span class="ml-1 item-text">Chartjs</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./chart-apexcharts.html"><span class="ml-1 item-text">ApexCharts</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./datamaps.html"><span class="ml-1 item-text">Datamaps</span></a>
      </li>
    </ul>
  </li>
</ul>
<p class="text-muted nav-heading mt-4 mb-1">
  <span>Apps</span>
</p>
<ul class="navbar-nav flex-fill w-100 mb-2">
  <li class="nav-item w-100">
    <a class="nav-link" href="calendar.html">
      <i class="fe fe-calendar fe-16"></i>
      <span class="ml-3 item-text">Calendar</span>
    </a>
  </li>
  <li class="nav-item dropdown">
    <a href="#contact" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-book fe-16"></i>
      <span class="ml-3 item-text">Contacts</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="contact">
      <a class="nav-link pl-3" href="./contacts-list.html"><span class="ml-1">Contact List</span></a>
      <a class="nav-link pl-3" href="./contacts-grid.html"><span class="ml-1">Contact Grid</span></a>
      <a class="nav-link pl-3" href="./contacts-new.html"><span class="ml-1">New Contact</span></a>
    </ul>
  </li>
  <li class="nav-item dropdown">
    <a href="#profile" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-user fe-16"></i>
      <span class="ml-3 item-text">Profile</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="profile">
      <a class="nav-link pl-3" href="./profile.html"><span class="ml-1">Overview</span></a>
      <a class="nav-link pl-3" href="./profile-settings.html"><span class="ml-1">Settings</span></a>
      <a class="nav-link pl-3" href="./profile-security.html"><span class="ml-1">Security</span></a>
      <a class="nav-link pl-3" href="./profile-notification.html"><span class="ml-1">Notifications</span></a>
    </ul>
  </li>
  <li class="nav-item dropdown">
    <a href="#fileman" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-folder fe-16"></i>
      <span class="ml-3 item-text">File Manager</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="fileman">
      <a class="nav-link pl-3" href="./files-list.html"><span class="ml-1">Files List</span></a>
      <a class="nav-link pl-3" href="./files-grid.html"><span class="ml-1">Files Grid</span></a>
    </ul>
  </li>
  <li class="nav-item dropdown">
    <a href="#support" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-compass fe-16"></i>
      <span class="ml-3 item-text">Help Desk</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="support">
      <a class="nav-link pl-3" href="./support-center.html"><span class="ml-1">Home</span></a>
      <a class="nav-link pl-3" href="./support-tickets.html"><span class="ml-1">Tickets</span></a>
      <a class="nav-link pl-3" href="./support-ticket-detail.html"><span class="ml-1">Ticket Detail</span></a>
      <a class="nav-link pl-3" href="./support-faqs.html"><span class="ml-1">FAQs</span></a>
    </ul>
  </li>
</ul>
<p class="text-muted nav-heading mt-4 mb-1">
  <span>Extra</span>
</p>
<ul class="navbar-nav flex-fill w-100 mb-2">
  <li class="nav-item dropdown">
    <a href="#pages" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-file fe-16"></i>
      <span class="ml-3 item-text">Pages</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100 w-100" id="pages">
      <li class="nav-item">
        <a class="nav-link pl-3" href="./page-orders.html">
          <span class="ml-1 item-text">Orders</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./page-timeline.html">
          <span class="ml-1 item-text">Timeline</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./page-invoice.html">
          <span class="ml-1 item-text">Invoice</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./page-404.html">
          <span class="ml-1 item-text">Page 404</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./page-500.html">
          <span class="ml-1 item-text">Page 500</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./page-blank.html">
          <span class="ml-1 item-text">Blank</span>
        </a>
      </li>
    </ul>
  </li>
  <li class="nav-item dropdown">
    <a href="#auth" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-shield fe-16"></i>
      <span class="ml-3 item-text">Authentication</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="auth">
      <a class="nav-link pl-3" href="./auth-login.html"><span class="ml-1">Login 1</span></a>
      <a class="nav-link pl-3" href="./auth-login-half.html"><span class="ml-1">Login 2</span></a>
      <a class="nav-link pl-3" href="./auth-register.html"><span class="ml-1">Register</span></a>
      <a class="nav-link pl-3" href="./auth-resetpw.html"><span class="ml-1">Reset Password</span></a>
      <a class="nav-link pl-3" href="./auth-confirm.html"><span class="ml-1">Confirm Password</span></a>
    </ul>
  </li>
  <li class="nav-item dropdown">
    <a href="#layouts" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
      <i class="fe fe-layout fe-16"></i>
      <span class="ml-3 item-text">Layout</span>
    </a>
    <ul class="collapse list-unstyled pl-4 w-100" id="layouts">
      <li class="nav-item">
        <a class="nav-link pl-3" href="./index.html"><span class="ml-1 item-text">Default</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./index-horizontal.html"><span class="ml-1 item-text">Top Navigation</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3" href="./index-boxed.html"><span class="ml-1 item-text">Boxed</span></a>
      </li>
    </ul>
  </li>
</ul>
<p class="text-muted nav-heading mt-4 mb-1">
  <span>Documentation</span>
</p>
<ul class="navbar-nav flex-fill w-100 mb-2">
  <li class="nav-item w-100">
    <a class="nav-link" href="../docs/index.html">
      <i class="fe fe-help-circle fe-16"></i>
      <span class="ml-3 item-text">Getting Start</span>
    </a>
  </li>
</ul>
<div class="btn-box w-100 mt-4 mb-1">
  <a href="https://themeforest.net/item/tinydash-bootstrap-html-admin-dashboard-template/27511269" target="_blank" class="btn mb-2 btn-primary btn-lg btn-block">
    <i class="fe fe-shopping-cart fe-12 mx-2"></i><span class="small">Buy now</span>
  </a>
</div>
</nav>`;
// Section pour faire appel aux scripts 
const contenuBlocScripts = `
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
</script>`;


// Page pour le choix du type de compte
const pgChoixTypeCompte = `
<div class="wrapper vh-100" id="bloc-type-compte">
  <div class="align-items-center h-100 d-flex w-50 mx-auto" id="bloc-choix-typecompte">
    <div class="mx-auto text-center">
      <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
        <g>
          <img src="logo.png" width="100" height="40" style="background-color: #fff;border-radius: 5px;padding: auto;right: 30%;">
        </g>
      </a>
      <h1 class="mb-1 text-muted font-weight-bold">Bienvenue !</h1>
      <h6 class="mb-3 text-muted">Choisissez le type de compte que voulez créer</h6>
      <a href="creer-votre-compte-milulu" id="lien-compte-utilisateur" class="btn-arrondi espace btn btn-lg btn-primary px-5">Compte utilisateur</a>
      <a href="compte-fournisseur" id="lien-compte-fournisseur" class="btn btn-lg btn-primary px-5 btn-arrondi">Compte fournisseur</a>
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

// Contenue de la page d’acceuil
const contenuPageAcceuil = `
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
                <!-- Bloc pour les publications -->
                <div class="publication">
                  <!-- Bloc pour l’affichage des information sur l’auteur de la publication -->
                  <div class="bloc-infos-publication">
                    <div class="bloc-profil-auteur">
                      <img src="affiche milulu.jpg" class="img-auteur-pub">
                    </div>
                    <div class="bloc-nom-auteur">
                      <h6 class="">Jhon Doe </h6>
                    </div>
                    <div class="bloc-option-pub">
                      <i class="fe fe-more-vertical"></i>
                    </div>
                  </div>
                  <!-- Bloc pour l’affichage du contenu de la publication-->
                  <div class="bloc-contenu-publication">
                    <div class="bloc-contenu-txt">
                      <p class="txt-pub"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Voluptas, accusantium tenetur! Iste suscipit laudantium quas maxime cumque facere dignissimos nulla. Fugiat cupiditate nemo, distinctio tenetur in eveniet totam?</p>
                    </div>
                    <div class="bloc-contenu-img">
                      <img src="affiche milulu.jpg" class="img-pub">
                    </div>
                    <div class="bloc-action-pub">
                      <i class="fe fe-more-vertical"></i>
                    </div>
                  </div>

                </div>
            </div> <!-- .col-12 -->
        </div> <!-- .row -->
    </div> <!-- .container-fluid -->
`;
// -------------------------------------------------------------------------------------------------------------------------------
// Suite des formulaire pour l’enregistrement d’un compte utilisateur
const formCompteUser1 = `
<div class="row align-items-center h-100">
        <form class="col-lg-6 col-md-8 col-10 mx-auto" method="" action="" id="form-user1">
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
          <button class="btn btn-lg btn-primary btn-block" type="submit" name="" id="btn-form-user1">Suivant</button>
          <p class="mt-5 mb-3 text-muted text-center"><a href="" class="texte" id="lien-">Vous avez déja un compte ?</a></p>
        </form>
      </div>
`;

const formCompteUser2 = `
<div class="row align-items-center h-100">
        <form class="col-lg-6 col-md-8 col-10 mx-auto" method="" action="" enctype="multipart/form-data" id="form-user2">
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
`;

// -------------------------------------------------------------------------------------------------------------------------------
// Suite des formulaires pour l’enregistrement d’un compte fournisseur

const formCompteFournisseur1 = `
<div class="row align-items-center h-100">
        <form class="col-lg-6 col-md-8 col-10 mx-auto" method="" action="" id="form-fournisseur1">
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
`;

const formCompteFournisseur2 = `
<div class="row align-items-center h-100">
        <form class="col-lg-6 col-md-8 col-10 mx-auto" method="" action="" enctype="" id="form-fournisseur2">
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
            <label for="nom">Ajoutez une description de vos activité (bio)</label>
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
              <input type="password" name="mdp" id="mdp" class="form-control" required maxlength="50" minlength="8" placeholder="Créez u mot de passe">

            </div>
          </div>
          <hr class="my-4">
          <div class="row mb-4">
            <div class="col-md-6">
              <p class="small text-muted mb-2">En vous inscrivant vous acceptez notre <a href="politique-milulu">politique de confidentialité</a> : </p>
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
          <button class="btn btn-lg btn-primary btn-block" type="submit" name="terminer">Enregistrer</button>
          <p class="mt-5 mb-3 text-muted text-center"><a href="connexion" class="texte">Vous avez déja un compte ?</a></p>
        </form>
      </div>
`



// Je recupere les differents noeud que j`aurrai a manipuler tout au long du code
// Je recupere d’abord le noeud principale qui est la balise <html>
const html = document.documentElement
// Je recupere le differents enfant de ce noeud en destructurant le tableau ci-dessus, ce qui
// me retournera logiquement la balise <head> et <body>
const [head, body ] = html.children
// Je recurepere la div principale de la page, a partir duquel je pourrais acceder a tout les 
// enfants que je voudrais manipuler avec le js
const blocMere = body.firstElementChild
// Je récupere également la div qui contient les liens vers tout les scripts auquel les pages zeb du site dépendent
const blocScripts = body.lastElementChild
// Maintenat, je vais recuperer la bare de navigation, le side-Bar ainsi que l’elément main qui
// sera principalement la cible des modifications afin de changer aisement de page.
const [nav, sidebar, main ] = blocMere.firstElementChild.children










// -------------------------------------------------------------------------
// Je donne un nouveau contenu a cette div
head.innerHTML = contenueBlocEnTete;
// ---------------------------------------------------------------------------------------------
// Les fonctions que je vais utiliser
// Je commence par créer une fonction qui verifiera si le champ cible n`est pas vide
function champVide (cible) {
    // Je verifie si la valeur du champ cible est vide, si oui alors:
    if (cible.value === undefined || cible.value === "") {
        // Je change la couleur de la bordure en rouge
        cible.style.border = "2px solid red";
        // Je donne au texte de ce champ la couleur rouge
        cible.style.color = "red";
        // Je change le texte a l`interieur de ce champ
        cible.placeholder = "Ce champs est obligatoire";
        // Et enfin je retourne la valeur false
        return false
    }  else {
        // Si la valeur du champ cible n`est pas vide alors je retourne true
        return true;
    }    
}
// ---------------------------------------------------------------------------------------------
// Je me mets a l`écoute des évenement submit pour controler les formulaires de mon site
document.addEventListener ("submit", function (event) {
    event.preventDefault ();
    // Je recupere la cible de l`évenement
    let element = event.target;
    // Je recupere l`id de la cible
    let idElement = element.id;
    console.log (element)
    // Je verifie si il s`agit du formulaire de connexion
    if (idElement === "form-connexion") {
        // Je recupere les champ soumis
        let numero = document.getElementById ("numero");
        let motDePasse = document.getElementById ("mdp");
        let typeCompte = document.getElementById ("checkbox-compte")
        // Je verifie si chaque entrée du formulaire est bien remplis 
        if (champVide(numero) === true && champVide(motDePasse) === true && champVide(typeCompte) === true) {
          // Je change le contenue de la bare de navigation
          nav.innerHTML = contenueBlocNavigation
          // Je change le contenue du side Bar
          sidebar.innerHTML = ""
          // Je change le contenu du bloc principale main correspondant a la page d’acceuil
          main.innerHTML = contenuPageAcceuil
          // Et je change également le contenu du bloc des scripts
          blocScripts.innerHTML =  contenuBlocScripts
        } 

    }
    
})

// ----------------------------------------------------------------------------------------------------------------------
// Je me mets a l’écoute de l’évenement click
document.addEventListener('click', function (event){
  let cible = event.target
  // Je recupere l’id de la cible du click
  let idCible = cible.getAttribute('id')
  // Je verifie la valeur de l’id de l’élément clické afin d’éxecuter des instructions correspondant
  switch (idCible) {
    // Si c’est le lien pour créer un nouveau compte
    case "lien-nouveau-compte":
      // Je reinitialise le comportement par défaut du lien clické
      event.preventDefault()
      // Je change le contenu de la pg et le remplace par le contenu de la pg pour choisir le type de compte a créer
      blocMere.innerHTML = pgChoixTypeCompte
      // Dans ce cas, je me mets a l’écoute des click pour le choix du type de compte par l’utilisateur
      document.addEventListener ("click", function (e) {
        // Je reinitialise le comportement par défaut de la cible
        e.preventDefault ();
        // Je recupere le lien cliqué
        let lienCible = e.target
        // Je verifie s’il s’agit de quel lien cliqué
        if (lienCible.id === "lien-compte-utilisateur") {
          // S’il s’agit du lien pour le compte utilisateur:
          // Je change le contenue du bloc mere par celui du formulaire pour l’enregistrement d’un compte utilisateur
          if (blocMere.innerHTML = formCompteUser1) {
            // Je met a l’écoute de l’évenement de soumission du formulaire
            document.addEventListener ("submit", function (e) {
              let formCible = e.target
              // Si l’utilisateur soumets le premier formulaire d’inscription
              if (formCible.id = "form-user1") {
                blocMere.innerHTML = "Vous avez soumis le formulaire d’inscription";
              }
            })
          }

        } else if (lienCible.id === "lien-compte-fournisseur") {
          // S’il s’agit du lien pour le compte fournisseur:
          // Je change le contenue du bloc mere par celui du formulaire pour l’enregistrement d’un compte fournisseur
          blocMere.innerHTML = formCompteFournisseur1;
        }
      } )
      break;
  
    default:
      break;
  }

})