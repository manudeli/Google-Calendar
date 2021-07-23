import { CalendarId, EventId } from './calendars';

export type UserId = string;
export type UserName = string;

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

export interface IUserState {
  isLoading: boolean;
  profiles: IUserProfile[];
  profile: IUserProfile;
}

export interface IUserProfile {
  id: UserId;
  email: string;
  username: UserName;
  imageUrl: string;
}
