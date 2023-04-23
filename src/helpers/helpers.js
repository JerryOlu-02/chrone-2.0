export const timeLength = ['15 mins', '30 mins', '1 hour'];
export const time = [
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
];

export const eventBody = function (firstName, lastName, startDate, endDate) {
  return {
    summary: `Scheduled Meeting of ${firstName} ${lastName} with Chrone Influitive Company`,
    description: 'More Insight on your marketing needs',
    start: {
      dateTime: startDate,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: endDate,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
  };
};
