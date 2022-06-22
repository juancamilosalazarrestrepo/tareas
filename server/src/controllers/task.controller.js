const {Task,User} = require('../database/models');

taskController = {}

taskController.getAllTasks = async (req,res) => {
console.log(req.auth.id);
const tasks = await Task.findAll({
    where:{UserId: req.auth.id}
});
res.json(tasks);
} 

taskController.createTask= async (req,res) => { 
    const {title,description} = req.body;
    const task = await Task.create({title,description, UserId: req.auth.id});
    res.json(task)
}

taskController.editTask= async (req,res) => { 
    const {title,description,done} = req.body;
    const taskedit = await Task.update({
        title:title,
        description:description,
        done:done
    }, {
        where: {
            id: req.params.id,
        }
    });
    res.json(taskedit)
}

taskController.deleteTask= async (req,res) => { 
    console.log("este es el parametro " + req.params.id)
    
    const taskdelete = await Task.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json(taskdelete)
}




module.exports = taskController;