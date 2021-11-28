const fs = require("fs");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const server = jsonServer.create();
const router = jsonServer.router("./database.json");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";

// token timeout is set here
const expiresIn = "1m";

// Server Address
const baseURL = "http://127.0.0.1:3000/";
// helper function to make an http request with fetch.
// returns a json object
async function makeRequest(url, method = "GET", body = null) {
  // we will need to set some custom options for our fetch call
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if we are sending any data with the request add it here
  if (method == "POST" || method == "PUT") {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(baseURL + url, options);
  // in this case we are processing the response as JSON before we check the status. The API we are using will send back more meaningful error messages than the default messages in the response, but we have to convert it before we can get to them.
  const data = await response.json();

  if (!response.ok) {
    // server will send a 500 server error if the token expires...or a 401 if we are not authorized, ie bad username/password combination, and a 404 if the URL we requested does not exist. All of these would cause response.ok to be false

    console.log(response);
    throw new Error(`${data.status}: ${data.message}`);
  } else return data;

  // not catching the error here...so we will need to catch it later on and handle it.
}

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (err) {
      throw Error(err);
    } else {
      return decode;
    }
  });
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    //userdb.users.findIndex(user => user.username === username && user.password === password) !== -1
    router.db
      .get("users")
      .findIndex((user) => user.email === email && user.password === password)
      .value() !== -1
  );
}

server.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = "Incorrect username or password";
    res.status(status).json({ status, message });
    return;
  }
  const accessToken = createToken({ email, password });
  res.status(200).json({ accessToken });
});
server.use((req, res, next) => {
  if (req.method === "POST") {
    const { authorization } = req.headers;
    if (authorization) {
      const [scheme, token] = authorization.split(" ");
      //jwt.verify(token, 'json-server-auth-123456');
      // Add claims to request
      req.claims = verifyToken(token);
      req.body.userId = req.claims.email;
    }
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});
server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    console.log("checking token");
    verifyToken(req.headers.authorization.split(" ")[1]);

    next();
  } catch (err) {
    const status = 401;
    const message = err.message;
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log("Run Auth API Server");
});
