import React from "react";

export default function App() {
  return (
    <form>
      <label>username</label>
      <input type="username" name="username" />
      <label>emailaddress</label>
      <input type="emailaddress" name="emailaddress" />
      <label>password</label>
      <input type="password" name="password" />
      <label> confirmpassword</label>
      <input type="confirm password" name="confirm password" />
      <input type="submit" value="SignUp" />
    </form>
  );
}
