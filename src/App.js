import { useEffect, useState } from 'react';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import IssueList from './components/IssueList/IssueList';
import IssuesByLabel from './components/IssuesByLabel/IssuesByLabel';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push('/');
    }
  }, [loggedIn, history]);

  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        { loggedIn && (
          <li><Link to="/issues">Issues</Link></li>
        )}
        { loggedIn
          ? (<li><button onClick={() => {setLoggedIn(false)}}>Log Out</button></li>)
          : (<li><button onClick={() => {setLoggedIn(true)}}>Log In</button></li>)
        }
      </ul>
      <div>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          { loggedIn && (
            <>
              <Route path="/issues" component={IssueList} />
              <Route path="/issues/:number" component={IssueList} />
              <Route path="/labels/:name" component={IssuesByLabel} />
            </>
          )}
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
