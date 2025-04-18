import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
//import DisplayCard from './DisplayCard'
import {Col, Row} from 'reactstrap'
import{ selectFeaturedCampsite } from '../campsites/campsiteSlice'
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux";
const DisplayList = () => {
    const items = useSelector((state) => [selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartner(state)])
    console.log(items);
    return (
        <Row> {items.map((item,idx) => {
            return (
                item && (
                    <Col md className ='m-1' key={idx} >
                        <AnimatedDisplayCard item = {item} />
                    </Col>
                ) 
            )
        })}</Row>
    )
}

export default DisplayList