import React from 'react';
import Table from './Table';
// import { Link } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom';
function Dashboard() {
   
    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="" // Correct path for the image
                            alt="Logo"
                            style={{ width: '150px', height: 'auto' }}
                        />
                    </a>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ width: '500px' }}
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="offcanvas offcanvas-end text-bg-dark"
                        tabIndex="-1"
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                Dark offcanvas
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                               
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Inventory
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li>
                                          <Link to="/inventory" >  <button className="dropdown-item" >
                                                Create Inventory
                                            </button></Link>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Check Stock Level
                                            </a>
                                        </li>
                                      
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Reports
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Transaction History
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <br />
            <br />
            <br />
            <br />
            <Table/>
        </>
    );
}

export default Dashboard;
