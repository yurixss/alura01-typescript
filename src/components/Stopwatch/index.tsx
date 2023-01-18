import Button from "../Button/index";
import style from "./StopWatch.module.scss"
import Watch from "./Watch";

export function StopWatch () {

        return (
            <div className={style.stopWatch}>
                <p className={style.title}>
                    Escolha um card e inicie o cronômetro
                </p>

                <div className={style.watchWrapper}>   
                    <Watch/>
                </div>

                <Button
                title="Adicionar"
                />

            </div>
        );
}