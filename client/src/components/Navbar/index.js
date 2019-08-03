import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
          <a href="/feed" className="brand-logo">TripIt</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/discover">Discover</a></li>
            <li>
              <a onClick={props.logout}>Logout</a>
              {/* <Link onClick={this.props.logout}>Logout</Link> */}
            </li>
            {/* <li><a>Logout</a></li> */}

            {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li> */}
          </ul>
        </div>
      </nav>
    </div >
  )
}

export default NavBar


// export default function NavBar(props) {

//   return (
//     <div>

//       <nav>
//         <div className="nav-wrapper blue">
//           <a href="/feed" className="brand-logo">TripIt</a>
//           <ul className="right hide-on-med-and-down">
//             <li><a href="/profile">Profile</a></li>
//             <li><a href="/discover">Discover</a></li>
//             <li>
//               <a onClick={this.props.logout}>Logout</a>
//               {/* <Link onClick={this.props.logout}>Logout</Link> */}
//             </li>
//             {/* <li><a>Logout</a></li> */}

//             {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li> */}
//           </ul>
//         </div>
//       </nav>

//     </div >
//   );
// }
