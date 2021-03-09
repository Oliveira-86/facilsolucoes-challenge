import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as ImgNav } from '../../assets/images/logo.svg';
import { getAccessTokenDecoded, logout } from '../../utils/OAuth';
import './style.scss';


const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    },[location]);

    
    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }
    
    return (

        <nav className="row bg-primary main-nav">
            <div className="col-2 row nav-logo">
                <Link to="/" >
                    <ImgNav />
                </Link>
            </div>
            <div className="col-9">
                {currentUser && (
                    <>
                        <div className="main-menu">
                        {currentUser}
                        
                            <a  href="#" 
                                className="nav-button ml-3" 
                                onClick={handleLogout}    
                            >
                                Logout
                            </a>
                        </div>
                    </>
                )}
                {!currentUser && (
                    <Link to="/admin" className="main-menu" >
                        <button className="nav-button">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;