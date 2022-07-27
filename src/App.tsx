import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './View/Body/Login/Component/main';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
