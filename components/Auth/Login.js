import Router from "next/router";
import config from "../../lib/auth0-config";

import { Button } from "react-bootstrap";

const Login = () => {
  console.log("here.", config.AUTH0_DOMAIN);
  console.log("hmmm");
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-heading">
          Welcome to the GraphQL tutorial app!!!!
        </div>
        <div className="overlay-message">Please login to continue</div>
        <div className="overlay-action">
          <Button
            id="qsLoginBtn"
            variant="primary"
            className="btn-margin loginBtn"
            onClick={() => {
              Router.push("/api/login");
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
