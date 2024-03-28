import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronDown, FaPlus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className='sticky-top bg-white h-main'>
                <div className='header-area'>
                    <Container fluid>
                        <Row className='align-items-center justify-content-between'>
                            <Col className='col-auto'>
                                <div className="header-left d-flex align-items-center">
                                    <div className="header-logo">
                                        <Link to='/'><img src={require('../img/asset 3.png')} /></Link>
                                    </div>
                                    <div className="main-menu d-none d-xl-block">
                                        <nav>
                                            <ul className='d-flex text-capitalize'>
                                                <li><Link to='/'>home</Link></li>
                                                <li><a href="#">course</a></li>
                                                <li><a href="#">shop</a></li>
                                                <li><Link to='/about'>About</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-auto'>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className='header-cart'>
                                        <AiOutlineShoppingCart />
                                        <span className="item-num">3</span>
                                    </div>
                                    <div className="si-in d-none d-md-block text-capitalize">
                                        <div className="si-inr">
                                            <a href="#">sign in</a>
                                        </div>
                                    </div>
                                    <a href="#" className="lasta d-none d-md-block text-capitalize">sign up</a>

                                    <div className="menu-bar ms-4 d-xl-none d-block" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">

                                        {/* header offcanvas start ================= */}

                                        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                            <div className="offcanvas-header">

                                                <button type="button" className="btn-close shadow-none text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">

                                            </div>
                                        </div>

                                        {/* header offcanvas end ================= */}

                                        <div className="bar-icon d-flex flex-column justify-content-between ">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        </>
    )
}
