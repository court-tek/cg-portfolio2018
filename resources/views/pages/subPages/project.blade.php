@extends('layouts.main2')

@section('title') Experience
@endsection


@section('content')
    <section id="portfolio-projects">
      <div class="container">
        <div class="project-image">
          <div class="img" style="border: 5px #fff solid; background: url('https://raw.githubusercontent.com/court-tek/myWebFiles/master/testImage6.0.gif')"></div>
        </div>
        <h1 class="project-name">Nike Project</h1>
        <div class="info">
          <div class="buttons">
            <a href="#"><i class="fas fa-code"></i>View Code</a>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="technologies">
          <h3>Technologies</h3>

          <div class="icons">
              <div class="icon icon1">

              </div>
              <div class="icon icon2">

              </div>
              <div class="icon icon3">

              </div>
              <div class="icon icon4">

              </div>
          </div>
        </div>
        {{-- <div class="video">
          <h3>Video Walkthrough</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div> --}}
      </div>
    </section>
    @endsection
