import React from "react";
import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
    return (
        <div>
            <Head>
                <title>My NEXT.JS App</title>
            </Head>
            <main
                className='bg-gray-200 h-screen'
            >
                <Button>testtttttttttt</Button>
            </main>
        </div>
    );
}
