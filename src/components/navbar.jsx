import React from 'react';
// import React, { Component } from 'react';

// class NavBar extends Component {
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                 <a href="#" className="navbar-brand">Navbar
//                     &nbsp;
//                     <span className="badge badge-info">
//                         {this.props.totalCounter}
//                     </span>
//                 </a>
//             </nav>
//          );
//     }
// }

// export default NavBar;

// Stateless functional components
const NavBar = ({totalCounter}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">Navbar
                &nbsp;
                <span className="badge badge-info">
                    {totalCounter}
                </span>
            </a>
        </nav> 
    );
}
 
 
export default NavBar;