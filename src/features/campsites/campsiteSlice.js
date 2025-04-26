//import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { useSelector } from "react-redux";
import {mapImageURL} from '../../utils/mapImageURL'
import { baseUrl } from "../../app/shared/baseUrl";


export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, state: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: ''
};

const campsiteSlice = createSlice({
    name: 'campsites',
    initialState, // since the key and obj name are the same you can write it once
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
     
        }
    }
});

export const campsitesReducer = campsiteSlice.reducer;



export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray
}

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite)=> campsite.id.toString() === id.toString())
}


export const selectFeaturedCampsite = (state) => {
    return {
        featuredItem: state.campsites.campsitesArray.find(
            (campsite) => campsite.featured
        ),
        isLoading: state.campsites.isLoading,
        errMsg: state.campsites.errMsg
    };
};
