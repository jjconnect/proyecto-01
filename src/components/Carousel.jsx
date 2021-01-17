import React from 'react'
import '../css/Carousel.css'

const Carousel = () => {
    return (
        <div>
            <div className="container mt-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/originals/46/96/66/469666d5c06357070139208d90efd769.jpg" className="imagez" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="https://placervial.com/wp-content/uploads/2019/09/MB-Vision-EQS-01.jpg" className="imagez" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/originals/16/55/e4/1655e4ffb9556d55f37a2cc1a93d1863.png" className="imagez" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="https://thumbs.dreamstime.com/b/coche-viejo-oxidado-61070952.jpg" className="imagez" alt="..."></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Carousel
