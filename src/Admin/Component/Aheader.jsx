import React, {useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AHeader({title}) {

    const redirect=useNavigate();
    
    useEffect(()=>{
        if(!(localStorage.getItem('aid')))
        {
            redirect('/admin-login');
        }
    })


    const adminlogout=()=>{
        localStorage.removeItem('aid');
        localStorage.removeItem('aname');
        toast.success('Logout Success');
        redirect('/admin-login');
    }


    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-primary py-3 d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white pr-3" href>FAQs</a>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href>Help</a>
                                <span className="text-white">|</span>
                                <a className="text-white pl-3" href>Support</a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white px-3" href>
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="text-white px-3" href>
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="text-white px-3" href>
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a className="text-white px-3" href>
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="text-white pl-3" href>
                                    <i className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand ml-lg-3">
                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav m-auto py-0">
                            
                            <NavLink to="dashboard" className="nav-item nav-link">Dashboard</NavLink>
                           
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Categories</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/add_categories" className="dropdown-item">Add Categories</NavLink>
                                    <NavLink to="/manage_categories" className="dropdown-item">Manage Categories</NavLink>   
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Services</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/add_services" className="dropdown-item">Add Services</NavLink>
                                    <NavLink to="/manage_services" className="dropdown-item">Manage Services</NavLink>   
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/add_blog" className="dropdown-item">Add Blog</NavLink>
                                    <NavLink to="/manage_blog" className="dropdown-item">Manage Blog</NavLink>   
                                </div>
                            </div>

                            <NavLink to="/manage_contact" className="nav-item nav-link">Contact</NavLink>
                            <NavLink to="/manage_customer" className="nav-item nav-link">Customer</NavLink>
                            {(
                                () => {
                                    if (localStorage.getItem('aid')) {
                                        return (
                                            <NavLink to="/aprofile" className="nav-item nav-link">Hi .. {localStorage.getItem('aname')}</NavLink>
                                        )
                                    }
                                }

                            )()}
                            
                        </div>
                        <a to="javascript:void(0)" onClick={adminlogout} className="btn btn-primary d-none d-lg-block">Logout</a>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{ marginBottom: 90 }}>
            <img className="position-absolute w-100 h-100" src="website/img/header.jpg" style={{ objectFit: 'cover' }} />
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4">{title}</h3>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="far fa-circle px-3" />
                        <p className="m-0">{title}</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </div>

    )
}

export default AHeader