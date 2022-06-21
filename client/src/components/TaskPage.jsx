import Task from "./Task";
import { useEffect, useState } from "react";
import taskServices from "../services/tasks-services";




function TaskPage() {

    const [currentTasks, setCurrentTasks] = useState([]);

    useEffect(() => {
        const getAllTasks = async () => {
            const tasksData = await taskServices.getAllTasks();
            if (tasksData.data) {
                setCurrentTasks(tasksData.data)
            }

        }
        getAllTasks();

    }, []);

    return (
        <div className="container">
            <h1>Mis lista de Tareas</h1>

            {currentTasks.map(tarea => <Task description={tarea.description} idTask={tarea.id} done={tarea.done} />)}
        </div>
    )
}

export default TaskPage;



