import React, { useState } from 'react';
import './Contact.css';
import contact from '../../images/contact1.png';
import { useForm } from "react-hook-form"

const Contact = () => {
    const [user, setUser] = useState({})
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleBlur = (e) => {
        const newInfo = { ...user };
        newInfo[e.target.name] = e.target.value;
        setUser(newInfo);
    }

    const onSubmit = (data) => {
        data.name = user.name;
        fetch('http://localhost:5000/addData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("data create a successfully")
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <section id='contact'>
            <h1 className='text-content'>Contact <span>Me</span></h1>
            <h4 className='text-content1'>Let's Talk About Ideas</h4>
            <div className="concact-area">
                <div className="contact-text">
                    <div className="images-containt">
                        <img src={contact} alt="" />
                        <h1>SULIMAN VASSA</h1>
                        <h4>Web Developer (Frontend)</h4>
                        <p>Are You Looking For Your Business Online Presence?<br /> I am here. 🙂</p>
                        <div className="email-containt">
                            <li><box-icon name='send' type='solid' color='#2abd28' ></box-icon>  <span> mdsulimanvassa@gmail.com</span></li>
                            <li><box-icon name='phone' color='#28b726' ></box-icon>  <span> 01733549605</span></li>
                        </div>
                    </div>
                </div>
                <div className="contact-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type='text' name='name' placeholder='Your Name'
                                {...register('Name', { required: true })} />
                            {errors.Name && <p className='text-danger'>This name is required.</p>}
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type='email' {...register('email', { required: true })} placeholder='Enter Your Email' />
                            {errors.email && <p className='text-danger'>This email is required.</p>}
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur}
                                type="text" {...register('subject', { required: true })} placeholder="Subject" />
                            {errors.subject && <p className='text-danger'>This phone number is required.</p>}
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur}
                                type="text" {...register('message', { required: true })} cols={40} rows={10} placeholder="Your message" />
                            {errors.message && <p className='text-danger'>This message is required.</p>}
                        </div>
                        <div className="form-group button-containt">
                            <button type="submit">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;