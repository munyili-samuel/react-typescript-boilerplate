// react
import * as React from 'react';

// components
import Main from 'pages/Main';
import './css/App.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';

export class App extends React.Component {
  render() {
    return (
      <div>
       <Main />
      </div>
    );
  }
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
