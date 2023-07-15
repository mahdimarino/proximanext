import Link from 'next/link';
import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';






const Navbar = () => {
    return (
        <nav className={`${styles.navbarfixed} navbar px-3 text-light navbar-expand-lg`}>
            <div className="container-fluid text-light">
                <Link className="navbar-brand text-light" href="/">
                    <img style={{ width: '70px', height: '50px' }}
                        src="https://mahdismahi.com/webs/roxima-algerie/topnavlogo.png"
                        alt="proxima logo"
                    />
                </Link>
                <button className="btn-light text-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span><FontAwesomeIcon icon={faBars} /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-light">
                        <li className="nav-item">
                            <Link className={`${styles.a_link} nav-link `} href="/">ACCUEIL</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${styles.a_link} nav-link `} href="/#apropos">A PROPOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${styles.a_link} nav-link `} href="/#nosservices">NOS SERVICES</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link text-light" href="/posts">posts</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className={`${styles.a_link} nav-link `} href="/#portfolio">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${styles.a_link} nav-link `} href="/#contact">CONTACT</Link>
                        </li>
                    </ul>

                    <span className="navbar-text">
                        <Link target="_blank" className="text-light fs-4 m-1" href="https://www.linkedin.com/company/proximadz/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        <Link target="_blank" className="text-light fs-4 m-1" href="https://www.youtube.com/channel/UCaF5rovzS8laWYbdvuvVBPg"><FontAwesomeIcon icon={faYoutube} /></Link>
                        <Link target="_blank" className="text-light  fs-4 m-1" href="https://www.facebook.com/Proximaalgerie"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link target="_blank" className="text-light fs-4 m-1" href="https://www.instagram.com/proxima_algerie/?fbclid=IwAR235mqYuF2JMofgg0meQuEzCXgwCD0d80MC-dkBV5yLO8_JMKWSArEIDnk"><FontAwesomeIcon icon={faInstagram} /></Link>
                    </span>
                </div>
            </div>
        </nav>


    )
}

export default Navbar