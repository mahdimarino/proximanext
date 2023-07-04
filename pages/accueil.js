import React from 'react'
import styles from '../styles/accueil.module.css'
import { Row, Col } from 'react-bootstrap'

const Accueil = () => {
    return (
        <Row className={styles.mainblock} id='accueil' ><Col className='m-auto text-center text-light' xl={6} xs={12}><h1>THE ILLUSION</h1><h1>BECOME
            {''} <b>REALLITY</b></h1>
            <p className='fs-5 mt-5'>DIGITAL  <span className='mr-5'>AGENCY</span></p></Col></Row>
    )
}

export default Accueil