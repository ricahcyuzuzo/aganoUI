import React from 'react'
import styles from '../styles/Home.module.css';
import Agano from '../public/agano.png';
import Menu from '../public/menuu.png';
import Close from '../public/close.png';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
        <Link href='#'><Image src={Agano} width={100} height={70} /></Link>
        <ul className={styles.navlinks}>
          <li className={styles.navitem}><Link className={styles.links} href='/'>Home</Link></li>
          <li className={styles.navitem}><Link className={styles.links} href='/about'>About</Link></li>
          <li className={styles.navitem}><Link className={styles.links} href='/songs'>Songs</Link></li>
          <li className={styles.navitem}><Link className={styles.links} href='/donate'>Donate</Link></li>
          <li className={styles.navitem}><Link className={styles.links} href='/Joinus'>Join Us</Link></li>

        </ul>
        <a href='#' onClick={handleOpenNav} className={styles.humberger}><Image src={Menu} width={30} height={30} /></a>
      </div>
      <div className={styles.responsiveNavs} id='respoNav'>
      <div className={styles.respoNavSide}>
        <a href='#' ><Image src={Agano} width={100} height={70} /></a>
        <a href='#' onClick={handleCloseNav}><Image src={Close} width={20} height={20} /></a>
      </div>
        <ul className={styles.navlinkss}>
          <li className={styles.navitem}><Link className={styles.links} href='/'>Home</Link></li>
          <li className={styles.navitem}><Link className={styles.links} href='/about'>About</Link></li>
          <li className={styles.navitem}><Link className={styles.links} href='/songs'>Songs</Link></li>
          <li className={styles.navitem}><Link className={styles.links} href='/donate'>Donate</Link></li>
          <li className={styles.navitem}><Link className={styles.links} href='/Joinus'>Join Us</Link></li>
        </ul>
      </div>  
        </>
    )
}

export default Navbar
