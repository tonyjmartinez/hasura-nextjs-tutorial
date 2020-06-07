import auth0 from "../../lib/auth0";
import config from "../../lib/auth0-config";

export default async function login(req, res) {
  try {
    debugger;
    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
