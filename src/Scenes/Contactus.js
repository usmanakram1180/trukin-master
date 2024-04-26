import React from 'react'
import img from '../Images/Images1/contact-us-header (1).webp';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

function Contactus() {
  return (
    <>
      <Navbar />
      <div class="container my-2"></div>
      <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#FEBD59' }}>
        <img src={img} class="img-fluid" alt="Responsive image"></img>
      </div><br />
      <div class="container my-2">
        <h1 className="display-1"> <b> Contact us</b></h1>
      </div>
      <div className="container bg-warning">
        <div className="row">
          <div className="col text-center"><br /><br />
            <h4>YOUR CONVENIENCE <br />
              IS OUR #1 PRIORITY</h4>
            <hr />
            <h5 >Head Office</h5>
            <h5>LOGITY DISPATCH
              3524 SILVERSIDE RD STE 35B WILMINGTON, DE 19810-4929ch.</h5>
            <h5>Phone</h5><Link to="tel:+15645446567" class="link-danger">+ 1 564-544-6567
            </Link>
            <h5>Email:</h5> <Link to="mailto: educationhelp721@gmail.com"
              class="link-danger text-decoration-none ">educationhelp721@gmail.com
            </Link>
          </div>
          <div class="vr" style={{ height: '410px' }}></div>
          <div className="col">
            <div className="m-4">
              <form action="/examples/actions/confirmation.php" method="post">
                <div className="mb-3">
                  <label className="form-label" for="inputEmail">Full Name</label>
                  <input type="full name" className="form-control" id="inputEmail" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="inputPassword">Phone number</label>
                  <input type="password" className="form-control" id="inputPassword" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="inputEmail">Email</label>
                  <input type="full name" className="form-control" id="inputEmail" required />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="checkRemember" />
                    <label className="form-check-label" for="checkRemember">I have read and agree to Terms of Service</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-warning">Send Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contactus
