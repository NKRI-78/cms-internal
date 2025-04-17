import { configureStore } from '@reduxjs/toolkit';

import authReducer from '@redux/slices/authSlice';
import userReducer from '@redux/slices/userSlice';
import modalReducer from '@redux/slices/modalSlice';
import { enableMapSet } from 'immer';

enableMapSet();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;