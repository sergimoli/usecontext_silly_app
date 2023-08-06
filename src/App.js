import { useEffect, useState } from "react";
import "./App.css";
import { TestContext } from "./context/TestContext";
import AppRouter from "./routing/AppRouter";

function App() {
  // const [user, setUser] = useState({
  //   name: "sergi",
  //   surname: "molina",
  //   nick: "molins",
  // });

  const [user, setUser] = useState({});
  // IMPORTANTÍSSIM! ES SUPER IMPORTANT L'ORDRE DE COLOCACIÓ DELS USEEEFECTS... ABANS HAVIA POSAT LA DE SOTA PER SOBRE ... I MALAMENT...
  useEffect(() => {
    console.log(2);
    // la 1a vegada es carrega un compoment
    let userLocal = JSON.parse(localStorage.getItem("user"));
    setUser(userLocal);
  }, []);

  useEffect(() => {
    console.log(1);
    // cada cop que es modifiqui lusuari es guarda a localstorage:
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const course = {
    id: 1,
    title: "doing this course",
    content: "many hours...",
  };

  return (
    <div className="App">
      {/* <h1>LEARNINGGG USECONTEXT, OKIS?</h1> */}
      {/* ho posem amb dos {{}} per que un es per dir que es un array */}
      <TestContext.Provider value={{ user, setUser }}>
        {/* <TestContext.Provider value={course}> */}
        {/* <TestContext.Provider value="sergi molina saiz"> */}

        <AppRouter />
      </TestContext.Provider>
    </div>
  );
}

export default App;
