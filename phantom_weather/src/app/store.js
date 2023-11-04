import {configureStore} from "@reduxjs/toolkit"
import weatherReducer from "./slices/weatherSlice"

const store = configureStore({
    reducer : {
        weatherData : weatherReducer,
    }
})

export default store