import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserRegistration from './components/UserRegistration';
import UserEditing from './components/UserEditing';
import DeleteUser from './components/DeleteUser';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/register" component={UserRegistration} />
          <Route path="/edit/:id" component={UserEditing} />
          <Route path="/delete/:id" component={DeleteUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
