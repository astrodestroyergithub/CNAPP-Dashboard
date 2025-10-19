import { configureStore } from '@reduxjs/toolkit'
import dashboard from './dashboardSlice'
import testimonialModal from './testimonialModalSlice'
export default configureStore({ 
    reducer: { 
        dashboard: dashboard,
        testimonialModal: testimonialModal, 
    } 
})