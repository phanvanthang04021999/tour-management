import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png"

import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeaturedToursList from "../components/Featured-tours/FeaturedToursList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = ()=>{
    return (
        <>
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'}/>
                                <img src={worldImg} alt=""/>
                            </div>
                            <h1>
                                Traveling opens the door to creating {""}
                                <span className="highlight">memories</span>  
                            </h1>
                            <p>Hoi an travel ...................................</p>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box">
                           <img src={heroImg} alt=""/>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box mt-4">
                           <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box mt-5">
                           <img src={heroImg2} alt=""/>
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
        {/*---------------------------------------------*/}
        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services__subtitle">What we serve</h5>
                        <h3 className="services__title">We offer our best services</h3>
                    </Col>
                    <ServicesList/>
                </Row>
            </Container>
        </section>
        {/*---------------------------------------------*/}
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <Subtitle subtitle={"Explore"}/>
                     <h2 className="featured__tour-title">Our featured tours</h2>
                    </Col>
                    <FeaturedToursList/>
                </Row>
            </Container>
        </section>
        {/*---------------------------------------------*/}
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience__content">
                            <Subtitle subtitle={"Experience"}/>
                            <h2>With our all experience <br/> we will serve you</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                <br/>
                                Quar aliquam, hic tempora imventore suscipit unde.
                            </p>
                        </div>
                        <div className="counter__wrapper d-flex align-align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="experience__img">
                            <img src={experienceImg} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
            {/*---------------------Gallery------------------------*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Gallery"}/>
                            <h2 className="gallery__title">Visit our customers tour gallery</h2>
                        </Col>
                        <Col lg="12">
                            <MasonryImagesGallery/>
                        </Col>
                    </Row>
                </Container>
            </section>
               {/*---------------------Testimonial------------------------*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Fan love"}/>
                            <h2 className="testimonial__title">What our fans say about us</h2>
                        </Col>
                        <Col lg="12">
                            <Testimonial/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter/>
        </>
    )
};

export default Home;