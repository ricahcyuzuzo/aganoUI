import Image from 'next/image';
import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';

const about = () => {
    return (
        <div>
            <Navbar />       
            <div className={styles.containerA}>
                <div className={styles.rightSide}>
                    <h1 className={styles.headerA}>Who we are?</h1>
                    <p className={styles.paragraphA}>
                        Agano is a choir of young worshipers thrived to glorify and bring people Jesus with Music and Songs as one of the attractive ways to Jesus.
                    </p>
                    <h1 className={styles.headerA}>Where are we?</h1>
                    <p className={styles.paragraphA}>
                        We are located in Rwanda, Africa. District of Musanze. We are registered at Kigombe Seventh Day Adventist Church.
                    </p>
                </div>

                <div className={styles.leftSide}>
                    <h1 className={styles.headerA}>Our Purpose</h1>
                    <p className={styles.paragraphA}>We want to bring joy and hope to people and show them Jesus for their salvation</p>
                </div>
            </div>
        </div>
    )
}

export default about
