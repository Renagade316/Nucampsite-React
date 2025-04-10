import { Col } from "reactstrap";
import Comment from './Comments'
import {selectCommentsByCampsiteId} from './commentSlice'
import CommentForm from "../../components/CommentForm";

const CommentsList = ({campsiteId}) => {
    const comments = selectCommentsByCampsiteId(campsiteId)

    if (comments && comments.length > 0 ) {
        return (
            <Col md='4' className = 'm-1'>
                <h4>Comments</h4>
                {comments.map((comment)=> {
                    return <Comment key={comment.id} comment={comment} />
                })}
                <CommentForm campsiteId = {campsiteId}/>
            </Col>
        )
    }
    return (
        <Col md='5' className='m-1' >
            There are no comments for this campsite
        </Col>
    )
}

export default CommentsList