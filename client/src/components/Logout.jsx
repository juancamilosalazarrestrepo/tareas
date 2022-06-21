import authService from "../services/auth-services";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

    const navigate = useNavigate();

    useEffect(() => {
        authService.logout();
        navigate("/");
        window.location.reload();
    }, []);
    return (
        <h1>Logout</h1>
    )
}

export default Logout;