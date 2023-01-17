import { Item } from './Item';
import style from  './List.module.scss' ;

export function List () {
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