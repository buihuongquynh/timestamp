<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
  <link rel="stylesheet" type="text/css" href="/css/style.css">
  <meta name="_token" content="{{csrf_token()}}" />
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('css/style.css') }}">
	<link rel="stylesheet" href="{{ asset('css/bootstrap-datetimepicker.min.css') }}">

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
  <script src="https://codepen.io/mimikos/pen/GvpJYQ.js"></script>
  <script src="https://codepen.io/mimikos/pen/rzOOgG.js"></script>
<script>
    window.Laravel = {!! json_encode(['csrfToken' => csrf_token()]) !!};
</script>
</head>

<body class="">
  <div class="">
    <div id="header">

      <nav class="navbar navbar-expand-sm   navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/works">日次勤怠</a>
            </li>
            <li class="nav-item dropdown dmenu">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Our Service
              </a>
              <div class="dropdown-menu sm-menu">
                <a class="dropdown-item" href="#">service2</a>
                <a class="dropdown-item" href="#">service 2</a>
                <a class="dropdown-item" href="#">service 3</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Call</a>
            </li>

          </ul>
          <a href="/00abloginuser/logout"><button type="button" class="btn btn-outline-secondary">Logout</button></a>

          <div class="social-part">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
    </div>
    <div id="app">
        <!-- Sử dụng component Example.vue -->
    @yield('content')
    </div>
    <footer class="text-center text-lg-start text-dark" style="background-color: #ECEFF1">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-between p-4 text-white">
        <!-- Left -->

        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold">Company name</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Products</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
              <p>
                <a href="#!" class="text-dark">MDBootstrap</a>
              </p>
              <p>
                <a href="#!" class="text-dark">MDWordPress</a>
              </p>
              <p>
                <a href="#!" class="text-dark">BrandFlow</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Bootstrap Angular</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Useful links</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
              <p>
                <a href="#!" class="text-dark">Your Account</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Shipping Rates</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Help</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
              <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
      <!-- Scripts -->
      <script src="{{ asset('js/app.js') }}" defer></script>
      <script src="{{ asset('js/jquery.min.js') }}"></script>
      <script src="{{ asset('js/popper.js') }}"></script>
      <script src="{{ asset('js/bootstrap.min.js') }}"></script>
      <script src="{{ asset('js/moment-with-locales.min.js') }}"></script>
      <script src="{{ asset('js/bootstrap-datetimepicker.min.js') }}"></script>
      <script src="{{ asset('js/mains.js') }}"></script>
      <script src="{{ asset('js/main.js') }}"></script>
  </body>

</html>