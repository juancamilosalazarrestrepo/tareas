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
            <div className="containerTasks">
                <h1>Mis lista de Tareas Realizadas</h1>
                <div className="tasks">

                    {currentDoneTasks.map(tarea => <Task title={tarea.title} description={tarea.description} idTask={tarea.id} done={tarea.done} />)}
                </div>
            </div>
        </div>
    )
}

export default DoneTasks;
