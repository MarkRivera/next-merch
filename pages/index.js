import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import merchLogo from "../public/images/bg-text.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mike v Merchant | Mikemerch</title>
        <meta name="description" content="Mike" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.landingContainer}>
        <span>Click a site to enter</span>
        <nav className={styles.landingNav}>
          <Link href="/mike/" className={styles.landingLink}>
            <a className={styles.landingMike}>Mike</a>
          </Link>
          <div className={styles.landingDivider} />
          <Link href="/merch/" className={styles.landingLink}>
            <a className={styles.landingMerch}>Merch</a>
          </Link>
        </nav>
      </main>
    </>
  );
}
