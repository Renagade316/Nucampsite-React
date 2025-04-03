import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap"
const DisplayCard = ({item})=> {
    const {image, name, description} = item
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
        </Card>
    )

}

export default DisplayCard