import styles from '../styles/Subdivisao.module.css'

export default function Subdivisao(props) {
    return (
        <div 
            style={ {
                backgroundColor: props.preto ? "black" : "white",
            }
        }
            className={styles.subdivisao}>
        </div>
    )
}