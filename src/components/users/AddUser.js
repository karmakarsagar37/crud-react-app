import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddUser=()=>{
    let navigate= useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name, username, email, phone, website} = user;
    const onInputChange= e=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(e.target.value);
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        navigate("/");

    }
    return (
        <div className='container d-flex justify-content-center shadow rounded mx-auto mt-5 p-5 bg-info'>
            <form onSubmit={e =>{onSubmit(e)}}>
                <div class="form-group m-2">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control form-control-lg"
                        placeholder='Enter Your Name'
                        name='name'
                        value={name}
                        onChange={e=>{onInputChange(e)}}
                        />
                </div>
                <div class="form-group m-2">
                    <label class="form-label">Username</label>
                    <input type="text" class="form-control form-control-lg"
                        placeholder='Enter Your UserName'
                        name='username'
                        value={username}
                        onChange={e=>{onInputChange(e)}}
                        />
                </div>
                <div class="form-group m-2">
                    <label class="form-label">E-mail</label>
                    <input type="email" class="form-control form-control-lg"
                        placeholder='Enter Your Email'
                        name='email'
                        value={email}
                        onChange={e=>{onInputChange(e)}}
                        />
                </div>
                <div class="form-group m-2">
                    <label class="form-label">Phone</label>
                    <input type="number" class="form-control form-control-lg"
                        placeholder='Enter Your Phone Number'
                        name='phone'
                        value={phone}
                        onChange={e=>{onInputChange(e)}}
                        />
                </div>
                <div class="form-group m-2">
                    <label class="form-label">Website</label>
                    <input type="text" class="form-control form-control-lg"
                        placeholder='Enter Your Website Link'
                        name='website'
                        value={website}
                        onChange={e=>{onInputChange(e)}}
                        />
                </div>
                <button type="submit" class="btn btn-primary d-flex justify-content-center">Submit</button>
            </form>
        </div>
    )
}
 export default AddUser;