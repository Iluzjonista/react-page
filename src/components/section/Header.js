import React, {Component} from 'react';
import {Parallax} from 'react-parallax';
import img0 from '../assets/images/5d01885ce8bafe13450c0772_sky-min.png'
import img1 from '../assets/images/5d01885ba5f05d35beafc28f_midground-min.png'
import {Container, Row} from "react-bootstrap";

class Header extends Component {

    render() {
        return (
            <section className="header">
                <Parallax className="header__image"
                          blur={{min: -15, max: 15}}
                          bgImage={img0}
                          bgClassName="header__image-pic"
                          bgImageAlt="clouds"
                    // strength={500}
                >
                    <Parallax className="header__image"
                              blur={{min: -5, max: 5}}
                              bgImage={img1}
                              bgClassName="header__image-pic"
                              bgImageAlt="mountains"
                              strength={20}
                    >
                        <div className='header__image--bear'>
                            <Container>
                                <Row className='header__row'>
                                    <Parallax className='header__row--textarea'
                                              blur={{min: -5, max: 5}}
                                              strength={200}
                                    >
                                        <div className='header__row--textarea-title'>
                                            Explore
                                        </div>
                                        <div className='header__row--textarea-text'>
                                            Join us for a week of hiking, team-bonding and digital detoxing. This month,
                                            one-time only in Kamchatka
                                        </div>
                                    </Parallax>
                                </Row>
                            </Container>
                        </div>
                    </Parallax>
                </Parallax>
            </section>
        )
    }
}

export default Header;