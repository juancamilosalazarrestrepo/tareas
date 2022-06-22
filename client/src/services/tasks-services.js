import axios from "axios";

const API_URL = "http://localhost:3001/api/task";
const token = localStorage.getItem("user");

const getAllTasks = () => {

    return axios.get(API_URL,{
        headers:{
            "Authorization":"Bearer " + token.replaceAll('"','')
        }
    });
}


const createTask = (title,description) => {
    return axios.post(API_URL,{title,description},{
        headers:{
            "Authorization":"Bearer " + token.replaceAll('"','') 
        }
    });
}

const editTask = (title,description,id,done) => {
    
    return axios.put(API_URL +`/${id}`,{title,description,done},{
        headers:{
            "Authorization":"Bearer " + token.replaceAll('"','') 
        }
    });
}

const deleteTask = (id) => {
    
    return axios.delete(API_URL +`/${id}`,{
        headers:{
            "Authorization":"Bearer " + token.replaceAll('"','') 
        }
    });
}
const taskServices = {
    getAllTasks,
    createTask,
    editTask,
    deleteTask
}

export default taskServices;