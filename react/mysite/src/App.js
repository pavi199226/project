import React from "react";
import avataars from "./images/avataars.svg";
import cabin from "./images/movies.png";
import cake from "./images/weather.png";
import circus from "./images/circus.png";
import game from "./images/game.png";
import submarine from "./images/submarine.png";
import safe from "./images/safe.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Pavithra Govindan
            </a>
            <button
              className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <img className="masthead-avatar mb-5" src={avataars} alt="" />

            <h1 className="masthead-heading text-uppercase mb-0">Pavithra</h1>

            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <p className="masthead-subheading font-weight-light mb-0">
              Software Engineer - Web Developer - Reader
            </p>
          </div>
        </header>
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Portfolio
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal1"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={cabin} alt="" />
                </div>
                <a href="https://www.github.com/javascript/react/moviecms">
                  View here
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal2"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={cake} alt="" />
                </div>
                <a href="https://github.com/pavi199226/javascript/tree/master/weatherapp">
                  View here
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal3"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={circus} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal4"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={game} alt="" />
                </div>
                <a href="https://github.com/pavi199226/javascript/tree/master/car">
                  View here
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal5"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={safe} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal6"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={submarine} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section bg-primary text-white mb-0" id="about">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-white">
              About
            </h2>
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <p className="lead">
                  Bonjour tout le monde, I'm Pavithra from India. I did my
                  Engineering in Information Technology. Currently i'm residing
                  in Brussels,Belgium.
                </p>
              </div>
              <div className="col-lg-4 mr-auto">
                <p className="lead">
                  I have few years of working experience and currently looking
                  for a job here.To know more about me, check out my CV below.
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <a
                className="btn btn-xl btn-outline-light"
                href="https://drive.google.com/drive/u/1/my-drive/Resume/Pavithra_Govindan_VnV_CV.pdf"
                download
              >
                <i className="fa fa-download mr-2"></i>
                CV Download!
              </a>
            </div>
          </div>
        </section>
        <section className="page-section" id="contact">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Contact Me
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form
                  id="contactForm"
                  name="sentMessage"
                  novalidate="novalidate"
                  action="mailto:pavi199226@gmail.com"
                >
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label>
                      <input
                        className="form-control"
                        id="name"
                        type=""
                        placeholder="Name"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Email Address</label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <br />
                  <div id="success"></div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-xl"
                      id="sendMessageButton"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  1050 Ixelles
                  <br />
                  Brussels,Belgique
                </p>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.facebook.com/pgjanu"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://twitter.com/janaki2692"
                >
                  <i className="fa fa-fw fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.linkedin.com/in/pavi199226"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.github.com/pavi199226"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4"></h4>
                <p className="lead mb-0"></p>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright © pavi2020</small>
          </div>
        </div>
        <div className="scroll-to-top d-lg-none position-fixed">
          <a
            className="js-scroll-trigger d-block text-center text-white rounded"
            href="#page-top"
          >
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal1Label"
                      >
                        Log Cabin
                      </h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img
                        className="img-fluid rounded mb-5"
                        src={cabin}
                        alt=""
                      />
                      <p className="mb-5"></p>
                      <button className="btn btn-primary" data-dismiss="modal">
                        <i className="fa fa-times fa-fw"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal2Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal2Label"
                      >
                        Tasty Cake
                      </h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img
                        className="img-fluid rounded mb-5"
                        src={cake}
                        alt=""
                      />
                      <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button className="btn btn-primary" data-dismiss="modal">
                        <i className="fa fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal3Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal3Label"
                      >
                        Circus Tent
                      </h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img
                        className="img-fluid rounded mb-5"
                        src={circus}
                        alt=""
                      />
                      <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button className="btn btn-primary" data-dismiss="modal">
                        <i className="fa fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal4"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal4Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal4Label"
                      >
                        Controller
                      </h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img
                        className="img-fluid rounded mb-5"
                        src={game}
                        alt=""
                      />
                      <a href="https://github.com/pavi199226/javascript/tree/master/car" />
                      <button className="btn btn-primary" data-dismiss="modal">
                        <i className="fa fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal5"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal5Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal5Label"
                      >
                        Locked Safe
                      </h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img
                        className="img-fluid rounded mb-5"
                        src={safe}
                        alt=""
                      />
                      <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button className="btn btn-primary" data-dismiss="modal">
                        <i className="fa fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal6"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal6Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal6Label"
                      >
                        Submarine
                      </h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img
                        className="img-fluid rounded mb-5"
                        src={submarine}
                        alt=""
                      />
                      <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button className="btn btn-primary" data-dismiss="modal">
                        <i className="fa fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
