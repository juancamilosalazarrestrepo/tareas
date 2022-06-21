import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth-services";

function Login() {

    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('click on submit');
        console.log(email.current.value);
        await authService.login(email.current.value, password.current.value);
        if (localStorage.getItem("user") === '"Usuario/password invalidos"') {
            alert(localStorage.getItem("user"))
            navigate("/");
        } else {
            navigate("/task");
        }

        window.location.reload();

    }

    return (
        <div className="container">
            <h1>Login Page</h1>

            <form className="grid" onSubmit={handleLogin}>
                <input ref={email} type="text" className="row" placeholder="email" />
                <input ref={password} type="password" className="row" placeholder="password" />
                <button type="submit" className="row">Log in</button>
            </form>
        </div>
    )
}

export default Login;