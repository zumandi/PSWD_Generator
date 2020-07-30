import React from 'react';
import classes from './App.module.scss';

import Title from './components/title/Title';
import Generator from './components/Generator/Generator'

function App() {
  return (
    <div className={classes.App}>
      <h1>Password-Generator</h1>
      <div className={classes.Generator}>
        <Title />
        <Generator />
      </div>
    </div>
  );
}

export default App;
