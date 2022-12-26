import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <section className="home">
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur ipsum deleniti. Molestias quod ab repellendus amet! Velit fugiat eos nesciunt veritatis quisquam vero? Minima, illum libero. Vero, eaque cupiditate.</p>
        <Link href='/ninjas' className={styles.btn}>See Ninja Listing</Link>
      </section>
    </>
  )
}
