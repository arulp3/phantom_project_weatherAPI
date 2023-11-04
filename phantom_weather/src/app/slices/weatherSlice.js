import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentData : null,
  foreCastData: [],
  locationData : null
}

////above are the states for the entire application

export const weatherSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
   ////fetches the current data from API
      getCurrentData : (state, {payload})=>{
         state.currentData = payload
      },

         ////fetches the future data based on dates from API
      getForecastData : (state, {payload})=>{
        state.foreCastData = payload.forecastday
     },
        ////fetches the location data
     getLocationData : (state, {payload})=>{
        state.locationData = payload
     },
  },
})

export const {getCurrentData,getForecastData, getLocationData} = weatherSlice.actions

export default weatherSlice.reducer