import auth0 from "../../lib/auth0";
import config from "../../lib/auth0-config";

export default async function login(req, res) {
  console.log("login called");
  try {
    console.log("here...", config.AUTH0_DOMAIN);
    debugger;
    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error);
    console.log("something");
    res.status(error.status || 500).end(error.message);
  }
}
