import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";

import GlobalStyles from "./styles/GlobalStyles";
import { Toggle } from "./styles/App.Styles";
import themes, { getTheme } from "./styles/Themes";
import MainPage from "./components/pages/MainPage";
import TestPage from "./components/pages/TestPage";

function App() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <div className="App">
      <ThemeProvider theme={getTheme(theme)}>
        <Router>
          <GlobalStyles />
          <Toggle
            onClick={() => {
              setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
            }}
          >
            {theme === getTheme(theme).label ? <HiMoon size={40} /> : <CgSun size={40} />}
          </Toggle>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/test" component={TestPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
