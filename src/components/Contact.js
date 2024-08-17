import React, { useEffect } from 'react';
import '../styles/Contact.css'; // Import your CSS file

const Contact = () => {

  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJkTUgNBSrA6gql7P95uUFWg3alH-HFNUQSAV3iXb8I4N1HbU_m4X0TPbNQJm3mSn9/exec';
    const form = document.forms['contact-form'];

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thank you! your form is submitted successfully." ))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message))
    })
  }, []);

  return (
    <div id="contact">
      <div className="main-width-contact">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact me</h1>
            <p><i className="fa-solid fa-envelope"></i> Email - pandeyanirvan02@gmail.com</p>
            <p><i className="fas fa-phone-square-alt"></i> Phone - 7477582909</p>
          </div>
          <div className="contact-right">
            <form name="contact-form" method="post" action="https://script.google.com/macros/s/AKfycbzWW1tWYdW3KmLfLUSo3qHbwaL3KbHWhggew6A90wBrSRO3efOW2-Zd2_ClKwf4lYEW/exec">
              <input type="text" name="Name" placeholder="Your name" required />
              <input type="email" name="Email" placeholder="Your email" required />
              <textarea name="Message" rows="10" placeholder="Your message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Made with 💙 by Anirvan Pandey</p>
      </div>
    </div>
  );
};

export default Contact;
