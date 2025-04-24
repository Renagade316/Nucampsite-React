import { Col } from "reactstrap";

const Error = ({errMsg})=> {
    console.log('Loading...')
    return (
        <Col>
            <h4>{errMsg}</h4>
        </Col>
    )
}

export default Error;