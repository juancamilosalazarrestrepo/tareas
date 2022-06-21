import authService from "../services/auth-services";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import taskServices from "../services/tasks-services";

function DeleteTask() {


    const { id } = useParams();

    const navigate = useNavigate();

    const deleteTask = async () => {



        console.log('click on submit');
        await taskServices.deleteTask(id);
        navigate("/task");
        window.location.reload();

    }

    deleteTask();
    return (
        <h1>Delete</h1>
    )
}

export default DeleteTask;