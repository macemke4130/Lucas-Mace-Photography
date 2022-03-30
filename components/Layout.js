import Head from 'next/head';
import Link from 'next/link';
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Lucas Mace Photography</title>
            </Head>
            <header>
                <nav>
                    <Link href="/"><h1>Lucas Mace Photography</h1></Link>
                    <Link href="/about">About</Link>
                    <Link href="/photos">Photos</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;