import React, { FC, useEffect, useRef, useState, ReactNode } from 'react';

import { User } from './Other/Model/user';
import { FirebaseContext, UserContext } from './Other/Context/contexts';
import findUser from './Other/Functions/find-user';
import writeUser from './Other/Functions/write-user';
import { db, auth } from './firebase';

type FirebaseAppProps = {
  children: ReactNode;
};

const FirebaseApp: FC<FirebaseAppProps> = (props: FirebaseAppProps) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);
  const [credential, setCredential] = useState<any | null>(null);
  const counterRef = useRef<number>(0);

  //認証状態が変更されたときに引数として渡されたトリガー関数が実行されるオブザーバー
  const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
    if (firebaseUser) {
      if (counterRef.current === 1 && credential) {
        const theUser = await writeUser(firebaseUser, credential);
        setUser(theUser);
      } else if (!user) {
        const theUser = await findUser(firebaseUser.uid);
        setUser(theUser);
      }
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    if (credential) counterRef.current += 1;

    return unsubscribe;
  });

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      <UserContext.Provider value={{ user, credential, setCredential }}>
        {children}
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
