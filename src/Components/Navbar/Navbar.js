import React from 'react';
import './Navbar.css';
import navbarData from '../../data/navbarData';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                        {
                            navbarData.map(data =>
                                <li key={data.id} className="nav-item">
                                    <a className="nav-link" href="/">{data.item}</a>
                                </li>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;