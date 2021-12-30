import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';

const songs = () => {
    return (
        <div>
            <Navbar />
            <h1 className={styles.headerA}>Songs</h1>
        </div>
    )
}

export default songs
