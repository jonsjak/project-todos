import React from 'react';
import { Uncompleted } from './Uncompleted';
import { Completed } from './Completed';
import { AddTask } from './AddTask';
import { TodoCounter } from './TodoCounter';

export const Tasklist = () => {
  return (
    <div className="content-wrapper">
      <h1>To-do-list</h1>
      <AddTask />
      <Uncompleted />
      <Completed />
      <TodoCounter />
    </div>
  )
}