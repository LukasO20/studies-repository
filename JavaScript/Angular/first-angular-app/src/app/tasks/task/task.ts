import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Card } from '../../shared/card/card';
import { TaskInterface } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  @Input({ required: true }) task!: TaskInterface;
  private tasksService = inject(TasksService);
  
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
