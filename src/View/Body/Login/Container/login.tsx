import React, { useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router';
import CompLoginDialog from '../Component/login';
import { getApi } from '../../../../Other/Api/api';
import { FirebaseContext, UserContext } from '../../../../Other/Context/contexts';
import { TwitterAuthProvider } from 'firebase/auth';

const LoginDialog: React.FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { setCredential } = useContext(UserContext);
  const navigate = useNavigate();

  const backClick = useCallback(() => {
    navigate('/');
  }, []);

  const loginClick = useCallback(async () => {
    // const api = await getApi('api/sample/');
    // console.log(api);
    // // if (api.success) {
    // //   console.log(api.data);
    // // }
  }, []);

  //react-firebaseuiのパッケージを使用、signInOptionsでプロバイダを増やせばそれに対応してログインボタンも増える。
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'redirect',
    signInOptions: [
      {
        provider: TwitterAuthProvider.PROVIDER_ID,
        customParameters: { lang: 'ja' }
      }
    ],
    callbacks: {
      signInFailure: (error) => {
        console.log(error);
      },
      // ログインが成功した時に呼ばれるコールバック関数。authResultにCredential情報を、
      //redirectUrlにsignInSuccessUrlというURLﾊﾟﾗﾒｰﾀで設定されていたパスを渡されるようになっている。
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        //twitterのスクリーンネームやプロフィール文が格納されたCredentialはここでしか取得できないので
        //過ぎにContextに格納する
        setCredential(authResult);
        //trueで返すとredirectUrlにリダイレクトされ、アプリがリロードされるので、その前にreact-routerでアプリ内
        //リダイレクトを設定してfalseを返している。
        const dest = redirectUrl || '/home';
        navigate(dest);
        return false;
      }
    }
  };

  return (
    <CompLoginDialog
      uiConfig={uiConfig}
      auth={auth}
      backClick={backClick}
      loginClick={loginClick}
    />
  );
};

export default LoginDialog;
