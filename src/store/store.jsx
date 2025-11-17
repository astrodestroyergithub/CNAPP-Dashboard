import { configureStore } from '@reduxjs/toolkit'
import dashboard from './dashboardSlice'
import testimonialModal from './testimonialModalSlice'
import gk from './gkSlice'

export default configureStore({ 
    reducer: { 
        dashboard: dashboard,
        testimonialModal: testimonialModal, 
        gk: gk,
    } 
})