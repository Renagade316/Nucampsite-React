import {Container, Row, Col} from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <Container>
            <Row>
                <Col xs={{ size: 4, offset: 1 }} sm='2'>
                    <h5>Links</h5>
                    <NavLink className = 'nav-link' to='/'>
                        Home
                    </NavLink>
                    <NavLink className = 'nav-link' to='/directory'>
                        Directory
                    </NavLink>
                    <NavLink className = 'nav-link' to='/contact'>
                        Contact
                    </NavLink>
                    <NavLink className = 'nav-link' to='/about'>
                        About
                    </NavLink>
                </Col>

                <Col xs='6' sm='3' className='text-center'>
                <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                </Col>
                <Col sm='4' className='text-center'>
                <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> campsites@nucamp.co
                        </a>
                </Col>
            </Row>
        </Container>

    )
}

export default Footer