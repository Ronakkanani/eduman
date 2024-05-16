import React from 'react'
import Header from './Header'
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlus, FaStar, FaArrowRight, FaStarHalfAlt } from "react-icons/fa";
import { FaArrowRightLong, FaCheck, FaCircleCheck } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { PiChalkboardTeacher, PiCertificate } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { TfiBlackboard } from "react-icons/tfi";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './Footer';
import Studentsec from './Studentsec';
import Categories from './Categories';

export default function Home() {

    const options = {
        margin: 20,
        loop: true,
        dotsEach: true,
        // responsiveClass: true,
        // nav: false,
        dots: true,
        autoplay: true,
        // slideBy: 3,
        smartSpeed: 500,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,

            },
            1199: {
                items: 3,

            }
        },
    };

    const options1 = {
        margin: 20,
        loop: true,
        dotsEach: true,
        // responsiveClass: true,
        // nav: false,
        dots: false,
        autoplay: true,
        // slideBy: 3,
        smartSpeed: 500,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,

            },
            1199: {
                items: 5,

            }
        },
    };

    return (
        <>


            <div className="bg-img">
                {/* <Header/> */}
                <div className="bg-text position-relative">
                    <Container>
                        <Row>
                            <Col lg={6} md={9}>
                                <div className="inner-text">
                                    <h5>Discover your journey</h5>
                                    <h2>
                                        Discover
                                        <span className="down-line"> 4500+ </span>
                                        Courses from top Instructors Around the World
                                    </h2>
                                    <p>Take your learning organization to the next level. to the next level. Who'll share their
                                        knowledge to people around the world.</p>
                                    <a href="#">View all course</a>
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className="inner-right position-relative">
                                    <img src={require('../img/asset 5.png')} className='shap1 d-none d-lg-block' alt="" />
                                    <img src={require('../img/asset 6.png')} className='shap2 d-none d-xl-block' alt="" />
                                    <img src={require('../img/asset 7.png')} className='shap3 d-none d-lg-block' alt="" />
                                    <div className="shap4 d-none d-lg-block">
                                        <img src={require('../img/asset 8.png')} alt="" />
                                        <h5>Top Rated Instructors</h5>
                                    </div>
                                    <div className="shap5 d-none d-lg-block">
                                        <div className="shap5-card d-flex align-items-center">
                                            <img src={require('../img/asset 9.png')} alt="" />
                                            <img src={require('../img/asset 10.png')} alt="" />
                                            <img src={require('../img/asset 11.png')} alt="" />
                                            <img src={require('../img/asset 12.png')} alt="" />
                                            <span className='d-flex justify-content-center align-items-center'><FaPlus /></span>
                                        </div>
                                        <h5>
                                            More than
                                            <span>21,500+</span>
                                            students enrolled around the world
                                        </h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='top-catagory spacer' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col className='col-auto text-center'>
                            <div className='section-title'>
                                <h2>
                                    Explore<br />Our Top
                                    <span className="down-line up-line"> Categories </span>
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Categories />
                    </Row>
                </Container>
            </div>
            <div className="course-area spacer" data-aos="fade-up">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className='section-title cour-title'>
                                <h2>
                                    Discover<br />World's Best
                                    <span className="down-line"> Courses </span>
                                </h2>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div>
                                <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active border-0 bg-transparent" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            View All</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Data Science</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                            Development</button>
                                    </li>
                                </ul>
                                {/* ============================== */}
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                        <Row>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 16.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>Master Google Docs: Free online documents for use</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 18.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>Write Better Emails: Tactics for Smarter Team</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 20.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>Python and Django Full Stack Web Developer</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 22.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>Data Science Real-Life Data Science Exercises Included</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 24.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>Data Science Real-Life Data Science Exercises Included</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>Become a Super Human: Naturally & Safely Boost</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 26.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                        <Row>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>Data Science Real-Life Data Science Exercises Included</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 24.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>Data Science Real-Life Data Science Exercises Included</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                                        <Row>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 16.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>Master Google Docs: Free online documents for use</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 18.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={6} md={6}>
                                                <div className="cours-inner">
                                                    <div className='course-cart'>
                                                        <div className="cart-inner">
                                                            <span><a href="#">Development</a></span>
                                                            <h3>Python and Django Full Stack Web Developer</h3>
                                                            <div className='cart-levl'>
                                                                <h5>Level :
                                                                    <span> Beginner </span>
                                                                </h5>
                                                                <p>Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family</p>
                                                            </div>
                                                            <div className='cart-text'>
                                                                <ul>
                                                                    <li><FaCheck /><a href="#">Scratch to HTML</a></li>
                                                                    <li><FaCheck /><a href="#">Learn how to code in Python</a></li>
                                                                    <li><FaCheck /><a href="#">Unlimited backend database creation</a></li>
                                                                    <li><FaCheck /><a href="#">Adobe XD Tutorials</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className='course-action d-flex justify-content-between align-items-center'>
                                                                <a href="#">View Details</a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <HiOutlineShoppingCart />
                                                                </a>
                                                                <a href="#" className='d-flex justify-content-center align-items-center'>
                                                                    <CiHeart />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='course-thumb'>
                                                        <img src={require('../img/asset 22.jpeg')} className='img-fluid' />
                                                    </div>
                                                    <div className='cours-card'>
                                                        <div className='course-heading d-flex justify-content-between align-items-center'>
                                                            <a href="#">Development</a>
                                                            <span>
                                                                <FaStar />
                                                                4.9 (25)
                                                            </span>
                                                        </div>
                                                        <div className='cours-dele'>
                                                            <h3>WordPress Development Course for Plugins & Themes</h3>
                                                        </div>
                                                        <div className='cours-price'>
                                                            <span>$47.00 </span>
                                                            <del>$75.50</del>
                                                        </div>
                                                        <div className='cours-tutor d-flex align-items-center'>
                                                            <img src={require('../img/asset 17.png')} />
                                                            <span>Danial</span>
                                                        </div>
                                                    </div>
                                                    <div className="cours-footer d-flex align-items-center justify-content-between">
                                                        <div className='course-lessson'>
                                                            <TfiBlackboard />
                                                            <span>12 Lessons</span>
                                                        </div>
                                                        <div className='course-deteals'>
                                                            <span>View Details</span>
                                                            <FaArrowRightLong />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                {/* ============================== */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="features-area">
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col lg={4} md={6}>
                            <div className='features-wrapper d-flex align-items-center'>
                                <div>
                                    <PiChalkboardTeacher />
                                </div>
                                <div>
                                    <h3>Learn with skills over 2,420 courses</h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='features-wrapper d-flex align-items-center'>
                                <div>
                                    <PiCertificate />
                                </div>
                                <div>
                                    <h3>Earn certificates and degrees</h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='features-wrapper d-flex align-items-center'>
                                <div>
                                    <LiaLaptopCodeSolid />
                                </div>
                                <div>
                                    <h3>Learn from anywhere, any time</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Studentsec></Studentsec>
            <div className='testimonial-area'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <div className='text-center tesi-title'>
                                <h2>
                                    What Students <br /> Think and Say About
                                    <span className="down-line up-line"> Eduman </span>
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className='slider1'>
                            <OwlCarousel className='owl-theme' {...options} nav>
                                <div className='item'>
                                    <div className="tesi_slider position-relative">
                                        <div className='d-flex align-items-center tesi-text'>
                                            <div>
                                                <img src={require('../img/asset 37.png')} alt="" className='img-fluid' />
                                            </div>
                                            <div>
                                                <h4>Richard Joseph</h4>
                                                <span>Student</span>
                                            </div>
                                        </div>
                                        <img src={require('../img/asset 35.png')} alt="" className='tesi_shap' />
                                        <h3>Helpful Instructors !</h3>
                                        <p>Thanks to our marketplace model, our content keeps pace with market changes. You’ll find courses on the latest technologies and business practice and more!</p>
                                        <div className="tesi-icon">

                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="tesi_slider position-relative">
                                        <div className='d-flex align-items-center tesi-text'>
                                            <div>
                                                <img src={require('../img/asset 34.png')} alt="" className='img-fluid' />
                                            </div>
                                            <div>
                                                <h4>Richard Joseph</h4>
                                                <span>Student</span>
                                            </div>
                                        </div>
                                        <img src={require('../img/asset 35.png')} alt="" className='tesi_shap' />
                                        <h3>Helpful Instructors !</h3>
                                        <p>Thanks to our marketplace model, our content keeps pace with market changes. You’ll find courses on the latest technologies and business practice and more!</p>
                                        <div className="tesi-icon">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfAlt />
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="tesi_slider position-relative">
                                        <div className='d-flex align-items-center tesi-text'>
                                            <div>
                                                <img src={require('../img/asset 36.png')} alt="" className='img-fluid' />
                                            </div>
                                            <div>
                                                <h4>Richard Joseph</h4>
                                                <span>Student</span>
                                            </div>
                                        </div>
                                        <img src={require('../img/asset 35.png')} alt="" className='tesi_shap' />
                                        <h3>Helpful Instructors !</h3>
                                        <p>Thanks to our marketplace model, our content keeps pace with market changes. You’ll find courses on the latest technologies and business practice and more!</p>
                                        <div className="tesi-icon">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className='browser-course'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='bro-co-w'>
                                <div className='bro-co-bg'>
                                    <img src={require('../img/asset 38.jpeg')} alt="" />
                                </div>
                                <div className='bro-co-con'>
                                    <span>Start from today</span>
                                    <h3>Become an instructor and spread your knowledge</h3>
                                    <a href="#">View details</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='bro-co-w'>
                                <div className='bro-co-bg'>
                                    <img src={require('../img/asset 39.jpeg')} alt="" />
                                </div>
                                <div className='bro-co-con'>
                                    <span>Discover your gain</span>
                                    <h3>Keep your skilled centers of excellence competitive</h3>
                                    <a href="#">Browse courses</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='education-area1 position-relative'>
                <Container>
                    <img src={require('../img/asset 42.png')} alt="" className='edu-shap1' />
                    <img src={require('../img/asset 32.png')} alt="" className='edu-shap2' />
                    <img src={require('../img/asset 40.png')} alt="" className='edu-shap3' />

                    <Row>
                        <Col lg={4} className='offset-lg-2'>
                            <div className='edu-left'>
                                <img src={require('../img/asset 43.png')} alt="" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='edu-right'>
                                <h2>
                                    Transform Your Life Through
                                    <span className="down-line "> Education </span>
                                </h2>
                                <p>Helping employees gain skills and providing career development often take a back seat to business priorities but workplace.</p>
                                <a href="#">Watch how to start</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='slider-2'>
                <Container>
                    <Row>
                        <div className='slider2'>
                            <OwlCarousel className='owl-theme d-flex align-items-center' {...options1} nav>
                                <div class='item'>
                                    <div>
                                        <img src={require('../img/asset 49.png')} />
                                    </div>
                                </div>
                                <div class='item'>
                                    <div>
                                        <img src={require('../img/asset 44.png')} />
                                    </div>
                                </div>
                                <div class='item'>
                                    <div>
                                        <img src={require('../img/asset 45.png')} />
                                    </div>
                                </div>
                                <div class='item'>
                                    <div>
                                        <img src={require('../img/asset 46.png')} />
                                    </div>
                                </div>
                                <div class='item'>
                                    <div>
                                        <img src={require('../img/asset 47.png')} />
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    )
}
