import * as React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
//import NavigationBar from './NavigationBar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      {/* <NavigationBar />*/}      
      <Main />
    </div>
  );
}

export default withAuthenticator(App);
