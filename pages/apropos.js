
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import styles from '../styles/Apropos.module.css'


const Apropos = () => {

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
        <Row id='apropos' className={styles.mainaroposblock} style={{ height: '100vh' }}>
            <Col className={`p-5 my-auto ${styles.part2div} ${isScreenFacing ? styles.active : styles.part2div}`} xl={6} xs={12}>
                <div className='m-auto p-3 '>
                    <h1 className={`text-light ${styles.hovertext}`}> <span className={styles.titlesquare}></span>QUI SOMME NOUS ?</h1>
                    <p className={`text-light ${styles.hovertext}`}><b>Proxima</b> est une entreprise spécialisée en création de contenu web, la photographie et videographie notre mission est d’accompagner les entreprises et les particuliers dans leur communication digitale pour bien profiter de la puissance du canal digital via une communication pertinente et ciblée avec un contenu unique afin d’attirer, informer et fidéliser leurs clients.</p>
                </div></Col>
        </Row>
    )
}

export default Apropos