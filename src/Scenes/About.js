import React from 'react'
import img from '../Images/Images1/home-header-bg.webp'
// import img1 from '../Images/Images1/Truck Dispatching.webp'
import img2 from '../Images/Images1/ifta-report-main.webp'
import img3 from '../Images/Images1/Document Management.webp'
import img4 from '../Images/Images1/Safety dot compliance.webp'
import img5 from '../Images/Images1/Rate negotiation.webp'
import img6 from '../Images/Images1/company formation.webp'
import img7 from '../Images/Images1/to work.webp'
import img8 from '../Images/Images1/Dry van.webp'
import img9 from '../Images/Images1/Step desk.webp'
import img10 from '../Images/Images1/Reefer.webp'
import img11 from '../Images/Images1/Flatbed.webp'
import img12 from '../Images/Images1/Poweronly.webp'
import img13 from '../Images/Images1/Hotshot.webp'


import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Whatsappicon from './Whatsappicon';

function Home() {
    return (
        <>
            <Navbar />
            <div className="jumbotron jumbotron-fluid">
                <img src={img} className="img-fluid" alt="Responsive image" width={'100%'} />
            </div>
            
            {/* <div>
                <div class="card bg-dark text-white">
                    <img src={img2} class="img-fluid" alt="Responsive image" />
                    <div class="card-img-overlay">
                        <h5 class="card-title"><div className="container"><div className="row">
                            <div className="col"><br /><br /><br /><br /><br /><br />
                                <h1> <b>  Freight <br /> Dispatch <br /> Service</b></h1>
                            </div>
                            <div className="col"><br />
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
                                        <button type="submit" className="btn btn-warning">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div></div> </h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col"><br /><br /><br /><br /><br /><br />
                        <h1> <b>  Freight <br /> Dispatch <br /> Service</b></h1>
                    </div>
                    <div className="col"><br />
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
                                <button type="submit" className="btn btn-warning">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3>Home</h3>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col"> <h1>
                        Services <br />
                        and pricing
                    </h1></div>
                    <div className="col"><h1>
                        From 5% <br />
                        of gross

                    </h1></div>
                </div>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href=""> <div className=" card text-white" style={{ maxHeight: '25rem' }}>
                            <img src={img2} className="img-fluid" alt="Responsive image" width={'100%'} />
                            <div className="card-img-overlay">
                                <h1 className="card-title"> <b> 01</b></h1>
                                <h1 className="card-text"> <b> Truck <br /> Dispatching</b></h1>
                            </div>
                        </div></a>
                    </div>
                    <div className="col">
                        <a href="/"> <div className="card text-white" style={{ maxHeight: '25rem' }}>
                            <img src={img2} className="img-fluid" alt="Responsive image" width={'100%'} />
                            <div className="card-img-overlay">
                                <h1 className="card-title"> <b> 02</b></h1>
                                <h1 className="card-text"> <b> IFTA</b></h1>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href=""> <div className="card  text-white" style={{ maxHeight: '25rem' }}>
                            <img src={img3} className="img-fluid" alt="Responsive image" width={'100%'} />
                            <div className="card-img-overlay">
                                <h1 className="card-title"> <b> 03 </b> </h1>
                                <h1 className="card-text"> <b> Document Management <br /> & Paperwork</b></h1>
                            </div>
                        </div></a>
                    </div>
                    <div className="col">
                        <a href=""> <div className="card  text-white" style={{ maxHeight: '25rem' }}>
                            <img src={img4} className="img-fluid" alt="Responsive image" width={'100%'} />
                            <div className="card-img-overlay">
                                <h1 className="card-title"> <b> 04</b></h1>
                                <h1 className="card-text"> <b> Safety / Dot compliance</b></h1>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="">  <div className="card  text-white" style={{ maxHeight: '25rem' }}  >
                            <img src={img5} className="img-fluid" alt="Responsive image" width={'100%'} />
                            <div className="card-img-overlay">
                                <h1 className="card-title"> <b>05</b> </h1>
                                <h1 className="card-text"><b> Rate negotiation</b></h1>
                            </div>
                        </div></a>
                    </div>
                    <div className="col">
                        <a href=""> <div className="card text-white" style={{ maxHeight: '25rem' }} >
                            <img src={img6} className="img-fluid" alt="Responsive image" width={'100%'} />
                            <div className="card-img-overlay">
                                <h1 className="card-title"><b>06</b></h1>
                                <h1 className="card-text"> <b> Company Formation</b></h1>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div ><br /><br /><br />

            <div className="container">
                <h1>What is Logity Dispatch?</h1>
                <hr />
            </div>
            <div className="container">
                <div class="embed-responsive embed-responsive-21by9">
                    <iframe width="1112" height="480" class="embed-responsive-item" src="https://www.youtube.com/embed/_1liE33WYUY"></iframe>
                </div>
            </div >
            <div >
                <div class="card text-white">
                    <img class="card" src={img7} className="img-fluid" alt="Responsive image" />
                    <div class="card-img-overlay"><br /><br /><br /><br />
                        <h1 class="card-title text-center"><b> To Work <br />not talk</b></h1><br /><br /><br />
                        <div class="card-text "> <div class="row text-center">
                            <div class="col-md">
                                <h1> <b>5 000+</b></h1>
                                <h5>Loads Booked</h5>
                            </div>
                            <div class="col-md">
                                <h1><b> $7 500+ </b></h1>
                                <h5>Average Gross Revenue</h5>
                            </div>
                            <div class="col-md">
                                <b>58</b>
                                <h5>MIn Lbs Dispatched</h5>
                            </div>
                        </div></div>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div><br />
            <div className="container">
                <h1> <b> How To Get Started</b>  </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        Logity Dispatch's job is to provide the best loads in the market for every driver. Our expert team ensures that drivers from any region and state get high-quality and best-paying loads.
                        <hr />
                        <h5>01-Fill out the form or call us + 1 564-544-6567</h5><br />
                        <h5>02-Upload your MC Authority,W9 Form,abd Certificate of insurance</h5><br />
                        <h5>03-Sign the Dispatch greement completed by our team</h5><br />
                        <h5>04-We are all set.Let's get to work</h5><br />
                    </div>
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
                                <button type="submit" className="btn btn-warning">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <h1>Who can <br /> work with us</h1>
                <div class="row">
                    <div class="col-sm"><a href="/"><img src={img8} class="img-fluid" alt="Responsive image" /></a></div>
                    <div class="col-sm"><a href="/"><img src={img9} class="img-fluid" alt="Responsive image" /></a></div>
                    <div class="col-sm"><a href="/"><img src={img10} class="img-fluid" alt="Responsive image" /></a></div>
                </div>
                <div class="row">
                    <div class="col-sm"><a href="/"><img src={img11} class="img-fluid" alt="Responsive image" /></a></div>
                    <div class="col-sm"><a href="/"><img src={img8} class="img-fluid" alt="Responsive image" /></a></div>
                    <div class="col-sm"><a href="/"><img src={img13} class="img-fluid" alt="Responsive image" /></a></div>
                </div>
            </div > <br />
            {/* <div className="container">
                <h1><b> Blog</b></h1>
                <div className="row">
                    <div className="col-sm">
                        <a href="/"> <img src={img13} class="img-fluid" alt="Responsive image" /></a>
                    </div>
                    <div className="col-sm">
                        <a href="/"> <img src={img14} class="img-fluid" alt="Responsive image" /></a>
                    </div>
                    <div className="col-sm">
                        <a href="/"> <img src={img15} class="img-fluid" alt="Responsive image" /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <a href="/"> <img src={img16} class="img-fluid" alt="Responsive image" /></a>
                    </div>
                    <div className="col-sm">
                        <a href="/"> <img src={img17} class="img-fluid" alt="Responsive image" /></a>
                    </div>
                    <div className="col-sm">
                        <a href="/">  <img src={img18} class="img-fluid" alt="Responsive image" /></a>
                    </div>
                </div>
            </div> */}
            <Whatsappicon />
            <Footer />

        </>
    )
}

export default Home
