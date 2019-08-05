import React from 'react';
import { Link } from 'react-router-dom'
// import Profile from '../../pages/Profile';
// import { userInfo } from 'os';

function NavBar(props) {
  return (
    <div>
      <div className = "navbar-fixed">
      <nav>
        <div className="nav-wrapper blue">
            <Link className="brand-logo" to='/'>
              TripIt
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/profile">
                {props.firstName}'s Profile
              </Link>
            </li>
            <li>
              <Link to="/">
                Feed
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
      </div>
    </div >
  )
}

export default NavBar