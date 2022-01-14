import React from 'react';
import './Contact.css';
import './Footer.css';
import Footer from './Footer.js';
import { Linkedin, Github, Envelope, Telephone } from 'react-bootstrap-icons';



function Contact() {
  return (
    <div className="page-bg vh-100">
      <div className="container page-bg">
        <div className="row mb-2">
          <section className="h-100 bisection bisection-4 col-lg-6">
            <h1 className="bisection-h1 bisection-4-h1">contact me</h1>
            <p>I am open to new work opportunities, exciting challenges, and making lasting
              connections. Feel free to reach out at any time. I respond the quickest via the linked socials below!</p>
            <p>Phone: +1 920-573-1067</p>
            <p>Email: argibson02@gmail.com</p>

            <div className='contact-btn-list my-4'>
              {/* <!-- LinkedIn --> */}
              <a className="btn btn-floating mx-3 gibson-contact-btn btn-link" href="https://www.linkedin.com/in/alexander-r-gibson/"
                target="_blank"
                rel="noreferrer"
                role="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="LinkedIn"
              ><Linkedin color="black" size={80} className="fab-c fa-linkedin-in" /></a>

              {/* <!-- Github --> */}
              <a className="btn btn-floating mx-3 gibson-contact-btn btn-link" href="https://github.com/argibson02"
                target="_blank"
                rel="noreferrer"
                role="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Github"
              ><Github color="black" size={80} className="fab-c fa-github-in" /></a>

              {/* <!-- Email --> */}
              <a className="btn btn-floating mx-3 gibson-contact-btn btn-link" href="mailto:argibson02@gmail.com"
                target="_blank"
                rel="noreferrer"
                role="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Email"
              ><Envelope color="black" size={80} className="fab-c fa-mail-in" /></a>

              {/* <!-- Telephone --> */}
              <a className="btn btn-floating mx-3 gibson-contact-btn btn-link" href="tel:+1920-573-1067"
                // target="_blank"
                rel="noreferrer"
                role="button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Telephone"
              ><Telephone color="black" size={80} className="fab-c fa-telephone-in" /></a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;