import { CalendarProps } from './calendars';
import { Date, EventId, ViewType } from './types';
import { ProfileProps } from './users';

export interface IUserState {
  isLoading: boolean;
  profiles: ProfileProps[];
  profile: ProfileProps;
}

export interface ICalendarState {
  isOpenLeftNav: boolean;
  isLoading: boolean;
  currentPeriod: { start: Date; end: Date };
  // fetch every calendars included access from calendarsDB
  calendars: CalendarProps[];
  // fetch every invitedEvents included access from invitation
  // invitedEvents: { id: EventId; isDisplay: boolean }[];
  viewType: ViewType;
}
