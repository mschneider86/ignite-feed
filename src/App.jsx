import { Header } from '../src/components/Header';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mschneider86.png',
      name: 'Matheus Schneider',
      role: 'FullStack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit!' },
      {
        type: 'paragraph',
        content:
          'Fugiat tempore autem inventore, sed veritatis rem in quisquam',
      },
      {
        type: 'link',
        content:
          'sint molestias, et corrupti adipisci neque magni? Odio totam amet',
      },
    ],
    publishedAt: new Date('2022-08-04 14:22'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk brito',
      role: 'FullStack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit!' },
      {
        type: 'paragraph',
        content:
          'Fugiat tempore autem inventore, sed veritatis rem in quisquam',
      },
      {
        type: 'link',
        content:
          'sint molestias, et corrupti adipisci neque magni? Odio totam amet',
      },
    ],
    publishedAt: new Date('2022-07-04 14:22'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
