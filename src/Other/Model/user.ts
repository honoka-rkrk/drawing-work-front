import { Timestamp } from 'firebase/firestore';

export type User = {
  id: string;
  screenName: string;
  displayName: string | null;
  description: string | null;
  photoUrl: string | null;
  provider: string;
  providerUid: string;
  grantType: string;
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
};

export const blankUser: User = {
  id: '',
  screenName: '',
  displayName: null,
  description: null,
  photoUrl: null,
  provider: 'twitter',
  providerUid: '',
  grantType: 'refreshToken',
  createdAt: null,
  updatedAt: null
};
