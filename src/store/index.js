import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { createEventApi } from './apis/createEvent';
import { calendarFormReducer } from './slices/formSlice';

const store = configureStore({
  reducer: {
    calendar: calendarFormReducer,
    [createEventApi.reducerPath]: createEventApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(createEventApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export * from './slices/formSlice';
export { useCreateNewEventMutation } from './apis/createEvent';
