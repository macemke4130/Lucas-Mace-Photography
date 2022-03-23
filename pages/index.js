import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <img className={styles.hero} src="/photos/hero.jpg" />
      <div className="photoDetails">
        <p className="photoTitle">Kenny in The Desert</p>
        <p className="photoDescription">Somewhere in Utah. Just after Sunrise on the Race Accross America Course 2021.</p>
      </div>
    </>
  )
}
