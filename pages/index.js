import Head from 'next/head';
import styles from '../styles/Index.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Open Source by Setu</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Open Source</h1>
                <h2 className={styles.description}>is our DNA</h2>
                <div className={styles.grid}>
                    <a href="/documentor" className={styles.card}>
                        <h3>Documentor 📖</h3>
                        <p>Document any project or API</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="https://setu.co" target="_blank">
                    <img
                        src="/setu.svg"
                        alt="Setu Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
}
