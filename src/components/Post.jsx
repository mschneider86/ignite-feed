import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://github.com/mschneider86.png'
          />
          <div className={styles.authorInfo}>
            <strong>Matheus Schneider</strong>
            <span>FullStack Developer</span>
          </div>
        </div>

        <time title='July 28th 16:13' dateTime='2022-07-28 16:13:30'>
          Published 1 hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit!</p>
        <p>Fugiat tempore autem inventore, sed veritatis rem in quisquam</p>

        <p>
          <a href='#'>
            sint molestias, et corrupti adipisci neque magni? Odio totam amet
          </a>
        </p>
        <p>
          <a href='#'>#doloremque</a> <a href='#'>#eius</a>{' '}
          <a href='#'>#maxime</a>
        </p>
      </div>

      <form className={styles.commentsForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
