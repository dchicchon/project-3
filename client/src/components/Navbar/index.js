import React from 'react';



export default function NavBar(props) {

  return (
    <div>

      <nav>
        <div className="nav-wrapper blue">
          <a href="/feed" className="brand-logo">TripIt</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/discover">Discover</a></li>
            <li><a href="/" onClick={this.props.logout}>Logout</a></li>
            {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li> */}
          </ul>
        </div>
      </nav>

    </div >
  );
}
