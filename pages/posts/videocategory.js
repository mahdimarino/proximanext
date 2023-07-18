import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import styles from '../../styles/Apropos.module.css';

const Videocategory = () => {
    return (
        <Row style={{ backgroundColor: 'black' }} className=' m-5 d-flex justify-content-center'>
            <div style={{ marginTop: "7rem" }} className='text-center m-5'>
                <h1 className={`text-light`}>
                    <span className={styles.titlesquare}></span>
                    VIDEOGRAPHIE PORTFOLIO
                </h1>
                <p className={`text-light`}>QUELQUES RÉALISATIONS DE NOS VIDEOGRAPHIE</p>
            </div>

            <Col className={styles.videocontainer} xl={10} md={12}><iframe width="560" height="315" src="https://www.youtube.com/embed/CYC4SRMmS8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </Col>
            <Col className={styles.videocontainer} xl={10} md={12} >

                <iframe width="560" height="315" src="https://www.youtube.com/embed/pUCLZwVldBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


            </Col>
            <Col xl={10} md={12} className={styles.videocontainer}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k2Nbh4fhOHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
            <Col xl={10} md={12} className={styles.videocontainer}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aXXdNYfK-wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>



        </Row>
    )
}

export default Videocategory