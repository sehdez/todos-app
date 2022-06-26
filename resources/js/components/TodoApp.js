import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  import Navbar from './Navbar/Navbar';
  const Todos = lazy(() => import("./Todos/Todos"));
  import TodosSkeleton from './Todos/TodosSkeleton';

const RouterMain = () => {
    return (
      <Router >
        <Navbar />
        <Routes>
          <Route exact path={'/'} element={
              <Suspense fallback={<>Cargando...</>}>
                  <TodosSkeleton />
              </Suspense>
          }>
          </Route>
      </Routes>
    </Router>
    );
}


export default RouterMain;

if (document.getElementById('routerApp')) {
    ReactDOM.render(<RouterMain />, document.getElementById('routerApp'));
}
