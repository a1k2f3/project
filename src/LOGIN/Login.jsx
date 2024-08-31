import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [Password, setPasswoord] = useState(null);
    const navigate=useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPasswoord(e.target.value);
    };
    const handlesumit=(e)=>{
        e.preventDefault();
if(!email||!Password)
{
console.log("youcant rigester")

}
else{
    console.log({Password,email})
navigate('/home')
}}
  return (
    <>
            <div className="w-96 flex flex-col justify-center items-center border border-black rounded-xl h-screen mx-auto">
        <h1 className="text-3xl mt-0 font-bold">Log in</h1>
   
    <div>
        <input type="email" name=""  placeholderid="Enter the Email" className='w-60 p-2 border-2 border-black rounded-lg invalid:border-rose-600 invalid:bg-red-100 my-4'  value={email} onChange={handleEmail}/>
    </div>
    <div>
        <input type="password" name="" id=""  placeholder="Enter your Password" className='w-60 p-2 border-2 border-black rounded-lg my-4' value={Password} onChange={handlePassword}/>
    </div>
    <div>
 

    </div>
    <div>
        <button className='max-w-96 px-10 py-2 bg-green-600 rounded-lg hover:bg-green-300 text-xl text-white' onClick={handlesumit}>Login</button>
    </div>
</div>
    </>
  )
}

export default Login;