import auth0 from "../../lib/auth0";

export default async function login(req, res) {
  try {
    console.log("here...", process.env.AUTH0_DOMAIN);
    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error);
    console.log("something");
    res.status(error.status || 500).end(error.message);
  }
}
