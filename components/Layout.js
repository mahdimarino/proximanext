import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Navbar.module.css'

const Layout = (props) => {
    return (
        <div style={{ position: 'relative', overflowX: "hidden", backgroundColor: 'black' }}><div className={styles.navbarfixed}><Navbar /></div><div style={{ backgroundColor: 'black' }} >{props.children}</div>  <Footer /></div>
    )
}

export default Layout