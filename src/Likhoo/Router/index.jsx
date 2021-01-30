import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Read from "../pages/Read";
import Home from "../pages/Home";
import Audio from "../pages/Audio";
import Author from "../pages/Author";
import Authors from "../pages/Authors";
import Learn from "../pages/Learn";
import Login from "../pages/Login";
import PoemsByTags from "../pages/Poems-by-tags";
import Publish from "../pages/Publish";
import SignUp from "../pages/Signup";
import Write from "../pages/Write";
import WriteStory from "../pages/Write-story";
import NavBar from "../components/NavBar";
import Error from "../pages/Error";
import "../CSS/style.css";


const Navigation = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/read" exact component={Read} />
                <Route path="/audio" exact component={Audio} />
                <Route path="/author" exact component={Author} />
                <Route path="/authors" exact component={Authors} />
                <Route path="/learn" exact component={Learn} />
                <Route path="/login" exact component={Login} />
                <Route path="/poems-by-tags" exact component={PoemsByTags} />
                <Route path="/publish" exact component={Publish} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/write" exact component={Write} />
                <Route path="/write-story" exact component={WriteStory} />
                <Route path="*" component={Error}/>
            </Switch>
        </Router>
    )
}


export default Navigation;