'use client'
import React from 'react'
import styles from './button.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ButtonValorant({ imageLink, url, query }: any) {
    return (
        <main className={styles.container}>
            <div className={styles.imgGroup}>
                <div className={styles.imgBorder}></div>
                <Link href={{
                    pathname: url,
                    query: query,
                }}>
                    <Image
                        width={150}
                        height={150}
                        className={styles.image}
                        src={imageLink.src}
                        alt="img"
                    />
                </Link>
            </div>
        </main>
    )
}
