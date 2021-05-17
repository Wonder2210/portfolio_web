import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "emailjs-com";

const Contact = () =>{
  const [state,setState] = useState({
    sending:false,
    error:false,
    success:false,
  })

  const sendEmail = async (e)=>{
    e.preventDefault();
    setState({
      ...state,
      sending:true,
    });
    try {
      const res = await emailjs.sendForm('service_gqde829', 'template_j211g1a', e.target, 'user_k4xONupzTlt6K3FVeASY8');
      console.log(res.text);
      
      toast.success("Thanks , i'll be in touch with you soon") 
      setState({
        ...state,
        sending:false,
      });
    } catch (error) {
      toast.error("There is an error try again ") 

      
      console.log(error.text);
    }
      
  }
  return  (
    <section className="contact" id="contact">
      <div className="heading white">
        <h2>Contact Me</h2>
        <p>Do you want to work together or talk about an idea? Let's get in touch then. Just fill out the form!</p>
      </div>
      <div className="content">
        <div className="contactInfo">
          <h3>Contact Info</h3>
          <div className="contactInfoBx">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>San Cristobal, Venezuela</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+584147331076</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>gonzalezwonderly@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="formBx">
          <form onSubmit={sendEmail}>
            <h3>Message Me</h3>
            <input type="text" name="user_name" id="" placeholder="full name" />
            <input type="email" name="user_email" id="" placeholder="email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit">
              {state.sending? (
                <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                        <stop stop-color="#fff" stop-opacity="0" offset="0%"/>
                        <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
                        <stop stop-color="#fff" offset="100%"/>
                    </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)">
                        <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="0.9s"
                                repeatCount="indefinite" />
                        </path>
                        <circle fill="#fff" cx="36" cy="18" r="1">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="0.9s"
                                repeatCount="indefinite" />
                        </circle>
                    </g>
                </g>
            </svg>
              ) :'SEND'}
            </button>
          </form>
        </div>
      </div>
     <Toaster position="bottom-center"/>
    </section>
  );

}

export default Contact
