import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import signupService from "../services/signup-services";


function Signup() {

    const name = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();


    const handleSignup = async (e) => {
        e.preventDefault();
        console.log('click on submit');
        console.log(email.current.value);
        await signupService.signup(name.current.value, lastName.current.value, email.current.value, password.current.value);

        navigate("/");

        window.location.reload();

    }

    return (
        <div className="container">

            <div className="containerForm">
                <h3 className="titleForm mt-4 text-center">Crear Usuario</h3>

                <form className="mt-4" onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label className="form-label ms-1">Nombres</label>
                        <input type="text" ref={name} className="form-control" placeholder="Nombre" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label ms-1">Apellidos</label>
                        <input type="text" ref={lastName} className="form-control" placeholder="Apellido" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label ms-1">Correo Electronico</label>
                        <input type="email" ref={email} className="form-control" placeholder="email" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label ms-1">Contraseña</label>
                        <input type="password" className="form-control" ref={password} placeholder="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </form>

            </div>

        </div>
    )
}

export default Signup;