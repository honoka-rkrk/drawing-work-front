import { User } from '../Model/user';
import { collectionName } from './constants';
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';

const findUser = async (id: string) => {
  let theUser: User | null = null;
  const colRef = collection(db, collectionName.users);
  const userRef = doc(colRef, id);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const user = userDoc.data() as User;
    theUser = { ...user, id: userDoc.id };
  }

  return theUser;
};

export default findUser;
