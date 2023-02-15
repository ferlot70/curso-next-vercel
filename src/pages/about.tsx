import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import {MainLayout} from "../../layouts/MainLayout";
import {DarkLayout} from "../../components/DarkLayout";
import {ReactElement} from "react";

export default function AboutPage() {
    return (
        <>

            <h1>About page</h1>
            <div className={styles.description}>
                <p>
                    I am in About
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <div className={styles.thirteen}>
                    <Image
                        src="/thirteen.svg"
                        alt="13"
                        width={40}
                        height={31}
                        priority
                    />
                </div>
            </div>

            <div className={styles.grid}>
                <Link href="/">
                    Ir a Home
                </Link>
            </div>
        </>
    )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}