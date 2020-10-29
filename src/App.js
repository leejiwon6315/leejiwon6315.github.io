import React from "react";
import Favicon from "react-favicon";
import { BrowserRouter, Route } from "react-router-dom";
import useInput from "./Hooks/useInput";
import Hello from "./Pages/Hello";
import WelcomePage from "./Pages/WelcomePage";

const App = () => {
  const [name, setName, onChangeName] = useInput("");
  return (
    <>
      <Favicon url="/public/favicon.ico?" />

      <header className="App_header">
        <title>HELLO JEEWON'S WORLD</title>
      </header>

      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <WelcomePage
              name={name}
              setName={setName}
              onChangeName={onChangeName}
            />
          )}
        />
        <Route path="/HELLO" render={() => <Hello name={name} />} />
      </BrowserRouter>
    </>
  );
};

export default App;
