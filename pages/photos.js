import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Photos.module.css";

export default function Photos(props) {
    const [explode, setExplode] = useState();

    const skewMe = () => {
        const deg = 10;
        const min = deg * -1;
        const max = deg;
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    const handleMouseOver = (e) => {
        console.log({ in: e.target })
        const allPhotos = [].slice.call(e.target.children);
        allPhotos.splice(allPhotos.length - 1, 1);

        setExplode(allPhotos);

        try {
            allPhotos[0].style.left = "-5rem";
            allPhotos[1].style.right = "-5rem";
            allPhotos[2].style.bottom = "-5rem";
        } catch (e) {
            console.error(e);
        }

    }
    const handleMouseOut = (e) => {
        console.log({ out: e.target });
        const allPhotos = [].slice.call(e.target.children);
        allPhotos.splice(allPhotos.length - 1, 1);

        try {
            explode[0].style.left = "0";
            explode[1].style.right = "0";
            explode[2].style.bottom = "0";
        } catch (e) {
            console.error(e);
        }


    }

    if (props) {
        return (
            <div className={styles.albumContainer}>
                {props.allAlbums?.map((album, i) => (
                    <div key={album} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className={styles.albumCard}>
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