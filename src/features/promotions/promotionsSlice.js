import {PROMOTIONS} from '../../app/shared/PROMOTIONS'
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../../app/shared/baseUrl'
import { mapImageURL } from '../../utils/mapImageURL'

export const fetchPromotions = createAsyncThunk(
    'promotions/fetchPromotions',
    async() => {
        const response = await fetch (baseUrl + 'promotions')
        if (!response.ok) {
            return Promise.reject('Unable to fetch, state: ', response.status);
        }
        const data = await response.json();
        return data;
    }
)

const initialState = {
    promotionsArray: [],
    isLoading: true,

}

const promotionSlice = createSlice({
    name:'promotions',
    initialState,
    errMsg: '',
    reducers: '',
    extraReducers: {
        [fetchPromotions.pending]: (state) => {
             state.isLoading = true;
        },
        
        [fetchPromotions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.promotionsArray = mapImageURL(action.payload);
            },
        
        [fetchPromotions.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message: 'Fetch failed'
        }
    }
})

export const promotionsReducer = promotionSlice.reducer

export const selectFeaturedPromotion = (state) => {
    return {
        featuredItem:  state.promotions.promotionsArray.find(
            (promotion) => promotion.featured
        ),
        isLoading: state.promotions.isLoading,
        errMsg: state.promotions.errMsg
    };
};