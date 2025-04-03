import { Container } from "reactstrap"
import DisplayList from '../features/display/DisplayList'
import SubHeader from '../components/SubHeader'


const HomePage = () => {
    return (
        <Container>
            <SubHeader current = "Home" />
            <DisplayList />
            <> {
                console.log('Display list \n', DisplayList)
            }
            </>
        </Container>
    )
} 

export default HomePage