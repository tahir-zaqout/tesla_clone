import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cars: ['Model 3', 'Model X', 'Model Y', 'Model S']
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducer: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer
