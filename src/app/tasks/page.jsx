import { AddTask } from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    console.log("Tasks:", tasks);
    return (
        <div>
            <h2>Tasks: {tasks.length}</h2>
            <AddTask />
            <div className='grid grid-cols-3 gap-4 mt-6'>
                {
                    tasks.map((task) => <TasksCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;