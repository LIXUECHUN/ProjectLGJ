import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//默认导出：只能导出一次
// export default App;
//import ShowTime from './ShowTime'

//命名导出,可以导出多个，被引出时与导出名字一致
// export {ShowTime};
//import {ShowTime} from './ShowTime'
