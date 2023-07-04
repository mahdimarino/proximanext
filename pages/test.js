

import { useEffect, useRef } from 'react';
import styles from '../styles/test.module.css'

function Test() {
    const contentRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const contentPosition = contentRef.current.getBoundingClientRect().top;
                const screenPosition = window.innerHeight;

                if (contentPosition < screenPosition) {
                    contentRef.current.classList.add('k');
                } else {
                    contentRef.current.classList.remove('k');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={styles.z}>
            <div className={styles.a}>
                lorem
            </div>
            <div className={styles.b} ref={contentRef}>
                box
            </div>
            <div className={styles.c}>
                ipsum
            </div>
        </div>
    );
}

export default Test;