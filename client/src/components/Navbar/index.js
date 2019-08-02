import React from 'react';



export default function NavBar(props) {

  return (
    <div>
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
      <nav>
        <div class="nav-wrapper blue">
          <a href="#!" class="brand-logo">TripIt</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Profile</a></li>
            <li><a href="badges.html">Discover</a></li>
            {/* <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li> */}
          </ul>
        </div>
      </nav>

    </div >
  );
}
