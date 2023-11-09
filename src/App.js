// import React from 'react'
/* import {BrowserRouter as Router, Route} from 'react-router-dom'
import RepoList from './components/RepoList'
import RepoDetail from './components/RepoDetail'

const App = () => (
  <Router>
    <Route path="/" exact component={RepoList} />
    <Route path="/repo/:owner/:repo" component={RepoDetail} />
  </Router>
)

export default App */

// import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import RepoDetail from './components/RepoDetail'
import Counter from './components/Counter'

const App = () => (
  <div>
    <h1>Github Repository App</h1>
    <Router>
      <Counter />
      <Route path="/repo/:owner/:repo" component={RepoDetail} />
    </Router>
  </div>
)

export default App
