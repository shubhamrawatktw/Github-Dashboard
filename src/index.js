import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// domain = dev-f5c3jdbt.us.auth0.com
// client id = VKsmoVSLwjtHT27SLYKbASrbSLYyqdxI
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-f5c3jdbt.us.auth0.com"
      clientId="VKsmoVSLwjtHT27SLYKbASrbSLYyqdxI"
       redirectUri= {window.location.origin}>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
