import { useState } from 'react'

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
}

const Filter = ({ children }) => {
    const [filterState, setFilterState] = useState('all');

    const handleFilterChange = (event) => {
        setFilterState(event.target.value);
    };

    return children(filterState, handleFilterChange);
}

const TaskFilterRenderProps = () => {
    const tasks = [
        { id: 1, title: "Talle S (En Stock)", completed: true },
        { id: 2, title: "Talle M (En Stock)", completed: true },
        { id: 3, title: "Talle XL (En Stock)", completed: false }
    ];

    return (
        <div>
            <Filter>
                {(filterState, handleFilterChange) => (
                    <div>
                        <label htmlFor="filter">Elegir Talle </label>
                        <select id="filter" value={filterState} onChange={handleFilterChange}>
                            <option value='all'>Buzo Estampado Futbol Oversize</option>
                            <option value='completed'>Remera Estampado Rock 1990</option>
                            <option value='incomplete'>Pantalon Cargo Negro Oversize</option>
                        </select>
                        <TaskList
                            tasks={
                                filterState === "all"
                                ? tasks
                                : tasks.filter((task) => 
                                    filterState === "completed" ? task.completed : !task.completed
                                )
                            }
                        />
                    </div>
                )}
            </Filter>
        </div>
    );
}

export default TaskFilterRenderProps

    