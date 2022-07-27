import { isEmpty } from 'lodash';
import { sprintf } from 'sprintf-js';

import { User, blankUser } from '../Model/user';
import { collectionName } from './constants';
import { db } from '../../firebase';
import { User as UserType } from 'firebase/auth';
import {
  query,
  getDocs,
  where,
  doc,
  collection,
  writeBatch,
  getDoc,
  serverTimestamp,
  increment
} from 'firebase/firestore';

const writeUser = async (firebaseUser: UserType, credential: any) => {
  const id = firebaseUser.uid;
  const { displayName } = firebaseUser;
  const photoUrl = firebaseUser.photoURL;
  let providerUid = '';
  let screenName = '';
  let description = '';

  if (credential.additionalUserInfo) {
    if (credential.additionalUserInfo.username) {
      screenName = credential.additionalUserInfo.username;
    }
    if (credential.additionalUserInfo.profile) {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      providerUid = (credential.additionalUserInfo.profile as any).id_str;
      description = (credential.additionalUserInfo.profile as any).description || '';
      /* eslint-enable */
    }
  }

  if (!providerUid || !screenName) {
    throw new Error('Invalid credential information.');
  }

  // resolve screenname duplication
  const queryRef = query(
    collection(db, collectionName.users),
    where('screenName', '==', screenName)
  );
  const docRef = await getDocs(queryRef);
  if (docRef.size) {
    const rnd = Math.floor(Math.random() * 10000);
    screenName = `${screenName}${sprintf('%04d', rnd)}`;
  }

  let theUser: User | null = null;
  const batch = writeBatch(db);
  const userColRef = collection(db, collectionName.users);
  const userDocRef = doc(userColRef, id);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    const user = userDoc.data() as User;
    const diff: Partial<User> = {};
    if (user.description !== description) {
      diff.description = description;
    }
    if (user.displayName !== displayName) {
      diff.displayName = displayName;
    }
    if (user.photoUrl !== photoUrl) {
      diff.photoUrl = photoUrl;
    }
    if (!isEmpty(diff)) {
      batch.update(userDoc.ref, {
        ...diff,
        updatedAt: serverTimestamp()
      });
    }
    theUser = { ...diff, ...user, id: userDoc.id };
  } else {
    const user: User = {
      ...blankUser,
      providerUid,
      screenName,
      displayName,
      description,
      photoUrl
    };
    batch.set(userDoc.ref, {
      ...user,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    theUser = { ...user, id: userDoc.id };

    const counterColRef = collection(db, collectionName.docCounters);
    const counterDocRef = doc(counterColRef, collectionName.users);
    batch.set(
      counterDocRef,
      {
        count: increment(1),
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
  }
  await batch.commit();

  return theUser;
};

export default writeUser;
