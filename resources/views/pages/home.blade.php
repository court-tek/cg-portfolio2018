@extends('layouts.main')

@section('title')
  Courtney Girley - Web Developer / Frontend Developer/ PHP
@endsection


@section('content')
  <section id="home" class="row">
    <div class="flex-center position-ref full-height">
        @if (Route::has('login'))
            <div class="top-right links">
                @auth
                    <a href="{{ url('/home') }}">Home</a>
                @else
                    <a href="{{ route('login') }}">Login</a>

                    @if (Route::has('register'))
                        <a href="{{ route('register') }}">Register</a>
                    @endif
                @endauth
            </div>
        @endif

        <div class="content">
            <div class="title m-b-md">
                Courtney Girley
            </div>
            <div class="demo"></div>
            <div class="links">

            </div>
        </div>
    </div>
  </section>
@endsection
