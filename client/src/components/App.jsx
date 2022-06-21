
import { Routes, Route } from "react-router-dom"
import CreateTask from "./CreateTask";
import DeleteTask from "./DeleteTask";
import DoneTasks from "./DoneTasks";
import EditTask from "./EditTask";


import Login from "./Login";
import Logout from "./Logout";
import Navbar from "./Navbar";
import Signup from "./Signup";
import TaskPage from "./TaskPage";

function App() {


    return (

        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/task" element={<TaskPage />} />
                <Route path="/donetasks" element={<DoneTasks />} />
                <Route path="/createtask" element={<CreateTask />} />
                <Route path="/edittask/:id" element={<EditTask />} />
                <Route path="/deletetask/:id" element={<DeleteTask />} />
            </Routes>




        </>

    );
}

export default App;