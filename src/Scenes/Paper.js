import React from 'react'
import img from '../Images/Capture3.PNG'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Paper() {
    return (
        <>
            <Navbar />
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#FEBD59' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <h1 style={{ color: 'white' }}> <b> Hire a Helper to solve your exam

                            </b></h1>
                            <p style={{ color: 'white' }}>We are service provider and solve your exam with our best team and Hard
                                working Passionate team.
                            </p>
                        </div>
                        <div class="col">
                            <img src={img}
                                class="img-fluid" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div class="container my-2" style={{ textAlign: 'center' }}>
                <h1><b> "Paper Writing is the Art and we are the Artist"</b></h1><br />
            </div>
            <div class="container my-2" style={{ textAlign: 'center' }}>
                <h1><b> Why us!
                </b></h1><br />
            </div>
            <div class="container my-4">
                <div class="row">
                    <div class="col">
                        <h5>EXPERT WRITERS</h5>
                        <p class="text-left">We have a expert writer with a expert team and have a good knowledge in their own
                            domain.</p>
                    </div>
                    <div class="col">
                        <h5>EFFECTIVE LANGUAGE</h5>
                        <p class="text-left">Our team is expert in their own domain and in their Own Knowledge.</p>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                        <h5>SAFE AND CONFIDENTIAL</h5>
                        <p class="text-left">We provide your written exam safe and provide confidential exam and not spread
                            around the people</p>
                    </div>
                    <div class="col">
                        <h5>SAFE AND CONFIDENTIAL</h5>
                        <p class="text-left">We have a very high accuracy of securing a grade and have a grading marks</p>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                        <h5>SAFE AND CONFIDENTIAL</h5>
                        <p class="text-left">Our team is expert in their own domain and in their Own Knowledge.</p>
                    </div>
                    <div class="col">
                        <h5>SAFE AND CONFIDENTIAL</h5>
                        <p class="text-left">Our team is expert in their own domain and in their Own Knowledge.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Paper
