import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import DarkSocialMediaCard from './DarkSocialMediaCard';
import DarkToggle from './DarkToggle';
import facebookLogo from '../../images/icon-facebook.svg';
import instagramLogo from '../../images/icon-instagram.svg';
import twitterLogo from '../../images/icon-twitter.svg';
import youtubeLogo from '../../images/icon-youtube.svg';
import IconUp from '../../images/icon-up.svg';
import IconDown from '../../images/icon-down.svg';

const DarkDashboard = () => {

    const [theme, setTheme] = useState('darkTheme');
    const body = document.body;
    body.classList.add(theme);

    const handleThemeToggle = () => {
        if (theme === 'darkTheme') {
            body.classList.remove(theme);
            setTheme('lightTheme');
            console.log(theme)
        } else {
            body.classList.remove(theme);
            setTheme('darkTheme');
            console.log(theme);
        }
    }

    return (
        <>
            <Container className='p-5'>
                <Row>
                    {/* <Col className='col-2 '></Col> */}
                    <Col className='col-8 d-flex flex-column align-items-start'>
                        <p className='title m-0'>Social Media Dashboard</p>
                        <p className='m-0 bold'>Total Followers: 23,004</p>
                    </Col>
                    {/* <Col className='col-2'></Col> */}
                    <Col className='col-4 d-flex flex-column align-items-end'>
                        <DarkToggle toggleFunc={handleThemeToggle} />
                    </Col>
                    {/* <Col className='col-2'></Col> */}
                </Row>
                <Row className='mt-4 d-flex justify'>
                    {/* <Col className='col-2 '></Col> */}
                    <Col className='col-3'>
                        <DarkSocialMediaCard
                        txtColor={'greenTxt'}
                        smallNumbers={12}
                        arrowImg={IconUp}
                        supporterType={'followers'}
                        numOfFollowers={1987}
                        handle={'@nathanf'}
                        logo={facebookLogo}
                        socialMediaCard={'facebookDiv'} />
                    </Col>
                    <Col className='col-3 '>
                        <DarkSocialMediaCard
                        txtColor={'greenTxt'}
                        smallNumbers={99}
                        arrowImg={IconUp}
                        supporterType={'followers'}
                        numOfFollowers={1044}
                        handle={'@nathanf'}
                        logo={twitterLogo}
                        socialMediaCard={'twitterDiv'} />
                    </Col>
                    <Col className='col-3 '>
                        <DarkSocialMediaCard
                        txtColor={'greenTxt'}
                        smallNumbers={1099}
                        arrowImg={IconUp}
                        supporterType={'followers'}
                        numOfFollowers={`${11}k`}
                        handle={'@realnathanf'}
                        logo={instagramLogo}
                        divColor={'instaDiv'}
                        socialMediaCard={'instagramDiv'} />
                    </Col>
                    <Col className='col-3 '>
                        <DarkSocialMediaCard
                        txtColor={'redTxt'}
                        smallNumbers={144}
                        arrowImg={IconDown}
                        supporterType={'subscribers'}
                        numOfFollowers={8239}
                        handle={'Nathan F.'}
                        logo={youtubeLogo}
                        socialMediaCard={'youtubeDiv'} />
                    </Col>
                    {/* <Col className='col-2 '></Col> */}
                </Row>
                {/* <Container className='mt-5'> */}
                    <Row className='mt-5'>
                        {/* <Col className='col-2'></Col> */}
                        <Col className='col-12 d-flex flex-column align-items-start'>
                            <p className='overviewTxt'>Overview - Today</p>
                        </Col>
                        {/* <Col className='col-2'></Col> */}
                    </Row>
                {/* </Container> */}
                <Container>
                    <Row>
                        <Col className='col-2 mx-2'></Col>
                        <Col className='col-2 mx-2'>

                        </Col>
                        <Col className='col-2 mx-2'>

                        </Col>
                        <Col className='col-2 mx-2'>

                        </Col>
                        <Col className='col-2 mx-2'>

                        </Col>
                        <Col className='col-2 mx-2'></Col>
                    </Row>
                </Container>
            </Container>


        </>
    )
}

export default DarkDashboard;