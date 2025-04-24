import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
//import DisplayCard from './DisplayCard'
import {Col, Row} from 'reactstrap'
import{ selectFeaturedCampsite } from '../campsites/campsiteSlice'
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const DisplayList = () => {
    const items = useSelector((state) => [selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartner(state)])
    console.log(items);
    return (
        // Since where in Array map we need a key prop
        <Row> {items.map((item,idx) => {
            const {featuredItem, isLoading, errMsg} = item;
            if (isLoading) {
                return <Loading key={idx} />     
            }

            if (errMsg) {
                return <Error errMsg={errMsg} key = {idx}/>
            }

            return (
                featuredItem && (
                    <Col md className ='m-1' key={idx} >
                        <AnimatedDisplayCard item = {featuredItem} />
                    </Col>
                ) 
            )
        })}</Row>
    )
}

export default DisplayList