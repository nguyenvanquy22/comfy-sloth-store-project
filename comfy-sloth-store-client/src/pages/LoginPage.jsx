import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useUserContext } from '../contexts/user_context';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginPage() {
    const { authenticated, checkLogin, checkSignup, auth_error } = useUserContext()
    const navigate = useNavigate()
    const location = useLocation()

    const [isFormLogin, setIsFormLogin] = useState(true);
    const [error, setError] = useState("");
    const loginTextRef = useRef();
    const loginFormRef = useRef();
    const slideTabRef = useRef();
    const [usernameLogin, setUsernameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [usernameSignup, setUsernameSignup] = useState("")
    const [passwordSignup, setPasswordSignup] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    useEffect(() => {
        const marginLeftValue = isFormLogin ? '0' : '-50%';
        const slideTabLeftValue = isFormLogin ? '0' : '50%';

        loginTextRef.current.style.marginLeft = marginLeftValue;
        loginFormRef.current.style.marginLeft = marginLeftValue;
        slideTabRef.current.style.left = slideTabLeftValue;
    }, [isFormLogin])

    const handleLoginTitleClick = (e) => {
        e.preventDefault();
        setIsFormLogin(true);
        setUsernameLogin("");
        setPasswordLogin("");
        setError("");
    }
    const handleSignUpTitleClick = (e) => {
        e.preventDefault();
        setIsFormLogin(false);
        setUsernameSignup("");
        setPasswordSignup("");
        setConfirmPassword("");
        setError("");
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate(usernameLogin, passwordLogin)
        if (isValid) {
            await checkLogin(usernameLogin, passwordLogin);
        }
    }

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate(usernameSignup, passwordSignup, confirmPassword)
        if (isValid) {
            await checkSignup(usernameSignup, passwordSignup);
        }
    }

    const validate = (username, password, confirmPassword) => {
        if (username.length < 1) {
            setError("Please enter your username.")
            return false;
        }
        if (password.length < 1) {
            setError("Please enter your password.")
            return false;
        }
        if (confirmPassword && confirmPassword !== password) {
            setError("Passwords do not match.")
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (authenticated) {
            navigate('/')
        }
        if (auth_error.code) {
            setError(auth_error.message)
        }
    }, [authenticated, auth_error])

    return (
        <Wrapper>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login" ref={loginTextRef}>Login</div>
                    <div className="title signup">Signup</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <label
                            htmlFor="login"
                            className="slide login"
                            style={{ color: isFormLogin ? '#fff' : '#000' }}
                            onClick={handleLoginTitleClick}
                        >
                            Login
                        </label>
                        <label
                            htmlFor="signup"
                            className="slide signup"
                            style={{ color: !isFormLogin ? '#fff' : '#000' }}
                            onClick={handleSignUpTitleClick}
                        >
                            Signup
                        </label>
                        <div className="slide-tab" ref={slideTabRef}></div>
                    </div>
                    <div className="form-inner">
                        <form className="login" ref={loginFormRef} onSubmit={handleLoginSubmit}>
                            <div className="field">
                                <input
                                    id="username-login"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    value={usernameLogin}
                                    onChange={(e) => setUsernameLogin(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <input
                                    id="password-login"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={passwordLogin}
                                    onChange={(e) => setPasswordLogin(e.target.value)}
                                />
                            </div>
                            {error && (<div className='error-text'>{error}</div>)}
                            <div className="pass-link">
                                <a href="#">Forget password?</a>
                            </div>
                            <div className="field btn-submit">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">Don't have an account?
                                <a href="#" onClick={handleSignUpTitleClick}> Signup</a>
                            </div>
                        </form>
                        <form className="signup" onSubmit={handleSignupSubmit}>
                            <div className="field">
                                <input
                                    id="username-signup"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    value={usernameSignup}
                                    onChange={(e) => setUsernameSignup(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <input
                                    id="password-signup"
                                    type="password"
                                    placeholder="Create password"
                                    required
                                    value={passwordSignup}
                                    onChange={(e) => setPasswordSignup(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <input
                                    id="confirm-password"
                                    type="password"
                                    placeholder="Confirm password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            {error && (<div className='error-text'>{error}</div>)}
                            <div className="field btn-submit">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: grid;
    height: 100%;
    width: 100%;
    place-items: center;
    background: linear-gradient(to right, #e09f7a 0%, #d09f86 100%);

    .wrapper {
        overflow: hidden;
        max-width: 410px;
        background: #fff;
        padding: 50px 40px;
        border-radius: 8px;
        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
        flex: 1;
    }
    .wrapper .title-text {
        display: flex;
        width: 200%;
    }
    .wrapper .title-text .title {
        width: 50%;
        font-size: 44px;
        font-weight: 600;
        text-align: center;
        transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .wrapper .form-container {
        width: 100%;
        overflow: hidden;
    }
    .form-container .slide-controls {
        position: relative;
        display: flex;
        height: 50px;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        margin: 30px 0 10px 0;
        justify-content: space-between;
        border: 1px solid lightgray;
    }
    .slide-controls .slide {
        height: 100%;
        width: 100%;
        z-index: 1;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 48px;
        cursor: pointer;
        transition: all 0.6s ease;
    }
    .slide-controls .signup {
        color: #000;
    }
    .slide-controls .slide-tab {
        position: absolute;
        height: 100%;
        width: 50%;
        left: 0;
        z-index: 0;
        border-radius: 5px;
        background: linear-gradient(to right, #e09f7a 0%, #d09f86 100%);
        transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .form-container .form-inner {
        display: flex;
        width: 200%;
    }
    .form-container .form-inner form {
        width: 50%;
        transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .form-container .form-inner form .field {
        height: 50px;
        width: 100%;
        margin-top: 20px;
    }
    .form-inner form .field input {
        height: 100%;
        width: 100%;
        outline: none;
        padding-left: 15px;
        font-size: 17px;
        border-radius: 5px;
        border: 1px solid lightgray;
        border-bottom-width: 2px;
    }
    .form-inner form .field input:focus {
        border-color: #eb3349;
    }
    .form-inner form .pass-link {
        text-align: right;
        margin-top: 10px;
    }
    .form-inner form .signup-link {
        margin-top: 30px;
        text-align: center;
    }
    .form-inner form .pass-link a,
    .form-inner form .signup-link a {
        color: #d09f86;
        text-decoration: none;
    }
    .form-inner form .pass-link a:hover,
    .form-inner form .signup-link a:hover {
        text-decoration: underline;
    }
    form .btn-submit {
        height: 50px;
        width: 100%;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
    }
    form .btn-submit .btn-layer {
        height: 100%;
        width: 300%;
        position: absolute;
        left: -100%;
        background: -webkit-linear-gradient(right, #e09f7a, #d09f86, #e09f7a, #d09f86);
        border-radius: 5px;
        transition: all 0.4s ease;
    }
    form .btn-submit:hover .btn-layer {
        left: 0;
    }
    form .btn-submit input[type="submit"] {
        height: 100%;
        width: 100%;
        z-index: 1;
        position: relative;
        background: none;
        border: none;
        color: #fff;
        padding-left: 0;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
    }
    .error-text {
        color: red;
        font-size: 14px;
        margin-top: 8px
    }
}
`

export default LoginPage
