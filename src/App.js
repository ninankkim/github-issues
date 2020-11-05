import { useEffect, useState } from 'react';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import IssueDetail from './components/IssueDetail/IssueDetail';
import IssueList from './components/IssueList/IssueList';
import IssuesByLabel from './components/IssuesByLabel/IssuesByLabel';
import Users from './components/Users/Users';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  // useEffect(() => {
  //   if (!loggedIn) {
  //     history.push('/');
  //   }
  // }, [loggedIn, history]);

  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/issues">Issues</Link></li>
        <li><Link to="/users">User Search</Link></li>
      </ul>
      <div>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/issues/:number" component={IssueDetail} />
          <Route path="/issues" component={IssueList} />
          <Route path="/labels/:name" component={IssuesByLabel} />
          <Route path="/users" component={Users}/>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
