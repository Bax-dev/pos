import React from 'react';

const WelcomeSection = () => {
  return (
    <div>
      {/* Welcome Area */}
      <div className="welcome-area" id="welcome">
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Manage & Grow Your Business with <em>PayStock</em>
                </h1>
                <p>
                  <strong>PayStock</strong> is the smart Point of Sale and
                  Inventory Management solution designed for small businesses in
                  Nigeria. Empowering shop owners to track sales, manage stock,
                  and grow their profits — all in one simple, powerful app. Subscribe
                  and take full control of your business today.
                </p>
                <a href="#about" className="main-button-slider">
                  DISCOVER PAYSTOCK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>01</h2>
                  <i className="fa fa-line-chart fa-3x"></i>
                  <h4>Sales Tracking</h4>
                  <p>
                    Effortlessly track all your sales in real-time, allowing you
                    to monitor daily performance and make informed decisions.
                  </p>
                  <a href="#contact" className="main-button"> Learn More </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>02</h2>
                  <i className="fa fa-cubes fa-3x"></i>
                  <h4>Inventory Management</h4>
                  <p>
                    Stay in full control of your inventory with real-time updates.
                    Manage stock levels, reorder products, and prevent stockouts.
                  </p>
                  <a href="#contact" className="main-button"> Discover More </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <div className="features-item">
                <div className="features-icon">
                  <h2>03</h2>
                  <i className="fa fa-users fa-3x"></i>
                  <h4>Customer Insights</h4>
                  <p>
                    Gain valuable insights into customer preferences and buying
                    behavior to tailor your offerings and grow customer loyalty.
                  </p>
                  <a href="#contact" className="main-button"> More Details </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="left-image-decor"></div>

      <section className="section" id="features">
        <div className="container">
          <div className="row">
            <div
              className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src='/assets/images/pos.jpg'
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
              <ul>
                <li
                  data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
                >
                  <div className="text">
                    <i
                      className="fa fa-line-chart"
                      style={{ fontSize: '24px', marginBottom: '10px', color: '#007bff' }}
                    ></i>
                    <h4>Real-Time Sales Tracking</h4>
                    <p>
                      Track every sale in real-time, giving you instant access to
                      your business performance, daily revenue, and trends.
                    </p>
                  </div>
                </li>
                <br />
                <br />
                <li
                  data-scroll-reveal="enter right move 30px over 0.6s after 0.5s"
                >
                  <div className="text">
                    <i
                      className="fa fa-cubes"
                      style={{ fontSize: '24px', marginBottom: '10px', color: '#28a745' }}
                    ></i>
                    <h4>Efficient Inventory Management</h4>
                    <p>
                      Manage your inventory seamlessly, get notifications for low
                      stock, and restock on time to prevent running out of
                      products.
                    </p>
                  </div>
                </li>
                <br />
                <br />
                <li
                  data-scroll-reveal="enter right move 30px over 0.6s after 0.6s"
                >
                  <div className="text">
                    <i
                      className="fa fa-pie-chart"
                      style={{ fontSize: '24px', marginBottom: '10px', color: '#ffc107' }}
                    ></i>
                    <h4>Customer Insights & Reports</h4>
                    <p>
                      Understand your customers’ behavior with detailed analytics,
                      helping you make smarter decisions about products and
                      promotions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
