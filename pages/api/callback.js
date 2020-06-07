import auth0 from "../../lib/auth0";

export default async function callback(req, res) {
  try {
    console.log("try");
    debugger;
    await auth0.handleCallback(req, res, { redirectTo: "/" });
  } catch (error) {
    console.log("catch");
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
