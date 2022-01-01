import react, { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';
// import Video from '../public/agano.mp4';

export default function Home() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 1000)
  }, [])

  return (
    <>
    <Head>
      <meta name="google-site-verification" content="TF4qk-ZLX3DxiNbZMZKB9vDj_wt2IlIIfx_q4YqD0Qo" />
    </Head>
    <Navbar />
      <div className={styles.container}>
        <video 
          ref={videoRef}
          disablePictureInPicture
          controlsList="nodownload"
          controls={false}
          autoPlay 
          muted 
          loop 
          src='https://res.cloudinary.com/ricahcyuzuzo/video/upload/v1640905256/yobu_y1aieq.mp4'
          className={styles.video}
          >
            <source src='/yobu.mp4' type="video/mp4" />
          </video>
          
          <div className={styles.containerContent}>
            <h1 className={styles.header}>Agano Choir</h1>
            <p className={styles.paragraph}>
              Giving thanks to God through songs is one of the best way to glorify him. Agano chose songs as the best channel for our prayers. 
            </p>
          <Link href='/Joinus'><button className={styles.joinBtn}>Become a Member</button></Link>
          </div>                
      </div>
    </>
  )
}
