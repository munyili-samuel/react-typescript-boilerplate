// react
import * as React from 'react';

// interfaces
import { MainProps, MainState } from 'pages/Main/interfaces';

class Main extends React.Component<MainProps, MainState> {
  render() {
    return(
     <div className="ui container">
       Welcome to react with typescript building using webpack
     </div>
    );
  }
}

export default Main;
