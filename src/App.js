import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import useInput from "./Hooks/useInput";
import Hello from "./Pages/Hello";
import WelcomePage from "./Pages/WelcomePage";

const App = () => {
  const [name, onChangeName] = useInput("");
  return (
    <>
      <header className="App_header">
        <title>HELLO JEEWON'S WORLD</title>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </header>

      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => <WelcomePage name={name} onChangeName={onChangeName} />}
        />
        <Route path="/HELLO" render={() => <Hello name={name} />} />
      </BrowserRouter>
    </>
  );
};

export default App;
