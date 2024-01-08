
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

export default function ToDolist() {
    //Create a state for store a data
    const [inputText, setInputText] = useState("");
    const [todo, setTodo] = useState([]);
    const [completedTodo, setCompletedTodo] = useState([]);
    // const [notCompletedTodo, SetNotCompletedTodo] = useState([])

    //use useeffect for local storage to store a data 
    useEffect(() => {
        let pendingTask = JSON.parse(localStorage.getItem("pendingList")) || []
        let completeData = JSON.parse(localStorage.getItem("completeList")) || []
        setCompletedTodo(completeData)
        setTodo(pendingTask)
    }, [])

    //To a data in list

    const submit = () => {
        if (inputText !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputText,
                completed: false
            };
            setTodo([...todo, newTodo])
            localStorage.setItem("pendingList", JSON.stringify([...todo, newTodo]))
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
        if (completedTasks.length > 0) {

            // console.log("🚀 ~ file: ToDolist.jsx:111 ~ taskComplete ~ completed:", completedTasks)
            setCompletedTodo([...completedTodo, ...completedTasks]);
            localStorage.setItem("completeList", JSON.stringify([...completedTodo, ...completedTasks]))
        }

        const remainingTasks = todo.filter((task) => !task.completed);
        setTodo(remainingTasks);
        localStorage.setItem("pendingList", JSON.stringify(remainingTasks))

    };

    const toggleTaskNotCompletion = (completedTaskId) => {
        const updateCompletedTasks = completedTodo.map((task) => {
            if (task.id === completedTaskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setCompletedTodo(updateCompletedTasks);
    };

    const taskNotComplete = () => {
        const notCompletedTasks = completedTodo.filter((task) => !task.completed);
        if (notCompletedTasks.length > 0) {
            setTodo([...todo, ...notCompletedTasks]);
            localStorage.setItem("pendingList", JSON.stringify([...todo, ...notCompletedTasks]));

            const remainingTasks = completedTodo.filter((task) => task.completed);
            setCompletedTodo(remainingTasks);
            localStorage.setItem("completeList", JSON.stringify(remainingTasks));
        }
    };

    // const selectAll = (index) => {

    // }

    return (
        <>
            <div className="mainpage">
                <div className="content">
                    <h1 className='heading'>To-Do List</h1>
                    <div className="inputData">
                        <div className="inputType">
                            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                        </div>
                        <div className="bt1">
                            <Button onClick={submit}><span>+</span></Button>
                        </div>
                    </div>

                </div>
                <div className="pages">
                    <div className="page1">

                        <div className="heading">
                            <h1>Pending Task List</h1>
                        </div>

                        {todo.length > 0 && (
                            <div className="pending-task">

                                {/* <input type="checkbox" onChange={(i) => selectAll(i)} /> <p>select all</p> */}
                                {todo.map((item) => (
                                    <ul key={item.id}>
                                        <li>
                                            <input type='checkbox' onChange={() => toggleTaskCompletion(item.id)} />
                                            {item.text}
                                        </li>
                                    </ul>
                                ))}
                                <div className="btn1">
                                    <Button onClick={taskComplete}>Task Completed</Button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="page2">
                        <div className="heading">
                            <h1>Completed Task</h1>
                        </div>

                        {completedTodo.length > 0 && (
                            <div className="completed-tasks">
                                {completedTodo.map((completedTask) => (
                                    <ul key={completedTask.id}>
                                        <li>
                                            <input type='checkbox' onChange={() => toggleTaskNotCompletion(completedTask.id)} />
                                            {completedTask.text}</li>
                                    </ul>
                                ))}
                                <div className="btn2">
                                    <Button onClick={taskNotComplete}>task Not Completed</Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
