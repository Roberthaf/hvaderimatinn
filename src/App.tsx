import * as React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Hvað er í matinn? </p>
        
      </header>
    </div>
  );
}

export default withAuthenticator(App);
