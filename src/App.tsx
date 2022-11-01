import Header from "./header";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <!-- ======= Hero Section ======= --> */}
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: "url(assets/img/hero-bg.jpg)" }}
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              {/* <!--<p className="display-6 color-d">Hello, world!</p>--> */}
              <h1 className="hero-title mb-4">I am Nitin Kumar</h1>
              <p className="hero-subtitle">
                <span
                  className="typed"
                  data-typed-items="Software Engineer, Developer, Technical consultant"
                ></span>
              </p>
              {/* <!-- <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about-me sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img
                              src="assets/img/testimonial-2.jpg"
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p>
                              <span className="title-s">Name: </span>
                              <span>Nitin Kumar</span>
                            </p>
                            <p>
                              <span className="title-s">Profile: </span>
                              <span>Full stack developer</span>
                            </p>
                            <p>
                              <span className="title-s">Email: </span>
                              <span>nitinkumar2593@gmail.com</span>
                            </p>
                            <p>
                              <span className="title-s">Phone: </span>
                              <span>+91-8285521610</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">Skill</p>
                        <span>HTML</span>{" "}
                        <span className="pull-right">95%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span>CSS3</span>{" "}
                        <span className="pull-right">75%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span>PHP</span> <span className="pull-right">50%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span>JAVASCRIPT</span>
                        <span className="pull-right">90%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About me</h5>
                        </div>
                        <p className="lead">
                          Curabitur non nulla sit amet nisl tempus convallis
                          quis ac lectus. Curabitur arcu erat, accumsan id
                          imperdiet et, porttitor at sem. Praesent sapien massa,
                          convallis a pellentesque nec, egestas non nisi. Nulla
                          porttitor accumsan tincidunt.
                        </p>
                        <p className="lead">
                          Mauris blandit aliquet elit, eget tincidunt nibh
                          pulvinar a. Vivamus suscipit tortor eget felis
                          porttitor volutpat. Vestibulum ac diam sit amet quam
                          vehicula elementum sed sit amet dui. porttitor at sem.
                        </p>
                        <p className="lead">
                          Nulla porttitor accumsan tincidunt. Quisque velit
                          nisi, pretium ut lacinia in, elementum id enim. Nulla
                          porttitor accumsan tincidunt. Mauris blandit aliquet
                          elit, eget tincidunt nibh pulvinar a.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services-mf pt-5 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Services</h3>
                  <p className="subtitle-a">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-briefcase"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web Design</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni adipisci eaque autem fugiat! Quia, provident vitae!
                      Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-card-checklist"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web Development</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni adipisci eaque autem fugiat! Quia, provident vitae!
                      Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-bar-chart"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Photography</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni adipisci eaque autem fugiat! Quia, provident vitae!
                      Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-binoculars"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Responsive Design</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni adipisci eaque autem fugiat! Quia, provident vitae!
                      Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-brightness-high"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Graphic Design</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni adipisci eaque autem fugiat! Quia, provident vitae!
                      Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-calendar4-week"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Marketing Services</h2>
                    <p className="s-description text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni adipisci eaque autem fugiat! Quia, provident vitae!
                      Magni tempora perferendis eum non provident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section -->

      <!-- ======= Counter Section ======= --> */}
        <div
          className="section-counter paralax-mf bg-image"
          style={{ backgroundImage: "url(assets/img/counters-bg.jpg)" }}
        >
          <div className="overlay-mf"></div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-check"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="450"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">WORKS COMPLETED</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-journal-richtext"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="25"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-people"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="550"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">TOTAL CLIENTS</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle">
                      <i className="bi bi-award"></i>
                    </span>
                  </div>
                  <div className="counter-num">
                    <p
                      data-purecounter-start="0"
                      data-purecounter-end="48"
                      data-purecounter-duration="1"
                      className="counter purecounter"
                    ></p>
                    <span className="counter-text">AWARD WON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Counter Section -->

      <!-- ======= Portfolio Section ======= --> */}
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Media</h3>
                  <p className="subtitle-a">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img
                        src="assets/img/work-1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem impsum dolor</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img
                        src="assets/img/work-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Loreda Cuno Nere</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img
                        src="assets/img/work-3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Mavrito Lana Dere</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img
                        src="assets/img/work-4.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bindo Laro Cado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img
                        src="assets/img/work-5.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Lena Mado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a
                    href="assets/img/work-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <div className="work-img">
                      <img
                        src="assets/img/work-6.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Big Bang</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /
                          <span className="w-date">18 Sep. 2017</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html">
                            <span className="bi bi-plus-circle"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section
        id="contact"
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send Message Us</h5>
                      </div>
                      <div>
                        <form
                          action="forms/contact.php"
                          method="post"
                          role="form"
                          className="php-email-form"
                        >
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows={5}
                                  placeholder="Message"
                                  required
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12 text-center my-3">
                              <div className="loading">Loading</div>
                              <div className="error-message"></div>
                              <div className="sent-message">
                                Your message has been sent. Thank you!
                              </div>
                            </div>
                            <div className="col-md-12 text-center">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis dolorum dolorem soluta quidem expedita
                          aperiam aliquid at. Totam magni ipsum suscipit amet?
                          Autem nemo esse laboriosam ratione nobis mollitia
                          inventore?
                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="bi bi-geo-alt"></span> 329
                            WASHINGTON ST BOSTON, MA 02108
                          </li>
                          <li>
                            <span className="bi bi-phone"></span> (617) 557-0089
                          </li>
                          <li>
                            <span className="bi bi-envelope"></span>
                            contact@example.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a href="">
                              <span className="ico-circle">
                                <i className="bi bi-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className="ico-circle">
                                <i className="bi bi-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className="ico-circle">
                                <i className="bi bi-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className="ico-circle">
                                <i className="bi bi-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default App;
