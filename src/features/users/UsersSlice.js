import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id: '0', name: "Tiana Jenkins"},
    {id: '1', name: "Riley Smith"},
    {id: '2', name: "Jesse Jones"},
    {id: '3', name: "Kerry Thompson"},
    {id: '4', name: "Savannah Nguyen"},
    {id: '5', name: "Skyler Johnson"},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: { }
})

export default usersSlice.reducer