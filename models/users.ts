import { ImageUrl, UserId, UserName } from './types';

export interface IUserDB {
  email: string;
  username: string;
  imageUrl: ImageUrl;
}

// View
export interface ProfileProps {
  id: UserId;
  email: string;
  username: UserName;
  imageUrl: string;
  order: number;
  calendars: { [calendarId: string]: { isDisplay: boolean } };
}
