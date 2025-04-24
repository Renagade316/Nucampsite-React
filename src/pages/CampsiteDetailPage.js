import {Container, Row} from 'reactstrap'
import {useParams} from 'react-router-dom'
import { selectCampsiteById } from '../features/campsites/campsiteSlice'
import CampsiteDetail from '../features/campsites/CampsiteDetail'
import CommentsList from '../features/comments/CommentsList'
import SubHeader from '../components/SubHeader'
import { useSelector } from 'react-redux'
import Error from '../components/Error'
import Loading from '../components/Loading'

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);

    // Only fetch campsite data once loading is complete
    const campsite = useSelector((state) => {
        if (!isLoading && !errMsg) {
            return selectCampsiteById(campsiteId)(state);
        }
        return null;
    });

    const allCampsites = useSelector((state) => state.campsites.campsitesArray);
    console.log("ALL:", allCampsites);

    let content;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else if (!campsite) {
        content = <div>Campsite not found.</div>;
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        );
    }

    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
};

export default CampsiteDetailPage;
