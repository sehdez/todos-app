import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const TodoApp = () => {
    return (
        <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <h2>Hola Mundo</h2>
          </Route>
        </Switch>
      </div>
    </Router>
    );
}


export default TodoApp;

if (document.getElementById('todoApp')) {
    ReactDOM.render(<TodoApp />, document.getElementById('todoApp'));
}
