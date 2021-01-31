import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from "../../utilities";

const Login = () => {
    const history = useHistory();
    const initialState = {
        loginId: "",
        password: "",
    };
    const [app, setApp] = React.useState(initialState);
    const handleTextInput = (e) => {
        setApp({ ...app, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(app);
        if (app.loginId === initialState.loginId || app.password === initialState.password) {
            alert("please fill all the fields !");
        } else {
            console.log("I'm On");
            login(app)
                .then(response => {
                    if (response.data.success) {
                        localStorage.setItem("authKey", response.data.token);
                        history.push("/write");
                    }
                })
                .catch((error) => console.log(error));
        }
    }
    return (
        <main className="lko-main">
            <section className="lko-login-section">
                <span id="signup-text">Login</span>
                {/* <!-- <form action="/login" method="get"> --> */}
                <form action="index.html" method="get">
                    {/* <!-- <label for="username">Username</label> --> */}
                    <input type="text" id="username" name="loginId" placeholder="Email Address or Username" onChange={handleTextInput} />
                    {/* <!-- <label for="password">Password</label> --> */}
                    <input type="password" id="password" name="password" placeholder="Password" onChange={handleTextInput} />
                    <input type="submit" value="Login" onClick={handleSubmit} />
                </form>
                {/* <!-- <hr> --> */}
                <span style={{ alignSelf: "center", margin: "10px" }}>or</span>
                {/* <!-- <hr> --> */}
                <Link to="/signup" id="lko-new-acc">Create New Account</Link>
            </section>
        </main>
    )
}


export default Login;