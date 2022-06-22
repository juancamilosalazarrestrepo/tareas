import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import taskServices from "../services/tasks-services";


function EditTask() {


    const { id } = useParams();
    const title = useRef(null);
    const description = useRef(null);
    const done = useRef(null);


    /* const [currentTasktoEdit, setCurrentTaskToEdit] = useState([]);

    useEffect(() => {


        const getTaskToEdit = async () => {


            const tasksData = await taskServices.getAllTasks();
            const taskToEdit = await tasksData.data.filter(task => task.id == 10);
            console.log(taskToEdit)
            if (taskToEdit) {
                setCurrentTaskToEdit(taskToEdit)
            }

        }
        getTaskToEdit();

    }, []); */


    const navigate = useNavigate();


    const editTask = async (e) => {
        e.preventDefault();
        console.log(id)

        console.log('click on submit');
        await taskServices.editTask(title.current.value, description.current.value, id, done.current.value);
        navigate("/task");
        window.location.reload();

    }

    return (
        <div className="container">

            <div className="containerForm">
                <h3 className="titleForm mt-4 text-center">Editar Tarea</h3>

                <form className="mt-3" onSubmit={editTask}>
                    <div className="mb-3">
                        <label className="form-label ms-1">titulo de la tarea</label>
                        <input type="text" placeholder="Titulo de la tarea" ref={title} className="form-control" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label ms-1">Descripcion de la tarea</label>
                        <input type="text" placeholder="Descripcion de la tarea" ref={description} className="form-control" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label ms-1">Estatus de la tarea</label>
                        <select ref={done} className="form-select" aria-label="Default select example">

                            <option value="1">Hecha</option>
                            <option selected value="0">Sin Terminar</option>

                        </select>
                    </div>



                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>

            </div>

        </div>
    )
}

export default EditTask;