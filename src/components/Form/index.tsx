import React from "react";
import { ITask } from "../../types/ITask";
import Button from "../Button/index";
import style from './Form.module.scss'

export default class Form extends React.Component<{
    setTask: React.Dispatch<React.SetStateAction<ITask[]>> 
}> {
    state = {
        task: "",
        time: "00:00"
    }

    saveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(),
        this.props.setTask(oldTasks => [...oldTasks, {... this.state }]);
    }
    
    render () {
        return(
            <form className={style.newTask} onSubmit={this.saveTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>

                    <input 
                    type= "Text"
                    name="Tarefa"
                    id="Tarefa"
                    value={this.state.task}
                    onChange={event => this.setState({...this.state, task: event.target.value})}
                    placeholder="O que voce quer estudar?"
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo
                    </label>

                    <input
                    type= "time"
                    step= "1"
                    name= "tempo"
                    value={this.state.time}
                    onChange={event => this.setState({...this.state, time: event.target.value})}
                    id= "Tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                
                <Button 
                type="submit"
                title="Adicionar"
                />

            </form>
        )
    }

}