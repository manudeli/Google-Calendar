import { UserId } from './users';

export type EventId = string;
export type CalendarId = string;
export type Date = number;

export enum EnumEventRepeatCustomType {
  'never',
  'on',
  'after',
}

export enum EnumEventRepeatUnit {
  'day',
  'week',
  'month',
  'year',
}

export enum EnumEventNotificationType {
  'email',
  'Notification',
}

export enum EnumEventRepeatType {
  'notRepeat',
  'daily',
  'weekly',
  'monthly',
  'annually',
  'everyWeekday',
  'custom',
}

export enum EnumEventColor {
  'tomato',
  'flamingo',
  'tangerine',
  'banana',
  'sage',
  'basil',
  'peacock',
  'blueberry',
  'lavender',
  'grape',
  'graphite',
  'calendarColor',
}

export enum EnumEventIsGoing {
  'pending',
  'going',
  'maybe',
}

export enum EnumEventExceptedDates {
  'thisEvent',
  'thisAndFollowingEvents',
  'allEvents',
}

export interface IEvent {
  id: EventId;
  creator: UserId;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date | null; // null, clue for every request of searching event
  isAllDay: boolean;
  sourceCalendar: CalendarId;
  isBusy: boolean;
  location: string;
  color: EnumEventColor;
  guests: {
    [userId: UserId]: {
      isGoing: EnumEventIsGoing;
      isRequired: boolean;
      permission: {
        modifyEvent: boolean;
        inviteOthers: boolean;
        seeGuestList: boolean;
      };
    };
  };
  notification: {
    type: EnumEventNotificationType;
    times: number;
    unit: 'weeks' | 'days';
    ifAllDayNotiTime: number;
  };
  repeat: {
    type: EnumEventRepeatType;
    custom: {
      times: number;
      unit: EnumEventRepeatUnit;
      end: {
        type: EnumEventRepeatCustomType;
        on: Date;
        After: number;
      };
    };
  };
  exceptedDates: {
    [date: Date]: {
      type: EnumEventExceptedDates;
    };
  };
}

// Calendar
export interface ICalendar {
  id: CalendarId;
  title: string;
  owner: UserId;
  permissionUsers: { [userId: UserId]: EnumCalenderPermission };
  access: { [userId: UserId]: { isAccepted: boolean; expiredAt: Date } };
  eventIds: {};
  events: IEvent[];
}

export enum EnumCalenderPermission {
  'see only',
  'see all',
  'make changes to events',
  'make changes and manage sharing',
}
