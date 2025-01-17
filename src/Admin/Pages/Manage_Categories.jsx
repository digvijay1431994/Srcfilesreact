import React, { useEffect, useState } from 'react'
import AHeader from '../Component/Aheader'
import axios from 'axios';

function Manage_Categories() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch();
    });
    const fetch =async () =>{
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setData(res.data);
    }
  return (
    <div>
        <AHeader title="Manage_Categories" />
       < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                                <h1 className="mb-4">Manage Categories</h1>
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

    </div>
  )
}

export default Manage_Categories
