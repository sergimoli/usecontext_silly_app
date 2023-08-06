import React, { useContext } from "react";
import { TestContext } from "../context/TestContext";

function Login() {
  const { user, setUser } = useContext(TestContext);
  const saveData = (e) => {
    e.preventDefault();
    // console.log(e.target.nick.value);
    let userIdentified = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      nick: e.target.nick.value,
    };
    setUser(userIdentified);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <p>login page</p>
      <form className="login" onSubmit={saveData}>
        <input type="text" name="nick" placeholder="nickname" />
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="surname" placeholder="surname" />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default Login;
