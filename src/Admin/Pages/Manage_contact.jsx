import React from 'react'
import AHeader from '../Component/Aheader'
import axios from 'axios'

function Manage_contact() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch();
    });
    const fetch =async () =>{
        const res = await axios.get(`http://localhost:3000/contact`);
        console.log(res.data);
        setData(res.data);
    }
  return (
    <div>
        <AHeader title="Manage Contact"/>
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                                <h1 className="mb-4">Manage Contact</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                            <td>
                                                <button className='btn btn-info mr-2'>Edit</button>
                                                <button className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>

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

export default Manage_contact
