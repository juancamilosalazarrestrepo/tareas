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


const createTask = (description) => {
    return axios.post(API_URL,{description},{
        headers:{
            "Authorization":"Bearer " + token.replaceAll('"','') 
        }
    });
}

const editTask = (description,id,done) => {
    
    return axios.put(API_URL +`/${id}`,{description,done},{
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