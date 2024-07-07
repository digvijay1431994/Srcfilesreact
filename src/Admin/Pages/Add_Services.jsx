import React from 'react'
import AHeader from '../Component/Aheader'


function Add_Services() {
  return (
    <div>
       <AHeader title="Add Services"/>
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Add Services</h1>
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <select className="form-control border-0" name="cate_id" placeholder="Services Name" required="required" data-validation-required-message="Please enter Service name">
                                                <option value="" selected>-------- Select Categories ---------</option>
                                            </select>    
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" name="name" placeholder="Services Name" required="required" data-validation-required-message="Please enter Service name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4" name="ser_img" placeholder="Service Image" required="required" data-validation-required-message="Please Enter Service Image" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" name="main_price" placeholder="Main Price" required="required" data-validation-required-message="Please Main Price" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" name="dis_price" placeholder="Discounted Price" required="required" data-validation-required-message="Please Discounted Price" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" name="desc" rows={3} id="message" placeholder="Service Description" required="required" data-validation-required-message="Please enter Service Description" defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
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
                                    <p className="mb-2">123 Street, New York, USA</p>
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
    </div>
  )
}

export default Add_Services
