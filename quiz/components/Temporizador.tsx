import { CountdownCircleTimer } from '../node_modules/react-countdown-circle-timer/lib/index'
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#00FF00', '#FFFF00','#FF0000']}
                colorsTime={[props.duracao * 0.66, props.duracao * 0.33, 0]}
            >
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}