import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    orders: [],
    status: 'idle',
    error: null
};

export const fetchOrders = createAsyncThunk('customer/fetchOrders', async (_, { getState }) => {
    const username = getState().user.username;
    const url = `/api/orders/${username}`;
    const response = await axios.get(url);
    return response;
});

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        resetOrders(state, action) {
            state.orders = initialState.orders;
            state.status = initialState.status;
            state.error = initialState.error;
        }
    },
    extraReducers: {
        [fetchOrders.pending]: (state, action) => {
            state.status = 'loading orders'
        },
        [fetchOrders.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.orders = action.payload;
        },
        [fetchOrders.rejected]: (state, action) => {
            state.status = 'failed loading orders'
            state.error = action.error.message;
        }
    }
});

export const { resetOrders } = ordersSlice.actions;
export default ordersSlice.reducer;