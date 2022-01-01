import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';

const songs = () => {
    return (
        <div>
            <Navbar />
            <h1 className={styles.headerA}>Songs</h1>
            <p className={styles.paragraphA}>Our songs are comming soon.</p>
        </div>
    )
}

export default songs
