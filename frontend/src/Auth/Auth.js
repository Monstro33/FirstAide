import auth0 from "auth0-js";
import history from "../history";
import jwtDecode from "jwt-decode";

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  users;
  currentUser;

  auth0 = new auth0.WebAuth({
    domain: "first-aide.auth0.com",
    clientID: "3uSBPcOn6CnRRvZ5uMj4nVmizAWSZy70",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid email profile"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  getCurrentUserId() {
    return this.currentUser.userId;
  }

  getUsers() {
    fetch("https://localhost:44321/api/user")
      .then(res => res.json())
      .then(json => (this.users = json))
      .then(() => this.checkIfNewUser());
  }

  setCurrentUser(user) {
    this.currentUser = user;
    console.log("Current user: ", this.currentUser);
  }

  checkIfNewUser() {
    const decodedToken = jwtDecode(this.idToken);
    const email = decodedToken.email;
    const name = decodedToken.nickname;

    let isNew = true;
    let matchedUser;

    this.users.forEach(function(user) {
      if (user.email === email) {
        isNew = false;
        matchedUser = user;
      }
    });

    if (isNew) {
      fetch("https://localhost:44321/api/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ name: name, email: email })
      })
        .then(res => res.json())
        .then(json => this.setCurrentUser(json));
    } else {
      this.setCurrentUser(matchedUser);
    }
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.getUsers();
        this.setSession(authResult);
      } else if (err) {
        history.replace("/");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    history.replace("/dashboard");
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");

    this.auth0.logout({
      return_to: window.location.origin
    });

    // navigate to the home route
    history.replace("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
