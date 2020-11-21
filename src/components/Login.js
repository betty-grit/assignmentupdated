import React from "react";

export default function App() {
  return (
    <form>
      <label>username</label>
      <input type="username" name="username" />
      <label>password</label>
      <input type="password" name="password" />
      <input type="submit" value="Login" />
    </form>
  );
}
