import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';

const donate = () => {
    return (
        <div className={styles.donate}>
            <Navbar />
            <h1 className={styles.headerA}>Help us grow</h1>
            <h1 className={styles.headerA} style={{
                fontSize: 26,
                textDecoration: 'underline'
            }}>Bank Account</h1>
            <p className={styles.paragraphA} style={{
                textAlign: 'center',
                width: '90%'
            }}>You can donate us through the Bank account located in Equity Bank Rwanda with The following bank account no.</p>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>4007100715103</h2>

            <h1 className={styles.headerA} style={{
                fontSize: 26,
                textDecoration: 'underline'
            }}>Mobile Money Accounts</h1>
            <p className={styles.paragraphA} style={{
                textAlign: 'center',
                width: '90%'
            }}>You can donate us through the Mobile Money Accounts using the following telephone numbers for the Choir representatives.</p>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>0789375392</h2>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>0783797475</h2>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>0788331507</h2>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>0789614226</h2>

            <p className={styles.paragraphA} style={{
                textAlign: 'center',
                width: '90%'
            }}>You can also find us on our social medias on the following list.</p>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>Email: aganofamilychoir@gmail.com</h2>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>Instagram: <a href='https://instagram.com/aganochoir'>@aganochoir</a></h2>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>Facebook: <a href='https://web.facebook.com/officialaganochoirrwanda'>Agano Choir Page</a></h2>
            <h2 className={styles.headerA} style={{
                fontSize: 20,
                marginTop: 20
            }}>Youtube: <a href='https://www.youtube.com/channel/UCobLGlpUJPtge4MgZO9lj3Q'>Agano Choir Page</a></h2>
        </div>
    )
}

export default donate
