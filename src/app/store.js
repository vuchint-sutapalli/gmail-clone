import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mailSliceReducer from '../features/sendMail/mailSlice';
import userSliceReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mail: mailSliceReducer,
    user: userSliceReducer
  },
});
