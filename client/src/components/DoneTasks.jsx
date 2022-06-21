import Task from "./Task";
import { useEffect, useState } from "react";
import taskServices from "../services/tasks-services";




function DoneTasks() {

    const [currentDoneTasks, setCurrentDoneTasks] = useState([]);

    useEffect(() => {
        const getAllDoneTasks = async () => {
            const tasksData = await taskServices.getAllTasks();
            const doneTasks = await tasksData.data.filter(task => task.done == true);
            console.log(doneTasks)
            if (doneTasks) {
                setCurrentDoneTasks(doneTasks)
            }

        }
        getAllDoneTasks();

    }, []);

    return (
        <div className="container">
            <h1>Mis lista de Tareas Realizadas</h1>

            {currentDoneTasks.map(tarea => <Task description={tarea.description} idTask={tarea.id} done={tarea.done} />)}
        </div>
    )
}

export default DoneTasks;
