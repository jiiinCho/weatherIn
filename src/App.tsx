import React from 'react';
import './App.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Icon } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello </p>
        <p>world </p>
        <Icon name="search" title="search" />
        <Icon name="wind" />
        <Icon name="umbrella" />
      </header>
    </div>
  );
}

export default App;
library.add(fas);
