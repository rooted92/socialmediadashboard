import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

const DarkSocialMediaCard = ({ logo, socialMediaCard, divColor, handle, arrowImg, smallNumbers, numOfFollowers, supporterType, txtColor }) => {
    return (
        <>
            <div className={socialMediaCard}>
                <div className={divColor}></div>
                <Container className='m-0 p-0'>
                    <Row className='mt-4 p-0'>
                        <Col className='col-12 d-flex justify-content-center'>
                            <img className='mx-1' src={logo} alt='social-media-logo'></img>
                            <p className='mx-1 m-0'>{handle}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12'>
                            <p className='bigNumbers m-0'>{numOfFollowers}</p>
                            <p className='followersTxt'>{supporterType}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12 d-flex flex-row justify-content-center mb-5'>
                            <img src={arrowImg} alt='up-down-img' height={'4px'} width={'auto'} className='mt-2 mx-1' ></img>
                            <p className={txtColor}>{smallNumbers}</p>
                            <p className={txtColor}>Today</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default DarkSocialMediaCard;