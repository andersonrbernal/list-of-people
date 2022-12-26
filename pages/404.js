import Link from "next/link"
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

function redirectUser(url, miliseconds) {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push(url)
        }, miliseconds);
    }, [])
}

const NotFound = () => {
    redirectUser('/', 3000);

    return (
        <>
            <Head>
                <title>404</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="not-found">
                <h1>Oooops...</h1>
                <h3>That page cannot be found.</h3>
                <p>
                    Go back to the <Link href='/'>Homepage</Link>
                </p>
            </div>
        </>
    );
}

export default NotFound;