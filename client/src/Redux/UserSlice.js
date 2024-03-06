import {createSlice} from '@reduxjs/toolkit'

const intialState = {
    currentUser: null,
    loading: false,
    error: false
}

export const UserSlice = createSlice({
    name:'user',
    intialState,
    reducers:{
        LoginStart: (state) => {
            state.loading = true
        },
        LoginSuccess : (state,action) => {
            state.currentUser = action.payload,
            state.loading = false
        },
        LoginFail : (state) => {
            state.loading = false,
            state.error = true
        },
        LogOut: (state) => {
            state.loading = false,
            state.currentUser = null,
            state.error = false
        }
    }
})

export const {LoginStart,LoginSuccess,LoginFail,LogOut} = UserSlice.actions
export default UserSlice.reducer