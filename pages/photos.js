import Image from "next/image";
import styles from "../styles/Photos.module.css";

export default function Photos(props) {
    const skewMe = () => {
        const deg = 10;
        const min = deg * -1;
        const max = deg;
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    if (props) {
        return (
            <div className={styles.albumContainer}>
                {props.allAlbums?.map((album, i) => (
                    <div key={album} className={styles.albumCard}>
                        <div className={styles.albumStack}>
                            {props?.allPhotos[i].map(photo => (
                                <img key={photo.id} src={`./photos/${photo.filename}`} className={styles.albumStackPhoto} style={{ transform: `rotate(${skewMe()}deg)` }} />
                            ))}
                            <h2 className={styles.albumTitle}>{album}</h2>
                        </div>
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
    const r = await fetch("http://localhost:3000/api/photos");
    const rawJson = await r.json();

    let allAlbums = [];
    for (let i = 0; i < rawJson.length; i++) {
        // Should be forEach?
        allAlbums.push(rawJson[i].album);
    }

    let allPhotos = [];
    for (let i = 0; i < rawJson.length; i++) {
        allPhotos.push(rawJson[i].photos);
    }

    return {
        props: { allAlbums, allPhotos }
    }
}