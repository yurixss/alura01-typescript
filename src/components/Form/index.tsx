import React from "react";
import { Button } from "../Button";
import './styles.scss'

export class Form extends React.Component {

    render () {
        return(
            <form className="newTask">
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>

                    <input 
                    type= "Text"
                    name="Tarefa"
                    id="Tarefa"
                    placeholder="O que voce quer estudar?"
                    required
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="time">
                        Tempo
                    </label>

                    <input
                    type= "time"
                    step= "1"
                    name= "tempo"
                    id= "Tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                
                <Button/>

            </form>
        )
    }

}