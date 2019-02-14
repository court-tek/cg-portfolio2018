@extends('layouts.main')

@section('title')
  Courtney Girley - Web Developer / PHP
@endsection

@section('content')
  <section class="info-section">
    <div class="logo"><h3>CG</h3></div>
    <div class="info-box">
      <h4>Email</h4>
      <p>cdgirley@gmail.com</p>
      <h4>Phone:</h4>
      <p>(757) 524-1468</p>
    </div>
  </section>
  <section class="content-area">
    <div class="profile-section">
      <div class="profile">
        <h1>
          Courtney <br>
          <span>Girley</span></h1>
          <h5>Web Developer</h5>
          <div class="primary-btn">
            <a href="{{ route('projects') }}" class="project-anchor">Projects</a>
          </div>
          <div class="ghost-btn">
            <a href="{{ route('bio') }}">Short Bio</a>
          </div>
      </div>
  </div>
  </section>
@endsection
