import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import { FaArrowRightLong, FaCheck, FaCircleCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

export default function Studentsec() {
    return (
        <>
            <div className='student-choose spacer2'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className='student-wrapper'>
                                <h2>Why Students
                                    <span className="down-line"> Choose </span>
                                    Us for Gain Their Knowledge
                                </h2>
                                <p>Helping employees gain skills and providing career development often take a back seat to business priorities but workplace better right now. Seventy percent of workers think that.</p>
                                <ul>
                                    <li><FaCircleCheck />Free for physically handcraft</li>
                                    <li><FaCircleCheck />Easy to enroll courses</li>
                                    <li><FaCircleCheck />Course certificate for particular course</li>
                                </ul>
                                <a href="#">More about us</a>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className='position-relative'>
                                <div className='shap01'></div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='position-relative'>
                                <div className='shap02'></div>
                                <div className='shap03 d-none d-lg-block'>
                                    <img src={require('../img/asset 28.png')} />
                                </div>
                                {/* <div className='shap04'>
                                    <img src={require('./img/asset 29.png')}/>
                                </div> */}
                                {/* <div className='shap05'>
                                    <img src={require('./img/asset 31.png')} className='img-fluid'/>
                                </div> */}
                                <div className='shap07'>
                                    <img src={require('../img/asset 33.png')} className='img-fluid' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
