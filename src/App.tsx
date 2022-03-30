import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";

import GlobalStyles from "./styles/GlobalStyles";
import { Toggle } from "./styles/App.Styles";
import { getTheme } from "./styles/Themes";
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
            <Route exact path="/hick-hyman-law" component={MainPage} />
            <Route path="/hick-hyman-law/test" component={TestPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
