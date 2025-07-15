import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
        {
            id: 't1',
            userID: '1',
            title: 'Master Angular',
            summary: 'Testing and implementing some ideas to study Angular technology.',
            dueDate: '2025-28-06'
        },
        {
            id: 't2',
            userID: '1',
            title: 'Master Angular',
            summary: 'Testing and implementing some ideas to study Angular technology.',
            dueDate: '2025-28-06'
        },
        {
            id: 't3',
            userID: '4',
            title: 'Master Angular',
            summary: 'Testing and implementing some ideas to study Angular technology.',
            dueDate: '2025-28-06'
        },
        {
            id: 't4',
            userID: '4',
            title: 'Master Angular',
            summary: 'Testing and implementing some ideas to study Angular technology.',
            dueDate: '2025-28-06'
        },
        {
            id: 't5',
            userID: '3',
            title: 'Master Angular',
            summary: 'Testing and implementing some ideas to study Angular technology.',
            dueDate: '2025-28-06'
        }
    ];

    constructor() {
        const tasks = localStorage.getItem('tasks');
        
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userID: string) {
        return this.tasks.filter((task) => task.userID === userID);
    }

    addTask(taskData: NewTaskData, userID: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userID: userID,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('taks', JSON.stringify(this.tasks));
    }
}