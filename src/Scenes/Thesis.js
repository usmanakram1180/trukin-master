import React from 'react'
import img from '../Images/certificate.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Thesis() {
    return (
        <>
            <Navbar />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#FEBD59' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b> Want Help In Thesis Don't worry We will help You.

                            </b></h1>
                        </div>
                        <div class="col">
                            <img src={img}
                                class="img-fluid" alt="certificate" /> <br />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer />
        </>
    )
}

export default Thesis
