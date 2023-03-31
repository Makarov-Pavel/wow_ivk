import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentHead: 'B1'
}

export const HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setCurrentHeat: (state,action) =>{
        state.currentHead = action.payload
    }
  },
})


export const { setCurrentHeat } = HeaderSlice.actions

export default HeaderSlice.reducer