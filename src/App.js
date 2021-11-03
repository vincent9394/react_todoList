import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import todoReducer from "./reducers/todoReducer";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
// import TodoGroup from "./components/TodoGroup";
// import helpPage from "./components/HelpPage";
// import donePage from "./components/DonePage";
import HelpPage from "./components/HelpPage";
import DonePage from "./components/DonePage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <div className="App">
      <Provider store={store}>
        {/* <TodoList /> */}
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/done">Done</Link>
                </li>
                <li>
                  <Link to="/help">Help</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component = {TodoList} /> 
              <Route exact path="/done" component = {DonePage} />
              <Route exact path="/help" component = {HelpPage} />   
              <Route exact path="*" component = {NotFoundPage} />   
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
