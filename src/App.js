import React from 'react';
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto.js';
import FullName from './Component/Profile/FullName.js';
import Address from './Component/Profile/Address.js';
function App() {
  return (
    <div className="App">
      <div className = "header_color">
        <h1>Hello welcome to my profile</h1>
     <ProfilPhoto />
    <h1>My name is :<FullName /></h1>
    <h1>My adress is :<Address /></h1>
    </div>
    </div>
  );
}

export default App;
