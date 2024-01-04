
import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import './ToDolist.css';

/*
export default function ToDolist() {
    let [data, setData] = useState("")
    let [todo, setTodo] = useState([])
    let [completedTodo, setCmpletedTodo] = useState([])
    const submit = () => {
        if (data !== "") {
            const newTodo = {
                id: Date.now(),
                text: data,
                completed: false
            }
            setTodo([...todo, newTodo])
        }
        // const 
        setData("")
    }

    function handle(i) {
        const handleUpdate = todo.map((task) => {
            if (task.id === i) {
                return { ...task, completed: !task.completed }
            }
            return task;
        })
        setTodo(handleUpdate)
    }

    const taskComplete = () => {
        setCmpletedTodo(...completedTodo, handleUpdate)
    }
    return (
        <>
            <div className="page">
                <input type="text" value={data} onChange={(e) => setData(e?.target?.value)} />
                <Button onClick={submit}>+</Button>
                <Button onClick={taskComplete}>Task Completed</Button>
                {todo.map((item, index) => (
                    <ul key={index}>
                        <div>
                            <li>
                                <input type='checkbox' onChange={() => { handle(item.id) }} />
                                {item.text}
                            </li>
                        </div>
                    </ul>
                ))}

            </div>

            <div className="page2">
                {
                    completedTodo.map((e) => (
                        <ul>
                            <li>{e.text}</li>
                        </ul>
                    ))
                }
            </div>
        </>
    )
}
*/

// ... (imports)

export default function ToDolist() {
    const [inputText, setInputText] = useState("");
    const [todo, setTodo] = useState([]);
    const [completedTodo, setCompletedTodo] = useState([]);

    useEffect(() => {
        let pendingTask = JSON.parse(localStorage.getItem("pendingList")) || []
        let completeData = JSON.parse(localStorage.getItem("completeList")) || []
    })

    const submit = () => {
        if (inputText !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputText,
                completed: false
            };
            localStorage.setItem("pendingList", JSON.parse(setTodo([...todo, newTodo])))
            setInputText("");
        }
    };

    const toggleTaskCompletion = (taskId) => {
        const updatedTodo = todo.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed }
            }
            return task;
        })
        setTodo(updatedTodo);
    };

    const taskComplete = () => {
        const completedTasks = todo.filter((task) => task.completed);
        setCompletedTodo([...completedTodo, ...completedTasks]);
        const remainingTasks = todo.filter((task) => !task.completed);
        setTodo(remainingTasks);
    };

    const toggleTaskNotCompletion = (completedTaskId) => {
        const updateCompletedTasks = completedTodo.map((task) => {
            if (task.id === completedTaskId) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
        setTodo(updateCompletedTasks)
    }

    const taskNotComplete = () => {
        const notCompletedTasks = completedTodo.filter((task) => task.completed);
        setTodo([...todo, ...notCompletedTasks]);
        const remainingTasks = completedTodo.filter((task) => !task.completed);
        setCompletedTodo(remainingTasks);
    };

    return (
        <>
            <div className="mainpage">
                <div className="content">
                    <div className="inputData">
                        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    </div>
                    <div className="button">
                        <div className="bt1">
                            <Button onClick={submit}>+</Button>
                        </div>
                        <div className="bt2">
                            <Button onClick={taskComplete}>Task Completed</Button>
                        </div>
                    </div>
                </div>
                <div className="pages">
                    <div className="page1">
                        {todo.map((item) => (
                            <ul key={item.id}>
                                <li>
                                    <input type='checkbox' onChange={() => toggleTaskCompletion(item.id)} />
                                    {item.text}
                                </li>
                            </ul>
                        ))}

                    </div>
                    <div className="page2">
                        <Button onClick={taskNotComplete}>task Not Completed</Button>
                        {completedTodo.length > 0 && (
                            <div className="completed-tasks">
                                {completedTodo.map((completedTask) => (
                                    <ul key={completedTask.id}>
                                        <li>
                                            <input type='checkbox' onChange={() => toggleTaskNotCompletion(completedTask.id)} />
                                            {completedTask.text}</li>
                                    </ul>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}