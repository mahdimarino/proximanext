import Link from 'next/link'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Row id='footer' style={{ backgroundColor: 'black ', color: 'white' }} className='overflow-hidden p-4'>
            <Col md={4} sm={12} className='p-3'>
                <ul>
                    <div className='text-decoration-none'><img style={{ width: "100px" }}
                        src='https://mahdismahi.com/webs/roxima-algerie/LOGOW1.png' /></div>
                    <div>
                        <span className="navbar-text">
                            <Link target="_blank" className="text-light fs-4 m-1" href="https://www.linkedin.com/company/proximadz/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            <Link target="_blank" className="text-light fs-4 m-1" href="https://www.youtube.com/channel/UCaF5rovzS8laWYbdvuvVBPg"><FontAwesomeIcon icon={faYoutube} /></Link>
                            <Link target="_blank" className="text-light  fs-4 m-1" href="https://www.facebook.com/Proximaalgerie"><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link target="_blank" className="text-light fs-4 m-1" href="https://www.instagram.com/proxima_algerie/?fbclid=IwAR235mqYuF2JMofgg0meQuEzCXgwCD0d80MC-dkBV5yLO8_JMKWSArEIDnk"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </span>
                    </div>

                </ul>
            </Col>
            <Col md={4} sm={12} className='p-3'>
                <ul className='text-decoration-none'>
                    <p className='fs-3 '><Link className='text-light' href="/">ACCUEIL</Link></p>
                    <li><Link className='text-light text-decoration-none' href="/#apropos">QUI SOMMES NOUS</Link></li>
                    <li><Link className='text-light text-decoration-none' href="/#portfolio">PORTFOLIO</Link></li>
                    <li><Link className='text-light text-decoration-none' href="/#nosservices">NOS SERVICE</Link></li>
                    <li><Link className='text-light text-decoration-none' href="/#contact">CONTACT</Link></li>
                </ul>
            </Col>
            <Col md={4} sm={12} className='p-3'>
                <ul>
                    <p className='fs-3 '>CONTACT</p>
                    <li><b>TEL</b>: 0559 74 39 76 / 0783 96 38 81</li>
                    <li><b>ADRESS</b>: DIAR ES SAADA - EL MOURADIA</li>
                    <li>proximaacontact@gmail.com</li>

                </ul>
            </Col>

        </Row>
    )
}

export default Footer