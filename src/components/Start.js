import React, { useContext } from "react";
import { TestContext } from "../context/TestContext";

function Start() {
  // const share = useContext(TestContext);
  //ho faig amb desestructuració.
  const { user } = useContext(TestContext);
  // console.log(share);

  return (
    <div>
      <h1>START</h1>
      <p>start page</p>

      {/* shared information: <strong>{share}</strong> */}
      {/* shared information: <strong>{share.title}</strong> */}
      {/* <p>Name: {share.user.name}</p> */}
      <p>Name: {user.name}</p>
    </div>
  );
}

export default Start;
