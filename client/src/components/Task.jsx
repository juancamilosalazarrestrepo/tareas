import { Link } from "react-router-dom";
import taskServices from "../services/tasks-services";

function Task(props) {





    return (


        <div className="card">
            <div class="card-body">

                <p className="card-text">{props.description}</p>
                <p>{props.idTask}</p>
                <p>Estado: {props.done === true ? "Hecha" : "por Hacer"}</p>

                <div className="buttonsContainer">
                    <Link to={"/edittask/" + props.idTask} className="btn btn-success"><i className="fa-solid fa-pen-to-square"></i></Link>
                    <Link to={"/deletetask/" + props.idTask} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></Link>
                </div>

            </div>
        </div>

    )
}

export default Task;