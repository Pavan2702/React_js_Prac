import React, { useEffect, useState } from 'react'
import './ToDolist.css'
import { ArrowLeftRight, Trash2 } from 'lucide-react';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';


export default function DoneTask({ completedTodo, setCompletedTodo, todo, setTodo }) {
    const [selectedDone, setSelectedDone] = useState([])

    useEffect(() => {
        let completeData = JSON.parse(localStorage.getItem("completeList")) || []
        setCompletedTodo(completeData)
    }, []);

    const toggleTaskNotCompletion = (index) => {
        let match = selectedDone.includes(index);
        if (match) {
            setSelectedDone(selectedDone.filter((e) => e !== index));
        } else {
            setSelectedDone([...selectedDone, index]);
        }
    };

    const selectAll = () => {
        if (selectedDone.length !== completedTodo.length) {
            setSelectedDone(completedTodo.map((e, index) => index));
        } else {
            setSelectedDone([]);
        }
    };

    const onArrowTaskNotComplete = (index) => {
        let notDone = [];
        let done = [];
        completedTodo.filter((e, i) => {
            if (i === index) {
                notDone.push(e);
                Swal.fire('Not Good 😤', `${notDone} task is still pending`, 'success')
            } else {
                done.push(e);
            }
        });

        setCompletedTodo(done);
        setTodo([...todo, ...notDone]);
        localStorage.setItem("completeList", JSON.stringify(done));
        localStorage.setItem("pendingList", JSON.stringify([...todo, ...notDone]));
        setSelectedDone([]);
    };


    const deleteSingleTask = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                });

                let deleteData = completedTodo.filter((e, i) => {
                    return i !== index;
                });

                setCompletedTodo(deleteData);
                setSelectedDone([]);

                localStorage.setItem("completeList", JSON.stringify(deleteData));
            }
        });
    };

    const deleteAll = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "All will be delete?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your task has been deleted.",
                            icon: "success",
                        });
                        setCompletedTodo([])
                        localStorage.removeItem("completeList");
                    }
                })
            }
        });
    };

    const selectedDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                });
                let notDone = [];
                completedTodo.map((e, i) => {
                    if (!selectedDone?.includes(i)) {
                        notDone.push(e);
                    }
                });

                setCompletedTodo(notDone);
                localStorage.setItem("completeList", JSON.stringify(notDone));
                setSelectedDone([]);
            } else {
                Swal.fire({
                    title: "Not selected task",
                    text: "Please select task",
                    icon: "question"
                });
            }
        });
    }

    const taskNotComplete = () => {

        let notDone = [];
        let done = [];

        completedTodo.map((e, i) => {
            if (selectedDone?.includes(i)) {
                notDone.push(e);
                Swal.fire('Very bad 😤', `${notDone} task are still incomplete`, 'success')
            } else {
                done.push(e);
            }
        });

        setCompletedTodo(done);
        setTodo([...todo, ...notDone]);
        localStorage.setItem("completeList", JSON.stringify(done));
        localStorage.setItem("pendingList", JSON.stringify([...todo, ...notDone]));
        setSelectedDone([]);
    }
    return (
        <>
            <div className="page2">
                <div className="heading">
                    <h1>Completed Task</h1>
                </div>
                <hr className='line' />

                {completedTodo.length > 0 && (
                    <div className="completed-tasks">
                        <div className="select">
                            <input type="checkbox" checked={selectedDone.length == completedTodo.length} onChange={selectAll} /> <label>select all</label>
                        </div>
                        {completedTodo.map((completedTask, index) => (
                            <ul key={index}>
                                <li>
                                    <div className='text'>
                                        <div className="text1">
                                            {index + 1}.
                                        </div>
                                        {completedTask}
                                    </div>
                                    <div className="icons">
                                        <input type='checkbox'
                                            checked={selectedDone.includes(index)}
                                            onChange={() => toggleTaskNotCompletion(index)} />
                                        <Trash2
                                            role='button'
                                            onClick={() => deleteSingleTask(index)}
                                        />
                                        <ArrowLeftRight
                                            role='button'
                                            onClick={() => onArrowTaskNotComplete(index)}
                                        />
                                    </div>
                                </li>
                                <hr className='iLine' />
                            </ul>
                        ))}
                        <div className="btn2">
                            {selectedDone.length !== completedTodo.length && (
                                <Button className='btn btn-danger' onClick={deleteAll}>Delete All</Button>
                            )}
                            {selectedDone.length > 0 && (
                                <>
                                    {selectedDone.length !== completedTodo.length && (
                                        <Button className='btn btn-warning' onClick={selectedDelete}>Delete</Button>
                                    )}
                                    {selectedDone.length === completedTodo.length && (
                                        <Button className='btn btn-danger' onClick={deleteAll}>Delete All</Button>
                                    )}
                                    <Button className='btn btn-warning' onClick={taskNotComplete}>Not Completed</Button>
                                </>
                            )}
                        </div>

                    </div>
                )}
            </div>
        </>
    )
}
