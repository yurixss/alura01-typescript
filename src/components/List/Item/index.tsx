import style from './Item.module.scss'

type ItemProps = {
    task_name: string;
    time: string;
}


export const Item = ({ task_name, time }: ItemProps) => {

    return (
        <li className={style.item}>
            <h3>
                {task_name}
            </h3>

            <span>
                {time}
            </span>
        </li>
    );

}
