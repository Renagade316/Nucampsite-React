//import {COMMENTS} from '../../app/shared/COMMENTS'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../../app/shared/baseUrl'

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch (baseUrl + 'comments');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = response.json();
        return data;
    }
)

export const postComment = createAsyncThunk(
    'comments/postComment',
    async (comment, {dispatch}) => {
        const response = await fetch((baseUrl + 'comments'), {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: { 'Content-Type': 'application/json' }
         })

        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        {dispatch = addComment(data)}
    }
)

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
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
    ,},
        extraReducers: {
            [fetchComments.pending]: (state) => {
                state.isLoading = true;
            },
            [fetchComments.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.commentsArray = action.payload;

            },
            [fetchComments.rejected]: (state, action) => {
                state.isLoading = false;
                state.errMsg = action ? action.error.message: 'Fetch failed';
            },
            [postComment.rejected]: (state, action) => {
                alert (
                    'Your comment could not be poste\n Error: ' +
                    (action.error ? action.error.message: 'fetch failed')
                )
            }
        }
})

export const commentsReducer = commentsSlice.reducer;

export const {addComment} = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId.toString() === campsiteId.toString())
}