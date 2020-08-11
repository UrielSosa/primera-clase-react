import React, {Fragment} from 'react';
import Aside from './components/Aside'; 
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Fragment>
      <Aside />
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;