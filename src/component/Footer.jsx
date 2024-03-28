import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaVimeoV, FaLinkedin,FaPaperPlane  } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-area">
                    <Container>
                        <div className="footer-main">
                            <Row className='align-items-center'>
                                <Col lg={3} md={6} sm={6}>
                                    <div className='footer-wid'>
                                        <div className='footer-img'>
                                            <a href="#">
                                                <img src={require('../img/asset 50.png')} />
                                            </a>
                                            <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lessons as best plans to knowledge.</p>
                                        </div>
                                        <div className='footer-icon'>
                                            <a href="#">
                                                <FaFacebookF />
                                            </a>
                                            <a href="#">
                                                <FaTwitter />
                                            </a>
                                            <a href="#">
                                                <FaVimeoV />
                                            </a>
                                            <a href="#">
                                                <FaLinkedin />
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6}>
                                    <div className='footer-wid2'>
                                        <h3>Online Platform</h3>
                                        <ul>
                                            <li><a href="#">Proper Guidelines</a></li>
                                            <li><a href="#">Digital Library</a></li>
                                            <li><a href="#">Compare Us</a></li>
                                            <li><a href="#">Become Instructors</a></li>
                                            <li><a href="#">Build Career</a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6}>
                                    <div className='footer-wid2'>
                                        <h3>Browse Courses</h3>
                                        <ul>
                                            <li><a href="#">Development</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Health & Fitness</a></li>
                                            <li><a href="#">Life Styles</a></li>
                                            <li><a href="#">Photography</a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6}>
                                    <div className='footer-wid2'>
                                        <h3>Insight Community</h3>
                                        <ul>
                                            <li><a href="#">Global Partnerss</a></li>
                                            <li><a href="#">Forum</a></li>
                                            <li><a href="#">Help & Support</a></li>
                                            <li><a href="#">Community</a></li>
                                            <li><a href="#">Documentation</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='copyright-area'>
                            <Container>
                                <Row className='align-items-center'>
                                    <Col lg={3} md={6} sm={6}>
                                        <div className='copyright-text position-relative'>
                                            <p>© Copyrighted & Designed by <span>BDevs</span></p>
                                        </div>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <div className='copyright-supp d-flex align-items-center'>
                                            <div>
                                                <TfiHeadphoneAlt />
                                            </div>
                                            <div>
                                                <p>Have a question? Call us 24/7</p>
                                                <h5>(987) 547587587</h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={12}>
                                        <div className='copy-sub'>
                                            <form>
                                                <div className='inp position-relative'>
                                                    <input type="email" placeholder="Enter Email" />
                                                    <button type='submit' className='d-flex align-items-center justify-content-center'> Subscribe <span><FaPaperPlane /></span>  </button>
                                                </div>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    )
}
