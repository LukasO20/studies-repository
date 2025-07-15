export interface TaskInterface {
  id: string;
  userID: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskData {
    title: string, 
    summary: string, 
    date: string
}