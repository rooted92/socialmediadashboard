import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

const OverviewCard = ({ overviewCard, logo, arrowImg, statDataType, statDataNumbers, percentage, txtColor }) => {
    return (
        <div className={overviewCard}>
            <Container>
                <Row>
                    <Col className='col-6'>
                        <p>{statDataType}</p>
                    </Col>
                    <Col className='col-6'>
                        <img src={logo} alt='social-media-logo'></img>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-6'>
                        <p>{statDataNumbers}</p>
                    </Col>
                    <Col className='col-6'>
                        <img src={arrowImg} alt='up-down-arrow'></img>
                        <p className={txtColor}>{percentage}%</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OverviewCard;