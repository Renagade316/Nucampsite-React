import {COMMENTS} from '../../app/shared/COMMENTS'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    commentsArray: COMMENTS
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload: ', action.payload)
            console.log('addComment sate.commentsArray', state.commentsArray)
            const newComment = {
                id: state.commentsArray.length + 1, //Works as long as you dont intend to delete a comment
                ...action.payload //Author, rating, a comment property
            }
            state.commentsArray.push(newComment);
        }
    }
})

export const commentsReducer = commentsSlice.reducer;

export const {addComment} = commentsSlice.actions
export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId))
}