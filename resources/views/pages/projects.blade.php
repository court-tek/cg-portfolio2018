@extends('layouts.main2')

@section('title')
  Projects
@endsection


@section('content')
<section id="projects">
    <div class="title"><!-- title container starts -->
      <div class="proj">
        <h1>Projects<h1>
      </div>
      <div class="squarez"></div>
    </div><!-- title container ends -->
    <div class="project-container">
      <div class="project-box one" style="background: url('https://raw.githubusercontent.com/court-tek/myWebFiles/master/ScreenshotDeIslandrice.jpg');
                                      background-repeat: no-repeat;
                                      background-position: top center;
                                      background-size: cover;">
        <div class="grey-bg">
          <div class="project-info"><!-- Project details start -->
            <div class="tech" style="padding-bottom:15px;font-weight:bold;"><br>
              Powered by:<br>
              <p>ReactJs, CSS3, JSX</p>
            </div>
            <div class="project-details">
              Type: Responsive Web Page
            </div>
            <div class="project-title">
              Island Rice Grill
            </div>
            <a href="https://islandricegrill.herokuapp.com/"><i class="fas fa-long-arrow-alt-right"></i></a>
          </div><!-- Project details ends -->
        </div>
      </div>

      <div class="project-box two" style="background: url('https://raw.githubusercontent.com/court-tek/myWebFiles/master/cpemail.png') center center;
                                    background-repeat: no-repeat;
                                    background-position: left center;
                                    background-size: cover;">
        <div class="grey-bg">
          <!-- Project details start -->
          <div class="project-info">
            <div class="tech" style="padding-bottom:15px;font-weight:bold;"><br>
              Powered by:<br>
              <p>HTML5, CSS3</p>
            </div>
            <div class="project-details">
                Type: Responsive HTML Email
            </div>
            <div class="project-title">
              Smart Watch Email
            </div>
            <a href="https://smart-watch-email.herokuapp.com/index.html"><i class="fas fa-long-arrow-alt-right"></i></a>
          </div>
          <!-- Project details start -->
        </div>
      </div>

      <div class="project-box three" style="background: url('https://raw.githubusercontent.com/court-tek/myWebFiles/master/goJobsDash.png') center center;
                                      background-repeat: no-repeat;
                                      background-position: left center;
                                      background-size: cover;">
        <div class="grey-bg">
          <div class="project-info"><!-- Project details start -->
            <div class="tech" style="padding-bottom:15px;font-weight:bold;"><br>
              Powered by:<br>
              <p>HTML5, Sass, jQuery</p>
            </div>
            <div class="project-details">
                Type: Responsive Web Page
            </div>
            <div class="project-title">
              GoJobs Dashboard
            </div>
            <a href="https://dashboardp.herokuapp.com/"><i class="fas fa-long-arrow-alt-right"></i></a>
          </div><!-- Project details ends -->
        </div>
      </div>

      <div class="project-box four" style="background: url('https://raw.githubusercontent.com/court-tek/myWebFiles/master/shopbeastImg.png') no-repeat center center;
                                      background-repeat: no-repeat;
                                      background-position: top center;
                                      background-size: cover;">

        <div class="grey-bg">
          <div class="project-info"><!-- Project details start -->
            <div class="tech" style="padding-bottom:15px;font-weight:bold;"><br>
              Powered by:<br>
              <p>HTML5, CSS3</p>
            </div>
            <div class="project-details">
              Type: Responsive HTML Email
            </div>
            <div class="project-title">
              Shopbeast
            </div>
            <a href="https://shopbeast.herokuapp.com/index.html"><i class="fas fa-long-arrow-alt-right"></i></a>
          </div><!-- Project details ends -->
        </div>
      </div>

      <div class="project-box five" style="background: url('https://raw.githubusercontent.com/court-tek/myWebFiles/master/tekashiScreen2.png') no-repeat center center;
                                      background-repeat: no-repeat;
                                      background-position: top center;
                                      background-size: cover;">
        <div class="grey-bg">
          <div class="project-info"><!-- Project details start -->
            <div class="tech" style="padding-bottom:15px;font-weight:bold;"><br>
              Powered by:<br>
              <p>HTML5, Sass</p>
            </div>
            <div class="project-details">
              Type: Responsive Web Page
            </div>
            <div class="project-title">
              Tekashi 69 Music Site
            </div>
            <a href="https://tekashisite.herokuapp.com/"><i class="fas fa-long-arrow-alt-right"></i></a>
          </div><!-- Project details ends -->
        </div>
      </div>

      <div class="project-box six" style="background: url('https://raw.githubusercontent.com/court-tek/myWebFiles/master/projectImage.png') no-repeat center center;
                                          background-repeat: no-repeat;
                                          background-position: left center;
                                          background-size: cover;">
        <div class="grey-bg">
          <div class="project-info"><!-- Project details start -->
            <div class="tech" style="padding-bottom:15px;font-weight:bold;"><br>
              Powered by:<br>
              <p>ReactJs, Sass, JSX</p>
            </div>
            <div class="project-details">
              Responsive Web Page
            </div>
            <div class="project-title">
              Real Estate Web App
            </div>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
          <a href="https://abodeapp.herokuapp.com/"><i class="fas fa-long-arrow-alt-right"></i></a>
          <!-- Project details ends -->
        </div>
      </div>
    </div>
    </div>
</section>
@endsection
