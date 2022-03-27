import styles from "../styles/Photos.module.css";

export default function Photos(props) {
    if (props) {
        return (
            <div className="flex">
                {props?.allAlbums.map(album => (
                    <div key={album} className={styles.albumCard}>
                        <h2 className={styles.albumTitle}>{album}</h2>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <h2>Loading...</h2>
        )
    }
}

export const getServerSideProps = async (context) => {
    const r = await fetch("http://localhost:3000/api/");
    const allAlbums = await r.json();

    const x = await fetch("http://localhost:3000/api/photos");
    const allPhotos = await x.json();
    return {
        props: { allAlbums, allPhotos }
    }
}