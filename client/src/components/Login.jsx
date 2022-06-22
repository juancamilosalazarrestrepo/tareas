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

            <div className="containerForm">
                <h3 className="titleForm mt-4 text-center">Login</h3>

                <form className="mt-3" onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label ms-1">Correo Electronico</label>
                        <input type="email" ref={email} className="form-control" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label ms-1">Contraseña</label>
                        <input type="password" className="form-control" ref={password} />
                    </div>

                    <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                </form>

            </div>






        </div>
    )
}

export default Login;