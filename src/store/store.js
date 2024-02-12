import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from "./features/tickets/ticketSlice"
import authReducer from "./features/userAuth/authSlice"

export const store = configureStore({
    reducer:{
        tickets: ticketReducer,
        auth: authReducer,
    }
});
