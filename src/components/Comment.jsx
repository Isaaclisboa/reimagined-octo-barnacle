import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:38">publicado há 1h</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        Muito bom Devon, parabéns!!
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}