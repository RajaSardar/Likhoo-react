import React from 'react';

const SignUp = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        userame: "",
        email: "",
        gender: "female",
        password: "",
        confirmPassword: "",
    }
    const [app, setApp] = React.useState(initialState);

    const handleTextInput = (e) => {
        setApp({ ...app, [e.target.name]: e.target.value });
    };

    const handleRadioInput = (e) => {
        setApp({ ...app, gender: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(app);
    }

    return (

        <main className="lko-main">
            <section className="lko-login-section">
                <span id="signup-text">Sign Up</span>
                {/*  <!-- <form action="/signup" method="get"> --> */}
                <form action="login.html" method="get">
                    {/* <!-- <label for="username">Username</label> --> */}
                    <div className="lko-signup-name">
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" required onChange={handleTextInput} />
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required onChange={handleTextInput} />
                    </div>
                    <input type="text" id="userame" name="userame" placeholder="Userame" required onChange={handleTextInput} />
                    <input type="number" id="mobile" name="mobile" placeholder="Mobile Number" required onChange={handleTextInput} />
                    <input type="email" id="email" name="email" placeholder="Email Address" required onChange={handleTextInput} />
                    <div className='lko-signup-radio'>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" checked={app.gender === "female" ? true : false} value="female" onChange={handleRadioInput} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male" checked={app.gender === "male" ? true : false} onChange={handleRadioInput} />
                        <label htmlFor="other">Other</label>
                        <input type="radio" id="other" name="gender" value="other" checked={app.gender === "other" ? true : false} onChange={handleRadioInput} />
                    </div>
                    {/* <!-- <label for="password">Password</label> --> */}
                    <input type="password" id="password" name="password" placeholder="Password" required onChange={handleTextInput} />
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required onChange={handleTextInput} />
                    <input type="submit" value="Create Account" onClick={handleSubmit} />
                </form>
            </section>
        </main>

    )
}


export default SignUp;