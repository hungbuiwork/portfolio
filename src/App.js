import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/portfolio" component={Home}></Route>
          <Route path="/portfolio/projects.html" component={Home}></Route>
        </Switch>
        <Redirect to = "/portfolio"></Redirect>
      </div>
    </BrowserRouter>
  );
}

export default App;
