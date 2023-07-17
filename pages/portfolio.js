import React from 'react'

import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../styles/Portfolio.module.css'


const Portfolio = () => {
    return (
        <Row id="portfolio" style={{ backgroundColor: 'black' }}>
            <Col className={` ${styles.prtfl11}`} xl={4} xs={12}>
                <Link href="/posts/[category]" as="/posts/DESIGN GRAFIC">
                    <div className={styles.image}>
                        <img className={`${styles.image__img}  ${styles.img22}`} src="https://mahdismahi.com/webs/roxima-algerie/po11.png" alt="Bricks" />
                        <div className={`${styles.image__overlay}  ${styles.image__overlayprimary}`}>
                            <div className={styles.image__title}>DESIGN GRAFIC</div>
                            <p className={styles.image__description}>

                            </p>
                        </div>
                    </div>
                </Link>
            </Col>
            <Col className={` ${styles.prtfl11}`} xl={4} xs={12}>
                <Link href="/posts/videocategory" as="/posts/videocategory">
                    <div className={styles.image}>
                        <img className={`${styles.image__img}  ${styles.img22}`} src="https://mahdismahi.com/webs/roxima-algerie/po33.png" alt="Bricks" />
                        <div className={`${styles.image__overlay}  ${styles.image__overlayprimary}`}>
                            <div className={styles.image__title}>VIDEOGRAPHIE</div>
                            <p className={styles.image__description}>

                            </p>
                        </div>
                    </div>
                </Link>
            </Col><Col className={` ${styles.prtfl11}`} xl={4} xs={12}>
                <Link href="/posts/[category]" as="/posts/PHOTOGRAPHIE">
                    <div className={styles.image}>
                        <img className={`${styles.image__img}  ${styles.img22}`} src="https://mahdismahi.com/webs/roxima-algerie/po22.jpg" alt="Bricks" />
                        <div className={`${styles.image__overlay}  ${styles.image__overlayprimary}`}>
                            <div className={styles.image__title}>PHOTOGRAPHIE</div>
                            <p className={styles.image__description}>

                            </p>
                        </div>
                    </div>
                </Link>
            </Col>
        </Row>
    )
}

export default Portfolio