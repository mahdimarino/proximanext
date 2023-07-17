import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import styles from '../../styles/Apropos.module.css';

const CategoryPage = ({ categoryData }) => {
    const router = useRouter();
    if (!router.isFallback && !categoryData && !category) {
        return
    }
    const { category } = router.query;
    // const [categoryData, setCategoryData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);



    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(`http://localhost/todolist-api/proximacategory.php?post_category=${category}`);
        //         const data = await response.json();
        //         setCategoryData(data);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };

        // fetchData();
        // console.log(props)
    }, []);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <Row style={{ backgroundColor: 'black' }} className='p-5 m-5 d-flex justify-content-center'>
            <div className='text-center m-5'>
                <h1 className={`text-light`}>
                    <span className={styles.titlesquare}></span>
                    {category} PORTFOLIO
                </h1>
                <p className={`text-light`}>QUELQUES RÉALISATIONS DE NOS {category}</p>
            </div>

            {categoryData && categoryData.map((item) => (
                <Col xl={5} xs={12} key={item.post_id} className='text-center m-3'>
                    <img
                        className={`${styles.img_data}`}
                        style={{ width: '100%', cursor: 'pointer' }}
                        src={`https://mahdismahi.com/webs/proxima_API/uploads/${item.file_name}`}
                        onClick={() => handleImageClick(`https://mahdismahi.com/webs/proxima_API/uploads/${item.file_name}`)}
                        alt={item.post_title}
                    />

                </Col>
            ))}

            <Modal show={selectedImage !== null} onHide={handleCloseModal}>
                <Modal.Body>
                    <img style={{ width: '100%' }} src={selectedImage} alt='Full Size' />
                </Modal.Body>
            </Modal>
        </Row>
    );
};

export default CategoryPage;

export const getServerSideProps = async ({ query }) => {
    const response = await fetch(`https://mahdismahi.com/webs/proxima_API/getcatData.php?post_category=${query.category}`)
    const categoryData = await response.json();


    const reversedData = categoryData.reverse();

    return { props: { categoryData: reversedData } }
}