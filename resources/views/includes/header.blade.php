<header id="head">
  <div class="menu-btn">
    <div class="hamburger">

    </div>
  </div>

  <nav id="menu2" class="menu">
    {{-- Top --}}
    <div  class="menu-branding">
      <div class="portrait">
      </div>
    </div>
    {{-- Top ends --}}
    {{-- Bottom --}}
    <ul id="other">
      <li><a href="{{ route('home') }}" class="nav-link">Home</a></li>
      <li><a href="{{ route('skills') }}" class="nav-link">Skills</a></li>
      <li><a href="{{ route('projects') }}" class="nav-link">Projects</a></li>
      <li><a href="{{ route('experience') }}" class="nav-link">Experience</a></li>
    </ul>
    {{-- Bottom ends --}}
  </nav>
</header>
