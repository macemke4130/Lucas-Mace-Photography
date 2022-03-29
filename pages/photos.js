import { useState } from "React";
import Image from "next/image";
import styles from "../styles/Photos.module.css";

export default function Photos(props) {
    const skewMe = () => {
        const deg = 20;
        const min = deg * -1;
        const max = deg;
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    if (props) {
        return (
            <div className="flex">
                {props?.allAlbums.map(album => (
                    <div key={album} className={styles.albumCard}>
                        <div className={styles.albumStack}>
                            {props?.allPhotos.map(photo => (
                                <div className={styles.albumStackPhotoContainer}>
                                    <img src={`./photos/${photo.filename}`} className={styles.albumStackPhoto} style={{ transform: `rotate(${skewMe()}deg)` }} />
                                </div>
                            ))}
                        </div>
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
    const r = await fetch("http://localhost:3000/api");
    const allAlbums = await r.json();

    const x = await fetch("http://localhost:3000/api/photos");
    const allPhotos = await x.json();

    return {
        props: { allAlbums, allPhotos }
    }
}