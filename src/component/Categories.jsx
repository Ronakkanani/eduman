import React from 'react'
import icon1 from '../img/asset 56.svg'
import icon2 from '../img/asset 57.svg'
import icon3 from '../img/asset 58.svg'
import icon4 from '../img/asset 59.svg'
import icon5 from '../img/asset 60.svg'
import icon6 from '../img/asset 61.svg'
import icon7 from '../img/asset 62.svg'
import icon8 from '../img/asset 63.svg'
import icon9 from '../img/asset 64.svg'
import { Col } from 'react-bootstrap';

export default function Categories() {

    const data = [
        {
            icon: icon1,
            title: 'Development',
            para: 'Take your journey with this course',
        },
        {
            icon: icon2,
            title: 'Business',
            para: 'Take your journey with this course',
        },
        {
            icon: icon3,
            title: 'Data Science',
            para: 'Discover the data science',
        },
        {
            icon: icon4,
            title: 'Marketing',
            para: 'Take up your self in the next level',
        },
        {
            icon: icon5,
            title: 'Life Styles',
            para: 'Improved your life style course',
        },
        {
            icon: icon6,
            title: 'Photography',
            para: 'Become the great photographer',
        },
        {
            icon: icon7,
            title: 'Art & Design',
            para: 'Grow your design skills',
        },
        {
            icon: icon8,
            title: 'Health & Fitness',
            para: 'Enjoy the health life with fitness',
        },
        {
            icon: icon9,
            title: 'Music',
            para: 'Improve your self with music',
        },
    ]

    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <Col xl={4} lg={6} md={6}>
                            <div className="catagory-wrapper d-flex align-items-center ">
                                <div className="ca_icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className="ca_content">
                                    <h3>{item.title}</h3>
                                    <span>{item.para}</span>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </>
    )
}
