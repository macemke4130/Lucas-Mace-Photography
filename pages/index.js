import styles from '../styles/Home.module.css';
import PhotoBlock from '../components/PhotoBlock';

export default function Home() {
  return (
    <>
      <div className="centerCol">
        <div className="centerRow">
          <PhotoBlock />
        </div>
      </div>
    </>
  )
}
