import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                {/* <div className="nav-header">
                    <Link to="/">
                        HotelDeluxe
                    </Link>
                </div> */}
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Gallery</Link>
                        </li>
                    </ul>
            </div>
        </nav>
    )
}
