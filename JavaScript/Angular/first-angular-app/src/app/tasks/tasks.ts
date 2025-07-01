import { Component, Input } from '@angular/core';

import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  @Input({ required: true }) userID!: number;
  @Input({ required: true }) name?: string;
  isAddingTask = false;

  tasks = [
    {
       id: 't1',
       userID: 1,
       title: 'Master Angular',
       summary: 'Testing and implementing some ideas to study Angular technology.',
       dueDate: '2025-28-06'
    },
    {
       id: 't2',
       userID: 1,
       title: 'Master Angular',
       summary: 'Testing and implementing some ideas to study Angular technology.',
       dueDate: '2025-28-06'
    },
    {
       id: 't3',
       userID: 4,
       title: 'Master Angular',
       summary: 'Testing and implementing some ideas to study Angular technology.',
       dueDate: '2025-28-06'
    },
    {
       id: 't4',
       userID: 4,
       title: 'Master Angular',
       summary: 'Testing and implementing some ideas to study Angular technology.',
       dueDate: '2025-28-06'
    },
    {
       id: 't5',
       userID: 3,
       title: 'Master Angular',
       summary: 'Testing and implementing some ideas to study Angular technology.',
       dueDate: '2025-28-06'
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userID === this.userID);
  }

  onCompleteTask(id: string) {
   this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask () {
   this.isAddingTask = true;
  }

  onCancelAddTask () {
   this.isAddingTask = false;
  }
}
