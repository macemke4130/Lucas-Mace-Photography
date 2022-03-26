import styles from "../styles/PhotoBlock.module.css";

const PhotoBlock = ({ src, title, description }) => {
    return (
        <div className={styles.photoBlock}>
            <img className={styles.photo} src="/photos/hero.jpg" />
            <div className={styles.photoDetails}>
                <p className={styles.photoTitle}>Kenny in the Desert</p>
                <p className={styles.photoDescription}>Somewhere in Utah. Just after Sunrise on the Race Accross America Course 2021.</p>
            </div>

        </div>
    )
}

export default PhotoBlock;