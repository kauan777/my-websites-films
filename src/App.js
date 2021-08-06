import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import NavBar from './components/NavBar';
import Header from './components/Header/index';
import {Div} from './style'

function App() {
  return (
    <Div>
      <NavBar/>
      <Header/>
      <GlobalStyles/>
    </Div>
  );
}

export default App;
