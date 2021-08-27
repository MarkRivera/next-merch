import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mike Merchant</title>
        <meta name="description" content="Mike" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <h1>Click a site to enter:</h1>
          <ul>
            <li>
              <Link href="/mike/">
                <a>Mike</a>
              </Link>
            </li>
            <li>
              <Link href="/merch/">
                <a>Merch</a>
              </Link>
            </li>
          </ul>
        </Layout>
      </main>
    </div>
  );
}
