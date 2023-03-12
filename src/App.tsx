import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getUsers } from './store/users/thunks';
import UserList from './components/UserList';
import UserRegister from './components/UserRegister';
import UserEdit from './components/UserEdit';
import UserDelete from './components/UserDelete';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/register" component={UserRegister} />
          <Route path="/edit/:id" component={UserEdit} />
          <Route path="/delete/:id" component={UserDelete} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
