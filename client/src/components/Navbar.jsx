import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../services/auth-services";

function Navbar() {

    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (



        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>TaskSoft</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {currentUser && (currentUser !== '"Usuario/password invalidos"') ? <>
                            <li className="nav-item">
                                <Link to={"/task"} className="nav-link" aria-current="page">Tareas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/createtask"} className="nav-link" >Crear Tarea</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/donetasks"} className="nav-link" >Tareas hechas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/logout"} className="nav-link" >Cerrar Sesion</Link>
                            </li> </> : <>
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link" >Registrarse</Link>
                            </li>
                        </>
                        }

                    </ul>


                </div>
            </div>
        </nav>
    )
}

export default Navbar;