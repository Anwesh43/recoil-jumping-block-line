import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlockLine from './BlockLine'
import {RecoilRoot} from 'recoil'


function App() {
  return (
    <div className="App">
        <RecoilRoot>
            <BlockLine/>
        </RecoilRoot>
       
    </div>
  );
}

export default App;
