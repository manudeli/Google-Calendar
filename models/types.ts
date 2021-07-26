export type EventId = string;
export type CalendarId = string;
export type Date = number;
export type UserId = string;
export type UserName = string;
export type ImageUrl = string;

export enum RepeatType {
  'notRepeat',
  'daily',
  'weekly',
  'monthly',
  'annually',
  'everyWeekday',
  'custom',
}

export enum RepeatCustomEndsType {
  'never',
  'on',
  'after',
}

export enum RepeatUnitType {
  'day',
  'week',
  'month',
  'year',
}

export enum RepeatExceptedType {
  'thisEvent',
  'thisAndFollowingEvents',
}

export enum IsGoingType {
  'pending',
  'going',
  'maybe',
}

export enum IsAcceptedType {
  'pending',
  'accepted',
  'declined',
  'undecided',
}

export enum PermissionType {
  'see only',
  'see all',
  'make changes to events',
  'make changes and manage sharing',
}

export enum ColorType {
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

export enum ViewType {
  'day',
  'week',
  'month',
  'year',
  'schedule',
  '4weeks',
}
