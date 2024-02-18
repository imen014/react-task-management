import React, { useState } from "react";

function CreateTaskList(){
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    //const [taskModified, setTaskModified] = useState(task)
    const [taskCreated, setTaskCreated] = useState(false)
    const [taskModified, setTaskModified] = useState(false)

    function create_task(e){
        setTask(e.target.value);
    };

    function create_task_list(){
        setTaskList([...taskList, task])
    }

    function modify_task(e, index){
        taskList[index] = e.target.value;
        setTaskModified(taskList[index]);
    };

    function confirm_task_creation(){
        setTaskCreated(!taskCreated);
    };

    function ready_to_modify_task(){
        setTaskModified(!taskModified);
    };

    function cancel_modification_mode(){
        setTaskModified(false);
    }

    function delete_task(index) {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    }

    return (
        <div>
            <input type="text" placeholder="enter a task..." onChange={create_task} />
            <input type="button" onClick={() => {create_task_list(); confirm_task_creation();  }}  value="validate" />
            <h2>Tasks in progress </h2>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}> {task} - 
                    <button onClick={ ready_to_modify_task}> {taskModified? "Confirmer": "Modifier"}</button> - {taskModified ? <input type="text" onChange={(e) => modify_task(e,index)} /> : null}
 

                    <button onClick={(index) => delete_task(index) }>supprimer</button>
                     </li>

                ))}
            </ul>
            <button onClick={ cancel_modification_mode}>Cancel Modification</button>

        </div>
    )
}

export default CreateTaskList;