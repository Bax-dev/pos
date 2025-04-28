import React from 'react';

const Footer = () => {
  return (
    <footer id="contact-us">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-form">
                <form
                  id="contact"
                  action="https://formspree.io/f/moveykpq"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Full Name"
                          required=""
                          style={{ backgroundColor: 'rgba(250, 250, 250, 0.3)' }}
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                          style={{ backgroundColor: 'rgba(250, 250, 250, 0.3)' }}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Your Message"
                          required=""
                          style={{ backgroundColor: 'rgba(250, 250, 250, 0.3)' }}
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="right-content col-lg-6 col-md-12 col-sm-12">
              <h2>More About <em>PayStock</em></h2>
              <p>
                PayStock helps small businesses manage sales, inventory, and
                customer data all in one place. Easily track your stock levels,
                process transactions, and monitor your business performance with
                detailed reports.
              </p>
              <ul className="social">
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/bax.dev/?igsh=MTFqODdmM3J3MDJhdg%3D%3D&utm_source=qr#"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://x.com/BaxX08">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/bassey-inyang-1835a0235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="sub-footer">
              <p>
                Copyright &copy; 2025 PayStock | Designed by <span></span>
                <a
                  rel="nofollow"
                  target="_blank"
                  href="https://baxdev.vercel.app"
                >
                   Bax.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
