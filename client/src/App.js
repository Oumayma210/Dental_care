import "./App.css";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
function App() {
    return (
        <div className="App">
            Hola from my website
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/profile" component={Profile} />
                <Route path="/*" component={Error} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
