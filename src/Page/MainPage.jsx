import {useState} from 'react';
import s from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, setFilter } from '../store/TaskSlice.js';



const MainPage = () => {

    const [taskText, setTaskText] = useState('');

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const filter =
        useSelector(state => state.tasks.filter);

    const completedCount = tasks.reduce((count, task) => (task.completed ? count + 1 : count), 0);
    const totalCount = tasks.length;
    const notCompletedCount = totalCount - completedCount;

    const filteredTasks = () => {
        switch (filter) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'current':
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    };

    const filterTasks = (e) => {
        dispatch(setFilter(e.target.id))
    }

    const handleToggle = (task) => {
        dispatch(toggleTask(task.id))
    };

    const handleChange = (e) => {
        setTaskText(e.target.value);
    };

    const addTaskToScreen = () => {
        if (taskText.trim() !== '') {
            dispatch(addTask({id: Date.now(), taskText, completed: false}));
            setTaskText('');
        }
    };


    return (
        <div className={s.divItemBox}>

            <h1>To Do List</h1>

            <div className={s.form}>
                <input type="text" placeholder="Enter task..." className={s.input}
                       value={taskText} onChange={handleChange}/>
                <button onClick={addTaskToScreen}>Add Task</button>
            </div>

            <div className={s.buttonBox} onClick={filterTasks}>
                <button id='all'>All</button>
                <button id='completed'>Completed</button>
                <button id='current'>Current</button>
            </div>

            <div className={s.counter}>
                {filter === 'completed' && <p>Completed tasks: {completedCount}</p>}
                {filter === 'current' && <p>Uncompleted tasks: {notCompletedCount}</p>}
                {filter === 'all' && <p>Completed tasks: {completedCount}</p>}
                {filter === 'all' && <p>Uncompleted tasks: {notCompletedCount}</p>}
            </div>

            <div className={s.itemBox}>
                {
                    filteredTasks().map(task => {
                        return (
                            <div className={s.itemToDo} key={task.id}>
                                <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task)}/>
                                <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                                      onClick={() => handleToggle(task)}>
                                    {task.taskText}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MainPage