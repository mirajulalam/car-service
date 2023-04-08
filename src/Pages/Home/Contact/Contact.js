import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import contact from '../../../assets/images/contact/contact.gif';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_d3mn69j', 'template_bovssme', form.current, 'bC3daaJCpTsOQkKTT')
        .then((result) => {
            console.log(result.text);
            swal("Successfully", "Thanks for the your email", "success");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="max-w-7xl mx-auto px-12">
            
      <div className="flex justify-center items-center my-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="text-center flex-1">
          <form ref={form} onSubmit={sendEmail}>
            <input className="p-3 mb-4 rounded w-8/12 border-2" type="text" name="name" id="" placeholder="Your name" required/>
            <br />
            <input className="p-3 mb-4 rounded w-8/12 border-2" type="email" name="email" id="" placeholder="Email Address" required/>
            <br />
            <input className="p-3 mb-4 rounded w-8/12 border-2" type="text" name="address" id="" placeholder="Your address" required/>
            <br />
            <textarea className="p-3 mb-4 rounded w-8/12 border-2" name="message" id="" cols="50" rows="5" placeholder="Your message" required></textarea>
            <br />
            <button className="btn bg-[#ff3818] border-[#ff3818] text-uppercase text-white font-bold ">
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 justify-center content-center">
          <img data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" className="w-full rounded-lg mx-30" src={contact} alt=""
          />
        </div>
      </div>
    </section>
    );
};

export default Contact;