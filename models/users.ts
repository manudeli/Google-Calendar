import { CalendarId, EventId } from './calendars';

export type UserId = string;

export interface IUser {
  id: UserId;
  email: string;
  username: string;
  calendars: {
    [calendarId: CalendarId]: { isDisplay: boolean };
  };
  invitedEvents: {
    [eventId: EventId]: { isDisplay: boolean };
  };
}
