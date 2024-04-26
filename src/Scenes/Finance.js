import React from 'react'
import img from '../Images/finance-assignment-sample-removebg-preview.png';
import img1 from '../Images/Finance-assignment-help.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

function Finance() {
    return (
        <>
            <Navbar />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#FEBD59' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b>Finance Assignment

                            </b></h1>
                            <p style={{ color: 'white' }}>YYou Have to don’t worry about your assignment We are hear to help You In your studies.
                            </p>
                        </div>
                        <div class="col">
                            <img src={img} class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div class="text-center">
                <img src={img1} alt="Responsive image" />
            </div><br />
            <Footer />
        </>
    )
}

export default Finance
