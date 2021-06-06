import Head from "next/head";

import styles from "styles/Home.module.css";
import HeatMap from "@/components/index/HeatMap";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Form app exercise</title>
        <meta
          name="description"
          content="A toy app to exercise building an app with form"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeatMap />
      </main>

      <footer className={styles.footer}/>
    </div>
  );
}
