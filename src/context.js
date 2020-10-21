import React from "react";

export const {
  Provider: AuthProvider,
  Consumer: AuthConsumer,
} = React.createContext({ isAuthorize: false });
