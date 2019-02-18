@extends('layouts.main2')

@section('title')
  Welcome To My Portfolio
@endsection


@section('content')
  <section id="portfolio-section" class="row">
    <!-- title container starts -->
    <div class="myContainer">
      <!-- title container ends -->
      <div class="title">
        <div class="proj">
          <h1>Projects<h1>
        </div>
        <div class="squarez"></div>
      </div>
      <!-- title container ends -->
      <!-- portfolio container starts -->
      <div class="portfolio-container">
        <a href="https://ancient-bayou-25827.herokuapp.com/" class="box image1">
          <div class="image">
            <!-- color background starts -->
              <div class="grey-bg">
                <!-- Project details start -->
                <div class="project-info">
                  <div class="tech" style=""><br>
                    Powered by:<br>
                    <p>React, Redux, CSS3, JSX</p>
                  </div>
                  <div class="project-details">
                    Type: Responsive Web Page
                  </div>
                  <div class="project-title">
                    Island Rice Grill
                  </div>
                </div>
                <!-- Project details ends -->
              </div>
            <!-- color background ends -->
         </div>
        </a>
        <a href="{{ route('info', ['id' => 1]) }}" class="box image2">
          <div class="image">
            <!-- color background starts -->
              <div class="grey-bg">
                <!-- Project details start -->
                <div class="project-info">
                  <div class="tech" style=""><br>
                    Powered by:<br>
                    <p>HTML5, CSS3</p>
                  </div>
                  <div class="project-details">
                      Type: Responsive HTML Email
                  </div>
                  <div class="project-title">
                    Smart Watch Email
                  </div>
                </div>
                <!-- Project details ends -->
              </div>
            <!-- color background ends -->
         </div>
        </a>
        <a href="{{ route('info', ['id' => 2]) }}" class="box image3">
          <div class="image">
            <!-- color background starts -->
              <div class="grey-bg">
                <!-- Project details start -->
                <div class="project-info">
                  <div class="tech" style=""><br>
                    Powered by:<br>
                    <p>HTML5, CSS3</p>
                  </div>
                  <div class="project-details">
                      Type: Responsive HTML Email <br>
                      Test: Litmus
                  </div>
                  <div class="project-title">
                    Outback Gift Card
                  </div>
                </div>
                <!-- Project details ends -->
              </div>
            <!-- color background ends -->
         </div>
        </a>
        <a href="{{ route('info', ['id' => 3]) }}" class="box image4">
          <div class="image">
            <!-- color background starts -->
              <div class="grey-bg">
                <!-- Project details start -->
                <div class="project-info">
                  <div class="tech" style=""><br>
                    Powered by:<br>
                    <p>HTML5, CSS3</p>
                  </div>
                  <div class="project-details">
                    Type: Responsive HTML Email
                  </div>
                  <div class="project-title">
                    Shopbeast
                  </div>
                </div>
                <!-- Project details ends -->
              </div>
            <!-- color background ends -->
         </div>
        </a>
        <a href="https://tekashisite.herokuapp.com/" class="box image5">
          <div class="image">
            <!-- color background starts -->
              <div class="grey-bg">
                <!-- Project details start -->
                <div class="project-info">
                  <div class="tech" style=""><br>
                    Powered by:<br>
                    <p>HTML5, Sass</p>
                  </div>
                  <div class="project-details">
                    Type: Responsive Web Page
                  </div>
                  <div class="project-title">
                    Tekashi 69 Music Site
                  </div>
                </div>
                <!-- Project details ends -->
              </div>
            <!-- color background ends -->
         </div>
        </a>
        <a href="{{ route('info', ['id' => 4]) }}" class="box image6">
          <div class="image">
            <!-- color background starts -->
              <div class="grey-bg">
                <!-- Project details start -->
                <div class="project-info">
                  <div class="tech" style=""><br>
                    Powered by:<br>
                    <p>HTML5, CSS3</p>
                  </div>
                  <div class="project-details">
                      Type: Responsive HTML Email <br>
                      Test: Litmus
                  </div>
                  <div class="project-title">
                    Outback Gift Card
                  </div>
                </div>
                <!-- Project details ends -->
              </div>
            <!-- color background ends -->
         </div>
        </a>
      </div>
      <!-- portfoli container ends -->
    </div>
    <!-- myContainer ends here -->
  </section>
@endsection
