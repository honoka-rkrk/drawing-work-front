/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore/lite';

import { User } from '../Model/user';

type FirebaseContextValue = {
  auth: Auth | null;
  db: Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null
});

//ログインしたユーザーの情報を格納しておくもの。
//TwitterのスクリーンネームやユーザーID(19桁の数字)、プロフィール文といった情報はCredentialからしか取得できないので、それを
//取りまわすためにcredentialとそのセッター関数のsetCredentialを要素に追加している。
type UserContextValue = {
  user: User | null;
  credential: any | null;
  setCredential: (credential: any | null) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  credential: null,
  setCredential: () => undefined
});
