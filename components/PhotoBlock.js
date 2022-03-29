import styles from "../styles/PhotoBlock.module.css";

const PhotoBlock = ({ src, title, description }) => {
    return (
        <div className={styles.photoBlock}>
            <img className={styles.photo} src={src} />
            <div className={styles.photoDetails}>
                <p className={styles.photoTitle}>{title}</p>
                <p className={styles.photoDescription}>{description}</p>
            </div>

        </div>
    )
}

export default PhotoBlock;