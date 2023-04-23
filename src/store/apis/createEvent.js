import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createEventApi = createApi({
  reducerPath: 'createEvent',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/calendar/v3/calendars/primary',
  }),

  endpoints: (builder) => {
    return {
      createNewEvent: builder.mutation({
        query: (eventData, providerToken) => {
          return {
            url: '/events',
            body: JSON.stringify(eventData),
            headers: {
              Authorization: `Bearer [${providerToken}]`,
            },
            method: 'POST',
          };
        },
      }),
    };
  },
});

export const { useCreateNewEventMutation } = createEventApi;
