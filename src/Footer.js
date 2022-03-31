import React from 'react';

const Footer = ({
  locationTitle,
  myLocationOne,
  myLocationTwo,
  socialTitle,
  aboutWebsiteTitle,
  aboutWebsiteDescription,
}) => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">{locationTitle}</h4>
            <p className="lead mb-0">
              {myLocationOne}
              <br />
              {myLocationTwo}
            </p>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">{socialTitle}</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-dribbble"></i>
            </a>
          </div>

          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">{aboutWebsiteTitle}</h4>
            <p className="lead mb-0">{aboutWebsiteDescription}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
