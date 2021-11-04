import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import todoReducer from "./reducers/TodoReducer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HelpPage from "./components/HelpPage";
import DonePage from "./components/DonePage";
import NotFoundPage from "./components/exception/NotFoundPage.js";

function App() {
  const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <nav className="navBar">
              <Link className="navItem" to="/">
                Home
              </Link>
              <span />

              <Link className="navItem" to="/done">
                Done
              </Link>

              <Link className="navItem" to="/help">
                Help
              </Link>
            </nav>
            <Switch>
              <Route exact path="/" component={TodoList} />
              <Route exact path="/done" component={DonePage} />
              <Route exact path="/help" component={HelpPage} />
              <Route exact path="*" component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
