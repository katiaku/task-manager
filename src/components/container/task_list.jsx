import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.LOW);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.MEDIUM);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.HIGH);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])

    function completeTask(task){
        console.log('Complete this task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Delete this task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add a new task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={index} 
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}
                            >
                            </TaskComponent>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let tasksTable = <Table></Table>

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = (
        <div>
            <h3 className="mt-5 text-secondary">No tasks to show</h3>
            <h4 className="text-secondary">Please, create a task</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div className='my-3'>
            <div className='col-12' >
                <div className='card border border-1 rounded-3 border-primary'>
                    <div className='card-header pt-3 bg-primary text-light'>
                        <h5>
                            Welcome to Task Manager!
                        </h5>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div
                        className='card-body' data-mdb-perfect-scrollbar='true' 
                        style={{position: 'relative', height: '400px', overflow: 'scroll'}}>
                            {loading ? 
                                (
                                    <div className="mt-5">
                                        <p style={loadingStyle}>Loading...</p>
                                        <div className="spinner-grow text-info" role="status"></div> 
                                    </div>   
                                ) 
                            : tasksTable
                            }
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};

export default TaskListComponent;
