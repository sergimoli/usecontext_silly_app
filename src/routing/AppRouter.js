import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Start from "../components/Start";
import Contact from "../components/Contact";
import Articles from "../components/Articles";
import Login from "../components/Login";
import About from "../components/About";
import { TestContext } from "../context/TestContext";

function AppRouter() {
  const { user, setUser } = useContext(TestContext);

  return (
    <BrowserRouter>
      <header className="header">
        {/* MENU DE NAV */}
        <nav>
          <div className="logo">
            <h2>Learning React Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">start</NavLink>
            </li>
            <li>
              <NavLink to="/articles">articles</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            {/* mirem si la propietat existeix */}
            {user.hasOwnProperty("nick") && user.nick !== null ? (
              <>
                <li>
                  <NavLink to="/">{user.nick}</NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setUser({});
                    }}
                  >
                    close session
                  </a>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">identify</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <section className="content">
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="*"
            element={
              <div>
                <h1>ERROR, THIS PAGE DO NOT EXIST!!!</h1>
              </div>
            }
          ></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default AppRouter;
