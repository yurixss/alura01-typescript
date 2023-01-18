import React, { useState } from 'react';
import style from  './App.module.scss' ;
import { List } from '../components/List';
import { StopWatch } from '../components/Stopwatch';
import { ITask } from '../types/ITask';
import Form from '../components/Form';

function App() {
  const [task, setTask] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
        <Form setTask={setTask}/>
        <List task={task}/>
        <StopWatch/>
    </div>
  );
}

export default App;
