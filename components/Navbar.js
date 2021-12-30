import React from 'react'
import styles from '../styles/Home.module.css';
import Agano from '../public/agano.png';
import Menu from '../public/menuu.png';
import Close from '../public/close.png';
import Head from 'next/head';
import Image from 'next/image';

const Navbar = () => {
    const handleOpenNav = () => {
        document.getElementById('respoNav').style.width='100%';
      }
    
      const handleCloseNav = () => {
        document.getElementById('respoNav').style.width='0';
      }
    return (
        <>
          <div className={styles.navbar}>
        <a href='#'><Image src={Agano} width={100} height={70} /></a>
        <ul className={styles.navlinks}>
          <li className={styles.navitem}><a className={styles.links} href='/'>Home</a></li>
          <li className={styles.navitem}><a className={styles.links} href='/about'>About</a></li>
          <li className={styles.navitem}><a className={styles.links} href='/songs'>Songs</a></li>
          <li className={styles.navitem}><a className={styles.links} href='/donate'>Donate</a></li>
          <li className={styles.navitem}><a className={styles.links} href='/joinus'>Join Us</a></li>

        </ul>
        <a href='#' onClick={handleOpenNav} className={styles.humberger}><Image src={Menu} width={30} height={30} /></a>
      </div>
      <div className={styles.responsiveNavs} id='respoNav'>
      <div className={styles.respoNavSide}>
        <a href='#' ><Image src={Agano} width={100} height={70} /></a>
        <a href='#' onClick={handleCloseNav}><Image src={Close} width={20} height={20} /></a>
      </div>
        <ul className={styles.navlinkss}>
          <li className={styles.navitem}><a className={styles.links} href='/'>Home</a></li>
          <li className={styles.navitem}><a className={styles.links} href='/about'>About</a></li>
          <li className={styles.navitem}><a className={styles.links} href='/songs'>Songs</a></li>
          <li className={styles.navitem}><a className={styles.links} href='/donate'>Donate</a></li>
          <li className={styles.navitem}><a className={styles.links} href='/joinus'>Join Us</a></li>
        </ul>
      </div>  
        </>
    )
}

export default Navbar
