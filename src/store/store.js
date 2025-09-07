import { configureStore } from '@reduxjs/toolkit';
import dashboard from './dashboardSlice';
export default configureStore({ reducer: { dashboard } });