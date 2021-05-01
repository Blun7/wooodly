import "./App.css";
import PageTitle from "./components/PageTitle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectFeed from "./components/ProjectFeed";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="md:container md:mx-auto">
            <div>
                <PageTitle />
            </div>
            <div className="space-x-4 mt-5">
                <Router>
                    <Navigation />
                    <div className="container mt-5">
                        <Switch>
                            <Route exact path="/">
                                <ProjectFeed />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/signup">
                                <Signup />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
