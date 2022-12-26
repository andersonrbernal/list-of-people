import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Ninjas.module.css';

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja Listing</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link className={styles.single} href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <h3>{ninja.name}</h3>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Ninjas;  