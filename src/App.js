import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectFeed from "./components/ProjectFeed";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddProject from "./components/AddProject";
import PageTitle from "./components/PageTitle";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function App() {
    return (
        <Container>
            <Router>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <PageTitle />
                    </Grid>
                </Grid>
                <div>
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
                        <Route path="/add-project">
                            <AddProject />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

export default App;
