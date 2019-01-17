import React from 'react';


class Footer extends React.Component{
  render(){
    return(
      <footer className="footer-distributed" id="footer">

    <div className="footer-left">

      <h3>BlissFul<span>Bites</span></h3>

      <p className="footer-company-name">Since &copy; 2015</p>
    </div>

    <div className="footer-center">

      <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Gemmayze</span>Beirut, Lebanon</p>
      </div>

      <div>
        <i className="fa fa-phone"></i>
        <p>+1 555 123456</p>
      </div>

      <div>
        <i className="fa fa-envelope"></i>
        <p>support@BlissFul-Bites.com</p>
      </div>

    </div>

    <div className="footer-right">

      <p> Contact</p>
      <div className="footer-icons">

        <a href="https://www.fb.com"><i className="fa fa-facebook"></i></a>
        <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
        <a href="linkedIn.com"><i className="fa fa-youtube"></i></a>



      </div>

    </div>

  </footer>
    )
  }
}

export default Footer;