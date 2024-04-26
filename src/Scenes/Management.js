import React from 'react'
import img from '../Images/Project-Management-Assignment-Help-in-India-removebg-preview.png'
import img1 from '../Images/riskmanagement-min-768x391.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Management() {
    return (
        <>
            <Navbar />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#FEBD59' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b> Are you unable to solve your management Task?
                                Don’t worry we are hear


                            </b></h1>
                            <p style={{ color: 'white' }}>Don’t worry we are hear

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
            <br /><br />
            <Footer />
        </>
    )
}

export default Management
