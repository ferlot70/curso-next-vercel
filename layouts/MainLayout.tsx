import Head from "next/head";
import { Navbar } from "../components/Navbar";
import styles from "./MainLayout.module.css"
import React from "react";

export const MainLayout = (
    { children }: { children: React.ReactNode }
) => {

    return (
        <>
            <Head>
                <title>Home Fernando</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>

            <main className={styles.main}>
                { children }
            </main>
        </>
    )
}
