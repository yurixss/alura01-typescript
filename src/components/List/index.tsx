import { useState } from 'react';
import { ITask } from '../../types/ITask';
import { Item } from './Item';
import style from  './List.module.scss' ;

export function List ({task} : {task: ITask[]}) {

    return (
        <aside className={style.ListTask}>
            <h2> Estudos do Dia </h2>
            <ul>
                <Item
                    task_name='Javascript'
                    time={'01:00:00'}
                />
                <Item
                    task_name='Typescript'
                    time={'01:00:00'}
                />
                <Item
                    task_name='Python'
                    time={'01:00:00'}
                />
            </ul>
        </aside>
    )
}