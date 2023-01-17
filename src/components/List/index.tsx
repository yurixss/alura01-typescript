import style from  './List.module.scss' ;

export function List () {
    const tarefas = [
        {
            task: "React",
            time: "10:00:00"
    
        },
        {
            task: "Javascript",
            time: "03:00:00"
    
        },
        {
            task: "Php",
            time: "09:00:00"
    
        },
        {
            task: "Lua",
            time: "01:00:00"
    
        }
    ]

    return (
        <aside className={style.ListTask}>

            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li className={style.item} key={index}>
                        <h3> {item.task} </h3>
                        <span> {item.time} </span>
                    </li>
                ))}
            </ul>

        </aside>
    )
}