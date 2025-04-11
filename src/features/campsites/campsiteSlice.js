import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";
//import { useSelector } from "react-redux";

const initialState = {
    campsitesArray: CAMPSITES
};

const campsiteSlice = createSlice({
    name: 'campsites',
    initialState // since the key and obj name are the same you can write it once
});

export const campsitesReducer = campsiteSlice.reducer;



export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray
}

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite)=> campsite.id === parseInt(id))
}


export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite)=> campsite.featured)
}
