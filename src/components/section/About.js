import React, {Component} from 'react';
import Slider from 'react-slick';
import {Container, Row} from "react-bootstrap";


class About extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToScroll: 4,
            slidesToShow: 4
        }
        return (
            <Container className='about'>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                </Slider>
            </Container>
        )
    }
}

export default About;