import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap"
import {useState, useEffect} from 'react'
import { useSpring, animated } from "react-spring"
const AnimatedDisplayCard = ({item})=> {
    const [toggle, setToggle] = useState(false)
    const {image, name, description} = item

    const animatedStyle = useSpring({
        opacity: toggle ? 1: 0,
        transform: toggle ? 'scale(1,1)': 'scale(1, 0)',
        config: {duration: 5000} //config takes an object as a property
        //Durations is how long it will last and 500 is in miliseconds
    })

    useEffect(()=> {
        setToggle(true)
    }, [])
    return (
        <animated.div style ={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </Card>
        </animated.div>
    )

}

export default AnimatedDisplayCard