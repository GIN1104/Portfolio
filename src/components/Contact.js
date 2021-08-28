import React, {useState} from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  const[thanks, setThanks] = useState(false);
  const handleClick = () => {
    setThanks(true)
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'gmail_tamplate', e.target, 'user_JYZKSdhVxd2cjVESqWYPp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      handleClick()
      e.target.reset();
  }


  return (
    <div className="container" id="contacts">
             <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Please fill out the form and add a short detailed message.
        </p>
      </div>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                  <input type="text" className="form-control" required placeholder="Name" name="name" />
              </div>
              <div className="col-8 form-group  mx-auto">
                  <input type="email" className="form-control" required  placeholder="Email Address" name="email" />
              </div>
              <div className="col-8 form-group mx-auto">
                  <input type="text" className="form-control" required  placeholder="Subject" name="subject" />
              </div>
              <div className="col-8 form-group mx-auto">
                  <input type="text" className="form-control" placeholder="Phone Number" name="phone" pattern="[0-9]*" maxLength="10"/>
              </div>
              <div className="col-8 form-group mx-auto">
                  <textarea  className="form-control" cols="30" rows="4" required  placeholder="Your message" name="message" />
              </div>
          </div>
          <div className="col-8  mx-auto pb-5">
     <button type="submit" className="btn btn-primary  float-right" onClick={()=>sendEmail}>Submit</button>
     </div>
     <div className="col-8  mx-auto ">
  { thanks &&  <div className="alert alert-success" role="alert" style={{textAlign: "center"}}>
        Will be in touch with you shortly! Thank you.
      </div>}
      </div>
        </form>
    </div>

  );
}

