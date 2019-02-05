@php
  $location = $_SERVER["REQUEST_URI"];
@endphp
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
        <!-- Fonts -->
        <link hrref="https://fonts.googleapis.com/css?family=Montserrat:100,300,400,600,700,900" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        @yield('styles')
    </head>
    <body>
      @include('includes.nav')
      @include('includes.header')
        <div class="wrapper1">
              @yield('content')
        </div>
        @include('includes.footer')
        @include('includes.awesomeSauce')
        <script src="{{ mix('js/gloaming.js') }}" ></script>
    </body>
</html>
