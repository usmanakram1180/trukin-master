import React from 'react'
import img from '../Images/images-removebg-preview.png'
import img1 from '../Images/statistics-assignment_5656b61ac02ee.jpg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
function Statistics() {
    return (
        <>
            <Navbar />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#FEBD59' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b> Statistic Assignment
                            </b></h1>
                            <p style={{ color: 'white' }}>You Have to don’t worry about your assignment We are hear to help You In your studies.

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
                <img src={img1} class="img-fluid" alt="Responsive image" />
            </div><br />
            <Footer />
        </>
    )
}

export default Statistics
