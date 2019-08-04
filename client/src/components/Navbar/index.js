import React from 'react';



export default function NavBar(props) {

  return (
    <div>

      <nav>
        <div class="nav-wrapper blue">
          <a href="/feed" class="brand-logo">TripIt</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="/feed">Friends Feed</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/discover">Discover</a></li>
            <li><a href="/login">Logout</a></li>
            {/* <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li> */}
          </ul>
        </div>
      </nav>

    </div >
  );
}
