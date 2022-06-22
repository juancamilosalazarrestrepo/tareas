import { Link } from "react-router-dom";
import taskServices from "../services/tasks-services";

function Task(props) {





    return (


        <div className="card">
            <div class="card-body">

                <h3 className="card-text">{props.title}</h3>
                <p className="card-text">{props.description}</p>



                <div className="buttonsContainer">
                    {props.done === true ? <button className="btn btn-success">Hecha</button> : <button className="btn btn-warning">Por Hacer</button>}
                    <Link to={"/edittask/" + props.idTask} className="btn btn-success"><i className="fa-solid fa-pen-to-square"></i></Link>
                    <Link to={"/deletetask/" + props.idTask} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></Link>
                </div>

            </div>
        </div>

    )
}

export default Task;