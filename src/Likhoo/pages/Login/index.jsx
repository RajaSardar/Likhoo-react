import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    };
    const [app, setApp] = React.useState(initialState);
    const handleTextInput = (e) => {
        setApp({ ...app, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(app);
    }
    return (
        <main className="lko-main">
            <section className="lko-login-section">
                <span id="signup-text">Login</span>
                {/* <!-- <form action="/login" method="get"> --> */}
                <form action="index.html" method="get">
                    {/* <!-- <label for="username">Username</label> --> */}
                    <input type="text" id="username" name="username" placeholder="Email Address or Username" onChange={handleTextInput} />
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