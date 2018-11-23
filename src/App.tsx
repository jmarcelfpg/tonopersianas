import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/screens/Contact';
import Home from './components/screens/Home';
import ToolBar from './components/ToolBar';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <ToolBar />
        <BrowserRouter>
          <div>
            <Route path="/" exact={true} > <Home /> </Route>
            <Route path="/contact"  ><Contact /> </Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
