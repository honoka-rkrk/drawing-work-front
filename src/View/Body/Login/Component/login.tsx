import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { styled } from '@mui/material/styles';
import theme from '../../../../Other/Style/theme';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Auth } from 'firebase/auth';

const CustomCard = styled(Card)(({ theme }) => ({
  gridRow: 2,
  gridColumn: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto'
}));

const Title = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Kosugi Maru'
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.red.second,
  borderRadius: '4px',
  color: theme.palette.white.main,
  fontFamily: 'Kosugi Maru',
  '&:hover': {
    backgroundColor: theme.palette.red.disabled
  },
  '&:disabled': {
    backgroundColor: theme.palette.red.disabled
  }
}));

type LoginProps = {
  uiConfig: firebaseui.auth.Config;
  auth: Auth | null;
  backClick: () => void;
  loginClick: () => void;
};

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { uiConfig, auth, backClick, loginClick } = props;

  return (
    <>
      <CustomCard>
        <CardHeader title={<Title>ログイン / 新規登録</Title>} />
        <CardContent>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          <DialogContentText>
            <Typography>{'エントリーするためにはログインが必要です。'}</Typography>
            <Typography>
              {
                'なお、このアプリはユーザーの許可なくTwitterに投稿することはありません。'
              }
            </Typography>
          </DialogContentText>
        </CardContent>
        <CardActions>
          <CustomButton onClick={loginClick}>ログイン</CustomButton>
          <CustomButton onClick={backClick}>戻る</CustomButton>
        </CardActions>
      </CustomCard>
    </>
  );
};

export default Login;
