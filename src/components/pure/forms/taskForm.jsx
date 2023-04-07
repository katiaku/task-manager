import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.LOW);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mt-2 mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-md' required autoFocus placeholder='Task title'/>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-md my-2' placeholder='Task description'/>
                <span className='mx-3'>Task priority </span>
                <select className='custom-select' ref={levelRef} defaultValue={LEVELS.LOW} is='selectLevel'>
                    <option value={LEVELS.LOW}>
                        Low
                    </option>
                    <option value={LEVELS.MEDIUM}>
                        Medium
                    </option>
                    <option value={LEVELS.HIGH}>
                        High
                    </option>
                </select>
                <button type='submit' className='btn btn-primary text-light btn-md my-2 w-100'>
                    {length > 0 ? 'Add task' : 'Create your first task'}
                </button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
