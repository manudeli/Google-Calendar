import { IEventDB } from './events';
import { ColorType, PermissionType, UserId } from './types';

export interface ICalendarDB {
  title: string;
  owner: UserId;
  permissionUsers: { [userId: UserId]: PermissionType };
  access: { [userId: UserId]: { isAccepted: boolean; expiredAt: Date } };
  color: ColorType;
}

// View
export interface CalendarProps {
  isLoading: boolean;
  id: string;
  title: string;
  color: ColorType;
  isDisplay: boolean;
  // fetch every events included calendarId from eventsDB
  periodEvents: IEventDB[];
}
