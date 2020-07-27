import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact
              path={route.path}
              render={(props) => <route.Component {...props} />}
            />
          ))}
          <Route path="*" render={()=><div>Not found page</div>} />
        </Switch>
      </App>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
