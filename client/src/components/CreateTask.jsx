import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import taskServices from "../services/tasks-services";


function CreateTask() {
    const title = useRef(null);
    const description = useRef(null);



    const navigate = useNavigate();


    const createNewTask = async (e) => {
        e.preventDefault();

        console.log('click on submit');
        await taskServices.createTask(title.current.value, description.current.value);
        navigate("/task");
        window.location.reload();

    }

    return (
        <div className="container">
            <div className="containerForm">
                <h3 className="titleForm mt-4 text-center">Crear Tarea</h3>

                <form className="mt-3" onSubmit={createNewTask}>
                    <div className="mb-3">
                        <label className="form-label ms-1">Titulo de la tarea</label>
                        <input type="text" placeholder="Titulo de la tarea" ref={title} className="form-control" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label ms-1">Descripcion de la tarea</label>
                        <input type="text" placeholder="Descripcion de la tarea" ref={description} className="form-control" />

                    </div>


                    <button type="submit" className="btn btn-primary">Crear Tarea</button>
                </form>

            </div>

        </div>
    )
}

export default CreateTask;