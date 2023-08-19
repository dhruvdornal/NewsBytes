// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// export default class NavBar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className='navbar fixed-top navbar-expand-lg bg-dark'>
//         <div className="container-fluid">
//     <Link className="navbar-brand text-light" to="/">NewsBytes</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//         </li>
//         <li className="nav-item dropdown">
//           <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Category
//           </Link>
//           <ul className="dropdown-menu text-light">
//             <li><Link className="dropdown-item" to="/business">Business</Link></li>
//             <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
//             <li><Link className="dropdown-item" to="/general">General</Link></li>
//             <li><Link className="dropdown-item" to="/health">Health</Link></li>
//             <li><Link className="dropdown-item" to="/science">Science</Link></li>
//             <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
//             <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
//           </ul>
//         </li> 

//       </ul>
//     </div>
//   </div>
// </nav>
//       </div>
//     )
//   }
// }


import React from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";



const NavBar = (setDarkMode) => {
  let location = useLocation();
  useEffect(()=>{

  },[location])

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsBytes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/business"? "active":""}`} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/entertainment"? "active":""}`} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/general"? "active":""}`} to="/general">General</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/health"? "active":""}`} to="/health">Health</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/science"? "active":""}`} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/sports"? "active":""}`} to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname==="/technology"? "active":""}`} to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar