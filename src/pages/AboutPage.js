import {Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap'
import SubHeader from '../components/SubHeader'
import PartnersList from '../features/partners/PartnersList'

const AboutPage = ()=> {
    return(
        <Container>
            <Container>
                <SubHeader current = "About" />
            </Container>
            <Row className = "row-content">
                <Col sm="6">
                    <h3>Our Mission</h3>
                    <p>
                        We present a curated database of the best campsites in the
                        vast woods and backcountry of the World Wide Web Wilderness.
                        We increase access to adventure for the public while
                        promoting safe and respectful use of resources. The expert
                        wilderness trekkers on our staff personally verify each
                        campsite to make sure that they are up to our standards. We
                        also present a platform for campers to share reviews on
                        campsites they have visited with each other.
                    </p>
                </Col> 
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <CardBody>
                                <dl className='row'>
                                    <dt className='col-6'>Founded</dt>
                                    <dd className='col-6'>February 3, 2016</dd>
                                    <dt className='col-6'>No. of Campsites in 2019</dt>
                                    <dd className='col-6'>563</dd>
                                    <dt className='col-6'>No. of Reviews in 2019</dt>
                                    <dd className='col-6'>4388</dd>
                                    <dt className='col-6'>Employees</dt>
                                    <dd className='col-6'>42</dd>
                                </dl>
                            </CardBody>
                        </CardHeader>
                    </Card>
                </Col>
                <Col sm='6'>
                    <Card className='bg-light mt-3'>
                        <CardHeader>
                            <CardBody>
                                <blockquote> 
                                    I will not follow where the path may lead, but I
                                    will go where there is no path, and I will leave
                                    a trail.
                                </blockquote>
                                <footer className='blockquote-footer'>
                                    Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </CardBody>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
            <Row className = "row-content">
                <Col xs='12'><h3>Community Partners</h3> <PartnersList /></Col>
            </Row>
        </Container>
    )

}

export default AboutPage