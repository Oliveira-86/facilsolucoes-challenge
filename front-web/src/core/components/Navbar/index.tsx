import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ImgNav } from '../../assets/images/logo.svg';
import './style.scss';


const Navbar = () => (

    <nav className="row bg-primary main-nav">
        <div className="col-2 row nav-logo">
            <Link to="/" >
              <ImgNav />
            </Link>
        </div>
        <div className="col-9">
            <Link to="/admin" className="main-menu" >
                <button className="nav-button">
                    Login
                </button>
            </Link>
        </div>
    </nav>
);

export default Navbar;