import BaseRequest from "../core/BaseRequest";

class AuthService {
  login(user) {
    return BaseRequest.post("login", {
      name: user.name,
      password: user.password,
    }).then(function (response) {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return BaseRequest.post("register", {
      name: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
export default new AuthService();