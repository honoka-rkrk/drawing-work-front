import { User, blankUser } from '../Model/user';
import { User as UserType } from 'firebase/auth';
import { postApi } from '../Api/api';

const writeUser = async (firebaseUser: UserType, credential: any) => {
  const id = firebaseUser.uid;
  const { displayName } = firebaseUser;
  const photoUrl = firebaseUser.photoURL;
  const grantType = 'login';
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
  const user: User = {
    ...blankUser,
    id,
    providerUid,
    screenName,
    displayName,
    description,
    photoUrl,
    grantType
  };
  const api = await postApi('api/login/', user);
  if (api.success) {
    console.log(api.data);
    return api.data;
  }
};

export default writeUser;
