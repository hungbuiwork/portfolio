import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Redirect to = "/"></Redirect>
      </div>
    </BrowserRouter>
  );
}

export default App;
