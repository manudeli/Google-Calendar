import { IEventDB } from './events';
import { ColorType, PermissionType, UserId } from './types';

export interface ICalendarDB {
  title: string;
  owner: UserId;
  access: {
    [userId: string]: {
      isAccepted: boolean;
      permissionType: PermissionType;
    };
  };
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
