import styles from '../styles/Home.module.css';
import PhotoBlock from '../components/PhotoBlock';

export default function Home() {
  return (
    <main>
      <PhotoBlock src="./photos/hero.jpg" title="Kenny in the Desert" description="Somewhere in Utah. Just after Sunrise on the Race Accross America 2021." />
    </main>
  )
}
