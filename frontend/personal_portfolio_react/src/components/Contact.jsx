import { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import { linkedin, gmail, github } from '../assets';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const form = useRef();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleVerify = () => {
        console.log('It is called.')
        setIsVerified(true);
      };


    const testSendEmail = () => {
        alert('Email sent');
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (isVerified) {
            emailjs
            .sendForm('service_zx268kd', 'template_dnho1tn', form.current, {
                publicKey: 'g8DolYJZE2wojTjGC',
            })
            .then(
                () => {
                    alert("Message sent successfully!!")
                    console.log('SUCCESS!');
                },
                (error) => {
                    alert("Message could not be sent. Please drop an email at syedaym1@ualberta.ca")
                    console.log('FAILED...', error.text);
                },
            );
        } else {
            alert('Please verify reCAPTCHA');
        };
      };

  
    return (
    <section id="contact" className="flex justify-center items-center flex-col py-9">
        <div className="mt-10 flex justify-center items-center text-center">
            <h1 className="text-white font-Montserrat sm:text-[50px] text-[30px] font-semibold">GET IN TOUCH WITH ME</h1>
        </div>
        
            <div className="flex w-full p-1 mt-10">
                <div className="mx-5 mt-5 mb-7 text-left w-full overflow-auto">
                    <div className="flex sm:justify-evenly justify-center sm:items-start items-center sm:flex-row flex-col">
                        <div className='sm:w-[550px] border-box border-2 border-three rounded-[15px] sm:p-11 p-6'>
                            <div className="flex justify-center items-center flex-col">
                                <div className="mb-3">
                                    <p className="text-white font-Montserrat sm:text-[15px] text-[13px] mb-3">Thank you for your interest in reaching out!</p>
                                    <p className='text-white font-Montserrat sm:text-[15px] text-[13px]'>I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.</p>
                                </div>   
                                <div className='flex justify-evenly items-center flex-row w-full mt-3 sm:mr-2 mr-3'>
                                    <a href="https://www.linkedin.com/in/aymanquadri/" target='_blank'><img src={linkedin} className='sm:w-[90px] w-[55px]'/></a>
                                    <a href="mailto:syedaym1@ualberta.ca"><img src={gmail} className='sm:w-[80px] w-[45px]'/></a>
                                    <a href="https://github.com/saymanq" target="_blank"><img src={github} className='sm:w-[60px] w-[39px] invert ml-1 mr-2'/></a>
                                </div>
                            </div>    
                        </div>
                        <div className='sm:w-[501px] w-full'>
                            <form ref={form} onSubmit={sendEmail} className='flex justify-center items-center flex-col text-neutral-100 font-Montserrat text-[15px]'>
                                <div className='flex justify-between items-center sm:flex-row flex-col w-full mb-3 sm:mt-1 mt-14'>
                                    <input type="text" name="name" placeholder="Name" id="name" value={name} onChange={handleNameChange} className=' border-box border-2 border-three sm:w-[245px] w-full h-12 bg-charcoal sm:mb-0 mb-3 p-3' required></input>
                                    <input type="email" name="email" placeholder="Email" id="email" value={email} onChange={handleEmailChange} className='border-box border-2 border-three sm:w-[245px] w-full h-12 bg-charcoal p-3' required></input>
                                </div>
                                <input type="text" name="subject" placeholder="Subject" id="subject" value={subject} onChange={handleSubjectChange} className='w-full mb-3 border-box border-2 border-three h-12 bg-charcoal p-3' required></input>
                                <textarea name="message" placeholder="Message" id="message" value={message} onChange={handleMessageChange} rows='8' cols='57' className='w-full border-box border-2 border-three bg-charcoal p-3 mb-1' required></textarea>
                                <div className='flex justify-between items-center sm:flex-row flex-col mt-3 w-full'>    
                                    <ReCAPTCHA sitekey="6LfKEAYqAAAAAIEanf_GrhcjTnucYZhe2E8sFmvP" onChange={handleVerify} />
                                    <div className='border-box border-2 border-three p-2 hover:bg-three mr-3 sm:mt-0 mt-3 transition duration-0 hover:duration-300 ease-in-out mb-3'>
                                        <button type="submit" value="SEND" disabled={!isVerified}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
    </section>
  )
}

export default Contact