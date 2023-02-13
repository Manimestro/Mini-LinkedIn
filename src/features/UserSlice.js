import { createSlice } from '@reduxjs/toolkit';
export const UserSlice = createSlice({
  name: 'user',
  initialState:{
    user:{
      good:false,
      create:false,
      loger:true
    },
  },
  reducers: {
    login: (state,action) => {
      state.user= action.payload;
    },
    logout: (state,action) => {
      state.user =action.payload;
    },
  },
});

export const {login,logout} = UserSlice.actions;
//selectors
// console.log
export default UserSlice.reducer;
