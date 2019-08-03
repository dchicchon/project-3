import React from 'react';
import { Link } from 'react-router-dom'
// import Profile from '../../pages/Profile';
// import { userInfo } from 'os';

function NavBar(props) {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
          <a href="/feed" className="brand-logo">TripIt</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link to='/discover'>
                Discover
            </Link>
            </li>

            <li>
              <a onClick={props.logout}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div >
  )
}

export default NavBar