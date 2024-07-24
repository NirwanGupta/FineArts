import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated()?.admin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/unautorized",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
