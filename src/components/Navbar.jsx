import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    let name = localStorage.getItem("name");
    let date = new Date().getTime();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-uppercase text-warning text-center" to="/home"><strong className="ms-auto">Currency Exchange Rate
                    </strong>
                    </Link>
                    <Link to="/" className="navbar-brand text-uppercase text-warning text-center" onClick={localStorage.clear()}><div className="form-inline text-warning" style={{ cursor: "pointer", textDecoration: "none" }}><strong> Exit</strong></div>
                    </Link></div>
            </nav>
        </div>
    )
}

export default Navbar;
