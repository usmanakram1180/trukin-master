import React from 'react'
import img from '../Images/3d-illustration-colorful-assignment-report-card-png-removebg-preview.png'
import img1 from '../Images/92099655_114094236915126_2046583248330424320_n-768x397.jpg'
import img2 from '../Images/rZ-q5UR5_400x400.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Assignment() {
    return (
        <>
            <Navbar />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#FEBD59' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b>Solve your Assignment Through Us

                            </b></h1>
                            <p style={{ color: 'white' }}>You Have to don’t worry about your assignment We are hear to help You In
                                your studies.
                            </p>
                        </div>
                        <div class="col">
                            <img src={img} class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <img src={img1} class="img-fluid" alt="" />
            </div>
            <br /><br />
            <div class="container my-2">
                <div class="row">
                    <div class="col-9">
                        <div class="container my-lg-5"></div>
                        <h1> <b> "We have Simple Rule just solve assignment as your own Work on it as your own"</b></h1>
                    </div>
                    <div class="col">
                        <img src={img2} class="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Assignment
