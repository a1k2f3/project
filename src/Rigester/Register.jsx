import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
const Register = () => {
    const navigate=useNavigate();
    const [name, setName] = useState('');
    const [contact, setcontact] = useState(null);
    const [email, setEmail] = useState('');
    const [Password, setPasswoord] = useState(null);
    const [dob, setdob] = useState('');

    const handlename = (e) => {
        setName(e.target.value);
    };
    const handlecontact = (e) => {
        setcontact(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPasswoord(e.target.value);
    };
    const handledob = (e) => {
        setdob(e.target.value);
    };
    const handlesumit=(e)=>{
        e.preventDefault();
if(!name||!contact||!email||!Password||!dob)
{
console.log("youcant rigester")

}
else{
    console.log({name,contact,Password,email,dob})
navigate('/home')
}
    }
    return (


        <>
            <div className="w-96 flex flex-col justify-center items-center border border-black rounded-xl h-screen mx-auto">
        <h1 className="text-3xl mt-0 font-bold">Sign-up</h1>
    <div>
        <input type="text" placeholder='Enter your name' value={name} onChange={handlename} className='w-60 p-2 border-2 border-black rounded-lg my-4 ' />
    </div>
    <div>
        <input type="email" placeholder='Enter your Email' value={email} onChange={handleEmail} className='w-60 p-2 border-2 border-black rounded-lg my-4  
        invalid:border-red-600 invalid:bg-red-300 ' />
    </div>
    <div>
        <input type="number" name="" value={contact} onChange={handlecontact} placeholder='Enter your contact' id="" className="w-60 p-2 border-2 border-black rounded-lg my-4" />
    </div>
    
    <div>
        <input type="date" name="" value={dob} onChange={handledob} id="" className='w-60 p-2 border-2 border-black rounded-lg my-4' />
    </div>
    <div>
        <input type="password" name="" value={Password} onChange={handlePassword} placeholder='Enter your password' id="" className='w-60 p-2 border-2 border-black rounded-lg ' />
    </div>
    <div>
    <input type="file" accept=".jpg,.png,.gif" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2" />

    </div>
    <div>
        <button className='max-w-96 px-10 py-2 bg-green-600 rounded-lg hover:bg-green-300 text-xl text-white' onClick={handlesumit}>Register</button>
    </div>
</div>

        </>

    )
}

export default Register