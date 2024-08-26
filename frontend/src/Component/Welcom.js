import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Ensure this has necessary custom styles
import { FaBox, FaPlusCircle, FaChartBar } from 'react-icons/fa';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="welcome">
                <header className="bg-gradient-primary text-white text-center py-5">
                    <div className="container">
                        <h1 className="display-3 font-weight-bold">Welcome to the Inventory Management System</h1>
                        <p className="lead mb-4">Efficiently manage your inventory with style and ease.</p>
                        <Link to="/signin" className="btn btn-lg btn-outline-light custom-btn mr-3 px-5">Sign In</Link>
                        <Link to="/signup" className="btn btn-lg btn-outline-light custom-btn px-5">Sign Up</Link>
                    </div>
                </header>

                <main className="container text-center my-5">
                    <h2 className="mb-5 text-uppercase">Features</h2>
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <div className="card shadow-lg feature-card border-0">
                                <div className="card-body">
                                    <FaBox className="feature-icon mb-3 text-primary" />
                                    <h5 className="card-title mt-3 font-weight-bold">Track Inventory</h5>
                                    <p className="card-text">Monitor and manage your inventory levels with ease.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card shadow-lg feature-card border-0">
                                <div className="card-body">
                                    <FaPlusCircle className="feature-icon mb-3 text-success" />
                                    <h5 className="card-title mt-3 font-weight-bold">Add New Items</h5>
                                    <p className="card-text">Quickly add new items to your inventory.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card shadow-lg feature-card border-0">
                                <div className="card-body">
                                    <FaChartBar className="feature-icon mb-3 text-warning" />
                                    <h5 className="card-title mt-3 font-weight-bold">Generate Reports</h5>
                                    <p className="card-text">Create detailed reports to analyze your inventory.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="bg-dark text-white text-center py-4">
                    <p>&copy; 2024 Inventory Management System. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default Welcome;
