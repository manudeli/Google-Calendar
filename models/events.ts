import {
  CalendarId,
  ColorType,
  Date,
  IsAcceptedType,
  IsGoingType,
  RepeatCustomEndType,
  RepeatExceptedType,
  RepeatType,
  RepeatUnitType,
  UserId,
} from './types';

export interface EventDetail {
  title: string;
  description: string;
  date: { start: Date; end: Date };
  isAllDay: boolean;
  isBusy: boolean;
  location: string;
  color: ColorType;
}

export interface IEventDB extends EventDetail {
  creator: UserId;
  sourceCalendar: CalendarId;
  guests: {
    [userId: UserId]: {
      isGoing: IsGoingType;
      isRequired: boolean;
      permission: {
        modifyEvent: boolean;
        inviteOthers: boolean;
        seeGuestList: boolean;
      };
    };
  };
  repeat: {
    type: RepeatType;
    excepted: {
      [date: Date]: {
        type: RepeatExceptedType;
        detail: EventDetail;
      };
    };

    // If repeat.type is "custom"
    custom: {
      times: number;
      unit: RepeatUnitType;
      end: {
        type: RepeatCustomEndType;
        on: Date;
        After: { times: number };
      };
    };
  };
}

// View
export interface EventBlockProps {
  id: string;
  title: string;
  viewDate: { start: Date; end: Date };
  date: { start: Date; end: Date };
  isAllDay: boolean;
  color: { calendar: ColorType; event: ColorType };
}

export interface EventBlockInvitedProps extends EventBlockProps {
  isAccepted: IsAcceptedType;
}
