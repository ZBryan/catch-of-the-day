import React from "react";

const Login = props => (
  <nav className="login">
    <h2>login</h2>
    <p>sign to manage your store's inventory</p>
    <button className="github" onClick={() => props.auth("Github")}>
      Login with Github
    </button>
    <button className="facebook" onClick={() => props.auth("Facebook")}>
      Login with Facebook
    </button>
    <button className="twitter" onClick={() => props.auth("Twitter")}>
      Login with Twitter
    </button>
  </nav>
);

export default Login;
