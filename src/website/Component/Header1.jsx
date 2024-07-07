import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header1({ title }) {
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('uname');
    toast.success('Logout Success');
    navigate('/');
  };

  const uid = localStorage.getItem('uid');
  const uname = localStorage.getItem('uname');

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-primary py-3 d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-white pr-3" href="#faqs">FAQs</a>
                <span className="text-white">|</span>
                <a className="text-white px-3" href="#help">Help</a>
                <span className="text-white">|</span>
                <a className="text-white pl-3" href="#support">Support</a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-white px-3" href="#facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="text-white px-3" href="#twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a className="text-white px-3" href="#linkedin">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="text-white px-3" href="#instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a className="text-white pl-3" href="#youtube">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
            <NavLink to="/" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary">
                <span className="text-secondary">i</span>CREAM
              </h1>
            </NavLink>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav ml-auto py-0">
                <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <NavLink to="/product" className="nav-item nav-link">Product</NavLink>
              </div>
              <NavLink to="/" className="navbar-brand mx-5 d-none d-lg-block">
                <h1 className="m-0 display-4 text-primary">
                  <span className="text-secondary">i</span>CREAM
                </h1>
              </NavLink>
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                <NavLink to="/gallery" className="nav-item nav-link">Gallery</NavLink>
                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                {uid && (
                  <NavLink to="/profile" className="nav-item nav-link">
                    Hi .. {uname}
                  </NavLink>
                )}
              </div>
              {uid ? (
                <button onClick={userLogout} className="btn btn-primary d-none d-lg-block">Logout</button>
              ) : (
                <NavLink to="/login" className="btn btn-primary d-none d-lg-block">Login</NavLink>
              )}
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{ marginBottom: 90 }}>
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">{title}</h3>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0"><NavLink className="text-white" to="/">Home</NavLink></p>
            <i className="far fa-circle px-3" />
            <p className="m-0">{title}</p>
          </div>
        </div>
      </div>
      {/* Header End */}
    </div>
  );
}

export default Header1;
