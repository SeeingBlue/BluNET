import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Utb from './Pages/Utb'
import Seasons from './Pages/Seasons'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/utb' component={Utb} />
          <Route path='/demos/seasons' component={Seasons} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
