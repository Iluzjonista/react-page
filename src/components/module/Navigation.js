import React, {Component} from 'react';

import {Nav, Container, Navbar} from "react-bootstrap";

class Navigation extends Component {
    state = {
        colorFont: 'dark',
        colorBg: 'none'
    }

    listenScrollEvent = e => {
        let height = window.innerHeight;
        if (window.scrollY > height) {
            this.setState({colorFont: 'dark', colorBg: 'dark'})
        } else {
            this.setState({colorFont: 'dark', colorBg: 'none'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <Navbar bg={this.state.colorBg} expand="lg" variant={this.state.colorFont} fixed="top">
                <Container>
                    <Navbar.Brand href="#">React page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;