import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import taskServices from "../services/tasks-services";


function CreateTask() {

    const description = useRef(null);


    const navigate = useNavigate();


    const createNewTask = async (e) => {
        e.preventDefault();

        console.log('click on submit');
        await taskServices.createTask(description.current.value);
        navigate("/task");
        window.location.reload();

    }

    return (
        <div className="container">
            <h1>Crear Usuario</h1>

            <form className="grid" onSubmit={createNewTask}>
                <input ref={description} type="text" className="row" placeholder="Descripcion de la tarea" />
                <button type="submit" className="row">Crear Tarea</button>
            </form>
        </div>
    )
}

export default CreateTask;