import React, { useEffect, useState } from 'react'

import { Col, Row } from 'react-bootstrap'
import styles from '../styles/Nosservices.module.css'

const Nosservices = () => {
    const [isScreenFacing, setIsScreenFacing] = useState(false);

    useEffect(() => {
        const handleOrientationChange = () => {
            const isLandscape = window.matchMedia("(orientation: landscape)").matches;
            setIsScreenFacing(isLandscape);
        };

        window.addEventListener('resize', handleOrientationChange);
        handleOrientationChange(); // Call the function initially

        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }, []);

    return (
        <Row style={{ backgroundColor: 'black', margin: 'auto' }} className='p-5 text-light d-flex justify-content-center' id='nosservices'>
            <Col className=' p-5 ' xl={5} xs={12}>
                <div style={{ border: '5px solid blue' }} className=' my-xs-5' className={` ${styles.serviceblock1} ${isScreenFacing ? styles.active1 : styles.serviceblock1}`} >
                    <ul>
                        <div style={{ width: '80%', textAlign: 'center', position: 'relative', transform: 'translateY(-30px)' }}><h1 style={{ backgroundColor: 'black' }}>SITE INTERNET</h1></div>
                        <li>Landing page</li>
                        <li>Site vitrine UI UX</li>
                        <li>Développement spécifique</li>
                        <li>Responsive Rédaction et création</li>
                        <li>de contenus SEO</li>
                    </ul>
                </div>
            </Col>
            <Col className=' p-5 ' xl={5} xs={12}>
                <div style={{ border: '5px solid blue' }} className=' my-xs-5' className={` ${styles.serviceblock1} ${isScreenFacing ? styles.active1 : styles.serviceblock1}`} >
                    <ul>
                        <div style={{ textAlign: 'center', position: 'relative', transform: 'translateY(-30px)' }}><h1 style={{ backgroundColor: 'black' }}>DESIGN GRAPHIQUE</h1></div>
                        <li>Identité de marque</li>
                        <li>Charte graphique Packagings</li>
                        <li>Supports de communication PLV</li>
                        <li>Design éditorial Identité</li>
                        <li>événementielle Déploiement</li>
                    </ul>
                </div>
            </Col>
            <Col className=' p-5 ' xl={5} xs={12}>
                <div style={{ border: '5px solid blue' }} className=' my-xs-5' className={` ${styles.serviceblock1} ${isScreenFacing ? styles.active1 : styles.serviceblock1}`} >
                    <ul>
                        <div style={{ width: '80%', textAlign: 'center', position: 'relative', transform: 'translateY(-30px)' }}><h1 style={{ backgroundColor: 'black' }}>PHOTOGRAPHIE & VIDEO</h1></div>
                        <li>Prise de vue</li>
                        <li>Retouches Montage et post prod</li>
                        <li>Ecriture du plan de tournaGE</li>
                        <li>Définition du scénario</li>
                        <li>Repérage des lieux</li>
                    </ul>
                </div>
            </Col>
            <Col className=' p-5 ' xl={5} xs={12}>
                <div style={{ border: '5px solid blue' }} className=' my-xs-5' className={` ${styles.serviceblock1} ${isScreenFacing ? styles.active1 : styles.serviceblock1}`} >
                    <ul>
                        <div style={{ width: '80%', textAlign: 'center', position: 'relative', transform: 'translateY(-30px)' }}><h1 style={{ backgroundColor: 'black' }}>DÉVELOPPEMENT DIGITAL</h1></div>
                        <li>Stratégie social media</li>
                        <li>Community management</li>
                        <li>Création de visuels</li>
                        <li>ADS</li>
                        <li>Newsletters</li>
                    </ul>
                </div>
            </Col>



        </Row>
    )
}

export default Nosservices