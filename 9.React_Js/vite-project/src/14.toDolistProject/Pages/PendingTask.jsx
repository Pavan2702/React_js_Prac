import React, { useEffect, useState } from 'react'
import './ToDolist.css'
import { ArrowRightLeft } from 'lucide-react';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';


export default function PendingTask({ todo, setTodo, completedTodo, setCompletedTodo }) {
    const [selectedNotDone, setSelectedNotDone] = useState([])


    useEffect(() => {
        let pendingTask = JSON.parse(localStorage.getItem("pendingList")) || []
        setTodo(pendingTask)
    }, [])

    const toggleTaskCompletion = (index) => {
        let match = selectedNotDone.includes(index);
        if (match) {
            setSelectedNotDone(selectedNotDone.filter((e) => e !== index));
        } else {
            setSelectedNotDone([...selectedNotDone, index]);
        }
    };

    const selectAll = () => {
        if (selectedNotDone.length !== todo.length) {
            setSelectedNotDone(todo.map((e, index) => index));
        } else {
            setSelectedNotDone([]);
        }
    };

    const onArrowTaskComplete = (index) => {
        let notDone = [];
        let done = [];
        todo.filter((e, i) => {
            if (i === index) {
                notDone.push(e);
                Swal.fire('Excellent 👍', `${notDone} task is complete`, 'success')
            } else {
                done.push(e);
            }
        });

        setTodo(done);
        setCompletedTodo([...completedTodo, ...notDone]);
        localStorage.setItem("completeList", JSON.stringify([...todo, ...notDone]));
        localStorage.setItem("pendingList", JSON.stringify(done));
        setSelectedNotDone([]);

    };

    const taskComplete = () => {
        let notDone = [];
        let done = [];

        todo.map((e, i) => {
            if (selectedNotDone?.includes(i)) {
                done.push(e);
                Swal.fire('Excellent', `${done} task are complete`, 'success')
            } else {
                notDone.push(e);
            }
        });
        setTodo(notDone);
        setCompletedTodo([...completedTodo, ...done]);
        console.log("🚀 ~ taskComplete ~ completedTodo:", completedTodo)
        localStorage.setItem("completeList", JSON.stringify([...completedTodo, ...done]));
        localStorage.setItem("pendingList", JSON.stringify(notDone));
        setSelectedNotDone([]);

    };
    return (
        <>
            <div className="page1">
                <div className="heading">
                    <h1>Pending Task</h1>
                </div>
                <hr className='line' />

                {todo.length > 0 && (
                    <div className="pending-task">
                        <div className="select">
                            <input type="checkbox" checked={selectedNotDone.length == todo.length} onChange={selectAll} /> <label>select all</label>
                        </div>

                        {todo.map((item, index) => (
                            <ul key={index}>
                                <li>
                                    <div className='text'>
                                        <div className="text1">
                                            {index + 1}.
                                        </div>
                                        {item}
                                    </div>
                                    <div className="tick">
                                        <input type='checkbox'
                                            checked={selectedNotDone.includes(index)}
                                            onChange={() => toggleTaskCompletion(index)}
                                        />

                                        <ArrowRightLeft
                                            name='taskcmp'
                                            role='button'
                                            onClick={() => onArrowTaskComplete(index)}
                                        />
                                    </div>
                                </li>
                                <hr className='iLine' />
                            </ul>
                        ))}
                        <div className="btn1">
                            <Button className='btn btn-danger border border-50px' onClick={taskComplete}>Completed</Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
