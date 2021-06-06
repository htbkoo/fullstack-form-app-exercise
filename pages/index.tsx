import Head from "next/head";

import styles from "styles/Home.module.css";

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
      </main>

      <footer className={styles.footer}/>
    </div>
  );
}
