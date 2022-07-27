import React from 'react';
import { styled } from '@mui/material/styles';
import theme from '../../../../Other/Style/theme';
import Box from '@mui/material/Box';
import Login from '../Container/login';

const Background = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundColor: theme.palette.green.main
}));

const RootStyle = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: '5% 50% 45%',
  gridTemplateColumns: '10.8% 78.4% 10.8%',
  height: 'calc(100vh - 70px)'
}));

const Main: React.FC = () => {
  return (
    <Background>
      <RootStyle>
        <Login />
      </RootStyle>
    </Background>
  );
};

export default Main;
