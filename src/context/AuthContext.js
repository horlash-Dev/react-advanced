import React from "react";

const authContext = React.createContext({
  isAuthenticated: false,
  logOut: (data) => {},
});
export default authContext;
