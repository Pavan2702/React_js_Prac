
import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import './ToDolist.css';
import Swal from 'sweetalert2';
import PendingTask from './PendingTask';
import DoneTask from './DoneTask';
import { Edit } from 'lucide-react';

export default function ToDolist() {

    //Create a state for store a data
    const [inputText, setInputText] = useState("");
    const [todo, setTodo] = useState([]);
    const [completedTodo, setCompletedTodo] = useState([]);
    const [editIndex, setEditIndex] = useState(null)

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

    const editHandler = (editedData, index) => {
        setInputText(editedData);
        setEditIndex(index);
    }

    const updateData = () => {
        if (editIndex !== null) {
            const storeUpdate = [...todo]
            storeUpdate[editIndex] = inputText.charAt(0).toUpperCase() + inputText.slice(1)
            setTodo(storeUpdate)
            localStorage.setItem("pendingList", JSON.stringify(storeUpdate));
        }
        setEditIndex(null)
        setInputText("")
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
                                {
                                    (editIndex !== null) ? (
                                        <Edit
                                            id="update"
                                            type="update"
                                            onClick={updateData}
                                        />
                                    ) : (
                                        <Button
                                            id="submit"
                                            type="submit"
                                        ><span>+</span></Button>
                                    )
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div className="pages">
                    <PendingTask todo={todo} setTodo={setTodo} completedTodo={completedTodo} setCompletedTodo={setCompletedTodo} editHandler={editHandler} />
                    <DoneTask completedTodo={completedTodo} setCompletedTodo={setCompletedTodo} todo={todo} setTodo={setTodo} />
                </div>
            </div>
        </>
    )
}
