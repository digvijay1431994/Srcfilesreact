import React, { useEffect, useState } from 'react'
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const redirect=useNavigate();

    const [data, setData] = useState({});
    
    useEffect(() => {
        if(localStorage.getItem('uid'))
        {
            fetch();
        }
        else
        {
            redirect('/');           
        }
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
        console.log(res.data);
        setData(res.data)
    }
    
  return (
    <>
       <Header1 title="View Profile" />
            <div>

                {/* Open Hours Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row mb-5">
                            <div className="col-lg-4" style={{ minHeight: "200px" }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100" src={data.img} style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-8 pt-5 pb-lg-5">
                                <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">

                                    <h1 className="mb-4">{data.name}</h1>
                                    <p>{data.email}</p>
                                    <p>{data.mobile}</p>
                                    <a href className="btn btn-primary mt-2">Edit Frofile</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Open Hours End */}
            </div>

<Footer/>
    </>
  )
}

export default Profile
