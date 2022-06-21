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
            <h1>Crear Usuario</h1>

            <form className="grid" onSubmit={handleSignup}>
                <input ref={name} type="text" className="row" placeholder="Nombre" />
                <input ref={lastName} type="text" className="row" placeholder="Apellido" />
                <input ref={email} type="text" className="row" placeholder="email" />
                <input ref={password} type="password" className="row" placeholder="password" />
                <button type="submit" className="row">Crear Usuario</button>
            </form>
        </div>
    )
}

export default Signup;