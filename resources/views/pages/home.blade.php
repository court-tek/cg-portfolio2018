@extends('layouts.main')

@section('title')
  Courtney Girley - Web Developer / Frontend Developer / PHP
@endsection

@section('content')
  <section id="home" class="row">
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="title m-b-md">
              <span class="fname name">You</span><span class="lname name">Girley</span>
            </div>
            <div id="test"></div>
            <div class="links">
              <a href="{{ route('about') }}">Short Bio</a>
            </div>
        </div>
    </div>
  </section>
@endsection
