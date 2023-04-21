import { createSlice } from '@reduxjs/toolkit';

const calendarFormSlice = createSlice({
  name: 'calendarForm',

  initialState: {
    activeTimeLength: -1,
    activeTimeFrame: -1,
    datePicked: '',
    timeLengthPicked: '',
    timePicked: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
  },

  reducers: {
    setActiveTimeFrame(state, action) {
      state.activeTimeFrame = action.payload;
    },

    setActiveTimeLength(state, action) {
      state.activeTimeLength = action.payload;
    },

    setDate(state, action) {
      state.datePicked = action.payload;
    },

    setTimeLength(state, action) {
      state.timeLengthPicked = action.payload;
    },

    setTime(state, action) {
      state.timePicked = action.payload;
    },
  },
});

export const calendarFormReducer = calendarFormSlice.reducer;
export const {
  setDate,
  setTimeLength,
  setTime,
  setActiveTimeFrame,
  setActiveTimeLength,
} = calendarFormSlice.actions;
