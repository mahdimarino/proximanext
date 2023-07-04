import React from 'react'
import { Col, InputGroup, Row } from 'react-bootstrap'
import styles from '../styles/Apropos.module.css'



const Contact = () => {
    return (
        <Row className=' p-2' id='contact' style={{ height: '100vh', backgroundColor: 'black' }}>

            <Col className='m-auto p-2' xl={7}>
                <h1 className={`text-light mb-3`}> <span className={styles.titlesquare}></span>CONTACT</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
                        <input type="email" placeholder="Enter Your Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div style={{ color: "gray" }} id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-light">Full Name</label>
                        <input type="text" placeholder="Your Full name" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <label for="exampleInputPassword1" className="form-label text-light">Your Comment</label>
                    <div className="form-floating">

                        <textarea className="form-control " id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                    <button style={{ backgroundColor: 'blue', color: 'white' }} type="submit" className="btn mt-3">Submit</button>
                </form>
            </Col>

        </Row>
    )
}

export default Contact