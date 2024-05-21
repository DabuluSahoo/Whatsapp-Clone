import React from "react";
import Messenger from "./components/Messenger";
import LoginDialog from "./components/account/LoginDialog";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div>
      <Messenger />
      <GoogleOAuthProvider />
      <LoginDialog />
    </div>
  );
}

export default App;
