import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsiteSlice';
import { useSelector } from 'react-redux';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites)

    return (
        <Row className = "ms-auto">{campsites.map((campsite)=> {
            return (
                <Col md='5'className='m-4' key={campsite.id} >
                    <CampsiteCard campsite={campsite} />
                </Col>)
        })}</Row>
    )

}

export default CampsitesList