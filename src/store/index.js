import { configureStore } from '@reduxjs/toolkit';
import { calendarFormReducer } from './slices/formSlice';

const store = configureStore({
  reducer: {
    calendar: calendarFormReducer,
  },
});

export { store };
export * from './slices/formSlice';
