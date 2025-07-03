import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../components/Alert';

const Contact = () => {
    const [formData, setFormData] = useState({ name:"", email:"", message:""});

    const [isLoading, setIsLoading ] = useState(false);
    const [showAlert, setShowAlert ] = useState(false);
    const [alertType, setAlertType ] = useState("success");
    const [alertMessage, setAlertMessage ] = useState("");
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("form submitted", formData);
            await emailjs.send("service_astqv1r","template_ttrubyk", {
                form_name: formData.name,
                to_name: "Tushar",
                form_email: formData.email,
                to_email: "tusharpardhe2018@gmail.com",
                message: formData.message,
            }, 
            "hjR2_kFPE7lKIeGwY"    
        );
            setIsLoading(false);
            setFormData({ name:"", email:"", message:""});
            showAlertMessage("success", "Your message has been sent!");
        } catch (error) {
            setIsLoading(false);
            showAlertMessage("failed", "Your message has not been sent!");
        }   
    }

  return (
    <section className='relative flex items-center c-space section-spacing'>
        { showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
            <div className='flex flex-col items-start w-full gap-5 mb-10'>
                <h2 className='text-heading' >Let's talk</h2>
                <p className='font-normal text-neutral-400'>Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit} >
                <div className='mb-5'>
                    <label htmlFor="Email" className='feild-label'>
                        Full Name
                    </label>
                    <input type="text" id='name' name='name' className='field-input field-input-focus' placeholder='Tushar' autoComplete='name' value={formData.name} onChange={handleChange} required/>
                </div>
                <div className='mb-5'>
                    <label htmlFor="name" className='feild-label'>
                        Email
                    </label>
                    <input type="text" id='email' name='email' className='field-input field-input-focus' placeholder='frontend@gmail.com' autoComplete='email' value={formData.email} onChange={handleChange} required />
                </div>
                <div className='mb-5'>
                    <label htmlFor="message" className='feild-label'>
                        Message
                    </label>
                    <textarea type="text" id='message' name='message' className='field-input field-input-focus' rows="4" placeholder="Let's make something....." autoComplete='message' value={formData.message} onChange={handleChange} required />
                </div>
                <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-none bg-radial from-lavender to-royal hover-animation '>
                    { !isLoading ? "Send" : "Sending" }
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact