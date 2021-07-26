import {
  CalendarId,
  ColorType,
  Date,
  IsAcceptedType,
  IsGoingType,
  RepeatCustomEndsType,
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

    // if RepeatType is "custom"
    custom: {
      repeatEvery: {
        times: number;
        unit: RepeatUnitType;
        // if RepeatUnitType is "week"
        repeatOnWeek: {
          sun: boolean;
          mon: boolean;
          tue: boolean;
          wed: boolean;
          thu: boolean;
          fri: boolean;
          sat: boolean;
        };
      };

      ends: {
        type: RepeatCustomEndsType;
        // if RepeatCustomEndsType is "on"
        on: Date;
        // if RepeatCustomEndsType is "after"
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
