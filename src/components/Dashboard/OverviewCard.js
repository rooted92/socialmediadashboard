import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

const OverviewCard = ({ overviewCard, logo, arrowImg, statDataType, statDataNumbers, percentage, txtColor }) => {
    return (
        <div className={overviewCard}>
            <Container>
                <Row className='mx-2'>
                    {/* <Col className='col-1'></Col> */}
                    <Col className='col-6 d-flex justify-content-start p-0'>
                        <p className='bold'>{statDataType}</p>
                    </Col>
                    <Col className='col-6 d-flex flex-column align-items-end p-0'>
                        <img src={logo} alt='social-media-logo'></img>
                    </Col>
                    {/* <Col className='col-1'></Col> */}
                </Row>
                <Row className='mx-1'>
                    {/* <Col className='col-1'></Col> */}
                    <Col className='col-6 d-flex flex-column align-self-end text-start p-0'>
                        <p className='overviewNumbers mt-1 mx-1'>{statDataNumbers}</p>
                    </Col>
                    {/* <Col className='col-3'></Col> */}
                    <Col className='col-6 d-flex flex-row justify-content-end mt-3 p-0'>
                        <img src={arrowImg} alt='up-down-arrow' className='mt-2' height={'4px'} width={'auto'}></img>
                        <p className={txtColor}>{percentage}%</p>
                    </Col>
                    {/* <Col className='col-1'></Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default OverviewCard;