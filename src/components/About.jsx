// eslint-disable-next-line no-unused-vars

import Header from './Header';
import Footer from './Footer';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';


const About=()=> {

const form=useRef();
    const [phone,setPhone]=useState("");
    const [name,setName]=useState("");
    const [user_email,setUser_email]=useState("");
    const [message,setMessage]=useState("");
    const p=useRef("");
    const pEmail=useRef("");
    const n=useRef("");
    const m=useRef("");

    // const emailContent={
    //     phone:phone,
    //     name:name,
    //     user_email:user_email,
    //     message:message,

    // };

 
    function sendEmail(e){
        
        e.preventDefault();
        p.current.value="";
        n.current.value="";
        m.current.value="";
        pEmail.current.value="";
       
        emailjs.sendForm(
            "service_sjrc5bm",
            "template_dod837w", 
            e.target,
            "RCSR0N5lnKWIDKdhv")
            .then(res=>{
            console.log(res);
        }).catch(console.error('error'));

    }

    return (
        
        // bg-[url('./assets/hero-image.png')]
        <div className=" lg:col-span-2 max-w-[1140px] w-full m-auto bg-cover bg-center">
    <Header />
    <div   className='flex flex-2   bg-sky-500 hover:bg-sky-700 py-4 px-4'>

                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4 my-5 ml-2 justify-items-center ' >
                    Get to us today for how to track your orders?
                </h1>
                <p className=' text-black md:text-2xl sm:text-1xl text-0.5xl py-6 my-5 ml-2 justify-start justify-items-start' >Reach out us for more reliable information at your convinient time because your priority is our number one solution. Reach out us for more reliable information at your conviniet time because your priority is our number one solution.</p>
            </div>
    <div className='flex flex-2'>
       
        <img className='border   rounded-md ml-2  m-2'  src="./src/assets/hero-image.png" alt="Image" />
       
    
    
    
    <form ref={form}className='bg-sky-500 border rounded-md bg-white ml-2  m-2 py-2 px-2  ' onSubmit={sendEmail}>

                <div className='grid grid-cols-2 ml-2  m-2 py-2 px-2' >
                    <label htmlFor="" className='col-span-2 m-2.5 p-2 font-bold text-black md:text-2xl sm:text-1xl'>Enter You Information To get to us</label>
                    <input value={name} className='border rounded-md col-span-2  m-2.5 p-2' type="text" placeholder="FullNames" name='name' onChange={(e)=>setName(e.target.value)} ref={n}/>
            
                    <input value={user_email} className='border rounded-md m-2.5 col-span-2 p-2' type="email" placeholder="Email" name='user_email' onChange={(e)=>setUser_email(e.target.value)} ref={pEmail}/>
                    <input value={phone} className='border rounded-md m-2.5 p-2 col-span-2' type="phone" placeholder="Phone" name='phone' onChange={(e)=>setPhone(e.target.value)} ref={p}/>
                    
                    <textarea value={message} className='border rounded-md col-span-2 m-2 p-2 ' cols="30" rows="3.5" placeholder='Message' name='message' onChange={(e)=>setMessage(e.target.value)} ref={m}></textarea>
                `    <button className='col-span-2  rounded-2xl  bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 ' value="send">Submit</button>
                </div>

            </form>
            </div>
        
    <Footer />
    </div>
    
    
    );
}

export default About;