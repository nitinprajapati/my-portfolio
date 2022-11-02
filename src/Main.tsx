import React from "react";

const Main: React.FC = () => {
  return (
    <main id="main">
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
                      <span>HTML</span> <span className="pull-right">95%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label="Progress"
                        />
                      </div>
                      <span>CSS3</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label="Progress"
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
                          aria-label="Progress"
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
                          aria-label="Progress"
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
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Curabitur arcu erat, accumsan id imperdiet
                        et, porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Nulla porttitor
                        accumsan tincidunt.
                      </p>
                      <p className="lead">
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. porttitor at sem.
                      </p>
                      <p className="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla
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
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="bi bi-briefcase" />
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
                    <i className="bi bi-card-checklist" />
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
                    <i className="bi bi-bar-chart" />
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
                    <i className="bi bi-binoculars" />
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
                    <i className="bi bi-brightness-high" />
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
                    <i className="bi bi-calendar4-week" />
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
        <div className="overlay-mf" />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="bi bi-check" />
                  </span>
                </div>
                <div className="counter-num">
                  <p
                    data-purecounter-start="0"
                    data-purecounter-end="450"
                    data-purecounter-duration="1"
                    className="counter purecounter"
                  />
                  <span className="counter-text">WORKS COMPLETED</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="bi bi-journal-richtext" />
                  </span>
                </div>
                <div className="counter-num">
                  <p
                    data-purecounter-start="0"
                    data-purecounter-end="25"
                    data-purecounter-duration="1"
                    className="counter purecounter"
                  />
                  <span className="counter-text">YEARS OF EXPERIENCE</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="bi bi-people" />
                  </span>
                </div>
                <div className="counter-num">
                  <p
                    data-purecounter-start="0"
                    data-purecounter-end="550"
                    data-purecounter-duration="1"
                    className="counter purecounter"
                  />
                  <span className="counter-text">TOTAL CLIENTS</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="bi bi-award" />
                  </span>
                </div>
                <div className="counter-num">
                  <p
                    data-purecounter-start="0"
                    data-purecounter-end="48"
                    data-purecounter-duration="1"
                    className="counter purecounter"
                  />
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
                <div className="line-mf" />
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
                          <span className="bi bi-plus-circle" />
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
                          <span className="bi bi-plus-circle" />
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
                          <span className="bi bi-plus-circle" />
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
                          <span className="bi bi-plus-circle" />
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
                          <span className="bi bi-plus-circle" />
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
                          <span className="bi bi-plus-circle" />
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
  );
};

export default Main;
