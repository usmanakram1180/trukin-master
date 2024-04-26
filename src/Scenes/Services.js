import React from 'react'
import img from '../Images/Images1/Services.webp'
import img1 from '../Images/Images1/Truck Dispatching.webp'
import img2 from '../Images/Images1/Billing.webp'
import img3 from '../Images/Images1/Document Management.webp'
import img4 from '../Images/Images1/Factoring Service.webp'
import img5 from '../Images/Images1/Rate negotiation.webp'
import img6 from '../Images/Images1/Safety dot compliance.webp'
import img7 from '../Images/Images1/Ifta.webp'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function Services() {
  return (
    <>
      <Navbar /><br /><br />
      <div class="jumbotron jumbotron-fluid">
        <div class="">
          <img src={img} class="img-fluid" alt="..."></img>

        </div>
      </div>
      <div className="container ">
        <h1 class="display-4 "> <b> Our Services</b></h1>

      </div><br />
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={img1} class="img-fluid" alt="..."></img>
          </div>
          <div className="col">
            <hr />
            <h1>01</h1>
            <h1>Truck Dispatching</h1>
            <h5>Truck Dispatching:</h5>
            <p>Keeping Your Business Moving So You Can Focus on Driving.
              Here at Logity Dispatch, we are proud to be the truck dispatcher company you can rely on.</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
            <h1>02</h1>
            <h1>Billing</h1>

            <p>Trucking accounting company to keep you and your truck on the road.
              While you are out there on the road, we give all the necessary support and assistance to get the job done the right way, time and time again.</p>
            <hr />
          </div>
          <div className="col">
            <img src={img2} class="img-fluid" alt="..."></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={img3} class="img-fluid" alt="..."></img>
          </div>
          <div className="col">
            <hr />
            <h1>03</h1>
            <h1>Document Management
              & Paperwork</h1>
            <p>We offer an extensive range of solutions for truckers and trucking companies.
              Including dispatch services dedicated to providing you invaluable support.</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
            <h1>04</h1>
            <h1>Factoring service</h1>

            <p>As with any important business decision, whether you decide to use a truck factoring service depends on your business model, scale of operations, and how much risk you want to assume.</p>
            <hr />
          </div>
          <div className="col">
            <img src={img4} class="img-fluid" alt="..."></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={img5} class="img-fluid" alt="..." ></img>
          </div>
          <div className="col">
            <hr />
            <h1>05</h1>
            <h1>Rate negotiation</h1>
            <p>Our services go far beyond simple average rate negotiation,
              and we help you position your operation and your brand at the forefront of the market.
              We’ll take care of everything. All you need to do is drive.</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
            <h1>06</h1>
            <h1>SAFETY / DOT compliance</h1>

            <p>No one likes paperwork, and it can be hard to keep up with all the changes. Worst of all, mistakes or omissions can result in costly penalties. Thankfully, Logity Dispatch has your solution.</p>
            <hr />
          </div>
          <div className="col">
            <img src={img6} class="img-fluid" alt="..."></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={img7} class="img-fluid" alt="..." ></img>
          </div>
          <div className="col">
            <hr />
            <h1>07</h1>
            <h1>IFTA</h1>
            <h4>If your vehicle:</h4>
            <p>
              -is used to transport people or property;<br />
              -has three or two axles as well as an actual or registered gross vehicle weight that exceeds 26,000 lbs. (11,797 kgs) — or if in combination the actual or registered gross vehicle weight is more than 26,000 lbs. (11,797 kgs).
              You must submit the IFTA quarterly fuel report.</p>
            <hr />
          </div>
        </div>
      </div><br /><br />
      <Footer />
    </>
  )
}

export default Services
