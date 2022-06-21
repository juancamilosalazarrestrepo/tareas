import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import taskServices from "../services/tasks-services";


function EditTask() {


    const { id } = useParams();

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
        await taskServices.editTask(description.current.value, id, done.current.value);
        navigate("/task");
        window.location.reload();

    }

    return (
        <div className="container">
            <h1>Editar Tarea</h1>

            <form className="grid" onSubmit={editTask}>
                <input ref={description} type="text" className="row" placeholder="" />
                <select ref={done} className="form-select" aria-label="Default select example">

                    <option value="1">Hecha</option>
                    <option selected value="0">Sin Terminar</option>

                </select>

                <button type="submit" className="row">Guardar</button>
            </form>
        </div>
    )
}

export default EditTask;