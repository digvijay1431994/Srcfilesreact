// import React from 'react'
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
function Admin_login() {
    const redirect=useNavigate();

    useEffect(()=>{
        if((localStorage.getItem('aid')))
        {
            redirect('/dashboard');
        }
    })

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {

        var result = true;
        if (formvalue.email == "") {
            toast.error('email Field is required !');
            result = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error('password Field is required !');
            result = false;
            return false;
        }

        return result;
    }


    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                      
                        // session create
                        localStorage.setItem('aid',res.data[0].id);
                        localStorage.setItem('aname',res.data[0].name);
                    
                        redirect('/dashboard');
                        toast.success("Login Suucees!");
                }
                else {
                    toast.error("Password incorrect !");
                }
            }
            else {
                toast.error("Email does not exist !");
            }
        }
    }

    return (
        <>
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

                </nav>
            </div>
            {/* Navbar End */}
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{ marginBottom: 90 }}>
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4">Admin Login</h3>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="far fa-circle px-3" />
                        <p className="m-0">Admin Login</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Contact Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <iframe className="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Admin Login</h6>
                                <h1 className="mb-4">Admin Login</h1>
                                <div id="success" />
                                <form  id="contactForm"action="" method="post" onSubmit={submitHandel}>
                                    <div className="form-row">

                                        <div className="col-sm-6 control-group">
                                            <input type="email" className="form-control border-0 p-4" id="email" name="email"value={formvalue.email} onChange={changehandel}placeholder="Your Email" />
                                            <p className="help-blocktext-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control border-0 p-4" id="password" name="password" value={formvalue.password} onChange={changehandel} placeholder="Password" />
                                        <p className="help-block text-danger" />
                                    </div>

                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">
                                            Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
             {/* Footer Start */}
             <div className="container-fluid footer bg-light py-5" style={{ marginTop: 90 }}>
                <div className="container text-center py-5">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <a href="index.html" className="navbar-brand m-0">
                                <h1 className="m-0 mt-n2 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                            </a>
                        </div>
                        <div className="col-12 mb-4">
                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-outline-secondary btn-social" href="#"><i className="fab fa-instagram" /></a>
                        </div>
                        <div className="col-12 mt-2 mb-4">
                            <div className="row">
                                <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                                    <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                                    <p className="mb-2">123 Street, New Delhi, India</p>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                                <div className="col-sm-6 text-center text-sm-left">
                                    <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                                    <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                                    <p className="mb-0">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className="m-0">© <a href="#">Domain</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>

    )
}

export default Admin_login