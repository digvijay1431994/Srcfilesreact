import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header1 from '../Component/Header1'
import axios from 'axios'
import { toast } from 'react-toastify'

function Signup() {

 const redirect=useNavigate();

    useEffect(()=>{
        if((localStorage.getItem('uid')))
        {
            redirect('/');
        }
    })

    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        img: ""
    })


    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {

        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !');
            result = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error('password Field is required !');
            result = false;
            return false;
        }
        if (formvalue.mobile == "") {
            toast.error('mobile Field is required !');
            result = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('Image Field is required !');
            result = false;
            return false;
        }
        return result;
    }


    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/user`, formvalue);
            setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "", img: "" });
            toast.success('Signup Success');
            return false;
        }
    }


  return (
    <>
    <Header1 title="Signup Here" />

    {/* Contact Start */}
    < div className="container-fluid py-5" >
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6" style={{ minHeight: 500 }}>
                    <div className="position-relative h-100">
                        <iframe className="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                        <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Signup</h6>
                        <h1 className="mb-4">Signup Here</h1>

                        <form id="contactForm" method='post' onSubmit={submitHandel}>
                            <div className="form-row">
                                <div className="col-sm-12 control-group">
                                    <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control border-0 p-4" name="name" id="name" placeholder="Your Name" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="col-sm-12 control-group">
                                    <input type="email" value={formvalue.email} onChange={changeHandel} className="form-control border-0 p-4" name="email" id="email" placeholder="Your Email" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="col-sm-12 control-group">
                                    <input type="text" value={formvalue.password} onChange={changeHandel} className="form-control border-0 p-4" name="password" id="password" placeholder="Your Password" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="col-sm-12 control-group">
                                    <input type="number" value={formvalue.mobile} onChange={changeHandel} className="form-control border-0 p-4" name="mobile" id="mobile" placeholder="Your Mobile" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="col-sm-12 control-group">
                                    <input type="url" value={formvalue.img} onChange={changeHandel} className="form-control border-0 p-4" name="img" id="img" placeholder="Your Image" />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Signup</button>
                                <Link to='/login' className='float-right'>If you already registered then Login Here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div >
    {/* Contact End */}
        <Footer/>    
    </>
  )
}

export default Signup
