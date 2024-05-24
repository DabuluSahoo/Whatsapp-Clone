import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./components/context/AccountProvider";

function App() {
  const clientId =
    "99217715285-fo5u3fua4b66i6jum3d604a5oi3rgb70.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
