import React from 'react'
import img from '../Images/ggg-removebg-preview.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Quizez() {
    return (
        <>
            <Navbar />
            <div class="container my-2"></div>
            <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#FEBD59' }}>
                <div class="container my-2">
                    <div class="row">
                        <div class="col-9">
                            <div class="container my-lg-5"></div>
                            <br /><br />
                            <h1 style={{ color: 'white' }}> <b> Face difficulty in solve your class Quiz

                            </b></h1>
                            <p style={{ color: 'white' }}>Don’t Worry we will help you in solve your quiz
                            </p>
                        </div>
                        <div class="col"><br /><br />
                            <img src={img} class="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div><br /><br />
            <div class="container my-2" style={{ textAlign: 'center' }}>
                <h1>Reasons To Choose Our Quiz Writing Help</h1><br />
                <p class="text-left">There are so many reason to trust on us because we have a good team with a good knowledge.
                    and have a good past history and our student are so happy from us and satisfied from the grades. They trust
                    on us and happy from the results.</p>
            </div>
            <div class="contaier">
            </div><br /><br />
            <Footer />
        </>
    )
}

export default Quizez
