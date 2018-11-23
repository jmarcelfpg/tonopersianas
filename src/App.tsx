import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/screens/Contact';
import Home from './components/screens/Home';
import ToolBar from './components/ToolBar';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="app">
          <ToolBar />
          <div className="screen">
            <Route path="/" exact={true} component={Home} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
