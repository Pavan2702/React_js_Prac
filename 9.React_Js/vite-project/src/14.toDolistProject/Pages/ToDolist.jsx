
import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import './ToDolist.css';
import Swal from 'sweetalert2';
import PendingTask from './PendingTask';
import DoneTask from './DoneTask';

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

    //use useeffect for local storage to store a data 
    useEffect(() => {
        let pendingTask = JSON.parse(localStorage.getItem("pendingList")) || []
        setTodo(pendingTask)
        let completeData = JSON.parse(localStorage.getItem("completeList")) || []
        setCompletedTodo(completeData)
    }, [])

    //To add data in list

    const submit = (e) => {
        e?.preventDefault()
        
        if (inputText !== "") {
            /*const newTodo = {
                id: Date.now(),
                text: inputText,
                completed: false
            };*/
            /*setTodo(prevTodo => {
                const updatedTodo = [...prevTodo, newTodo];
                localStorage.setItem("pendingList", JSON.stringify(updatedTodo))
                return updatedTodo
            })*/
            setTodo([...todo, inputText.charAt(0).toUpperCase() + inputText.slice(1)])
            localStorage.setItem("pendingList", JSON.stringify([...todo, inputText]))
            setInputText("");
        } else {
            Swal.fire({
                text: "Please Enter Data",
                icon: "warning"
            });
        }
    }

    return (
        <>
            <div className="mainpage">
                <div className="content">
                    <form onSubmit={submit}>
                        <h1 className='heading'>To-Do List</h1>
                        <div className="inputData">
                            <div className="inputType">
                                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                            </div>
                            <div className="bt1">
                                <Button
                                    id="submit"
                                    type="submit"
                                ><span>+</span></Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="pages">
                    <PendingTask todo={todo} setTodo={setTodo} completedTodo={completedTodo} setCompletedTodo={setCompletedTodo}/>
                    <DoneTask completedTodo={completedTodo} setCompletedTodo={setCompletedTodo} todo={todo} setTodo={setTodo} />
                </div>
                {/* <div className="pages">
                    <div className="page1">
                        <hr className='vr' />
                        <div className="heading">
                            <h1>Pending Task</h1>
                        </div>
                        <hr className='line' />

                        {todo.length > 0 && (
                            <div className="pending-task">
                                <div className="select">
                                    <input type="checkbox" onChange={() => selectAll()} /> <label>select all</label>
                                </div>

                                {todo.map((item, index) => (
                                    <ul key={index}>
                                        <li>
                                            {item}
                                            <div className="tick">
                                                <input type='checkbox'
                                                    checked={selectedNotDone.includes(index)}
                                                    onChange={() => toggleTaskCompletion(index)}
                                                />

                                                <ArrowRightLeft
                                                    name='taskcmp'
                                                    role='button'
                                                    onClick={() => onArrowTaskComplete(item.id)}
                                                />
                                            </div>
                                        </li>
                                        <hr className='iLine' />
                                    </ul>
                                ))}
                                <div className="btn1">
                                    <Button onClick={taskComplete}>Completed</Button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="page2">
                        <hr className='vr' />
                        <div className="heading">
                            <h1>Completed Task</h1>
                        </div>
                        <hr className='line' />

                        {completedTodo.length > 0 && (
                            <div className="completed-tasks">
                                <div className="select">
                                    <input type="checkbox" checked={completedTodo.completed} onChange={() => selectAll1()} /> <label>select all</label>
                                </div>
                                {completedTodo.map((completedTask) => (
                                    <ul key={completedTask.id}>
                                        <li>
                                            {completedTask.text}
                                            <div className="icons">
                                                <input type='checkbox' onChange={() => toggleTaskNotCompletion(completedTask.id)} />
                                                <Trash2
                                                    role='button'
                                                    onClick={() => deleteSingleTask(completedTask.id)}
                                                />
                                                <ArrowLeftRight
                                                    role='button'
                                                    onClick={() => onArrowTaskNotComplete(completedTask.id)}
                                                />
                                            </div>
                                        </li>
                                        <hr className='iLine' />
                                    </ul>
                                ))}
                                <div className="btn2">
                                    <Button onClick={taskNotComplete}>Not Completed</Button>
                                    <Button onClick={deleteAll}>Delete All</Button>
                                    <Button onClick={selectedDelete}>Delete</Button>

                                </div>
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </>
    )
}
