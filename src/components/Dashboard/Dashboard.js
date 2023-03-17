import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SocialMediaCard from './SocialMediaCard';
import OverviewCard from './OverviewCard';
import ToggleTheme from '../hooks/Toggle';
import facebookLogo from '../../images/icon-facebook.svg';
import instagramLogo from '../../images/icon-instagram.svg';
import twitterLogo from '../../images/icon-twitter.svg';
import youtubeLogo from '../../images/icon-youtube.svg';
import IconUp from '../../images/icon-up.svg';
import IconDown from '../../images/icon-down.svg';

const Dashboard = () => {

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
                <Row className='mb-4'>
                    {/* <Col className='col-2 '></Col> */}
                    <Col className='col-8 d-flex flex-column align-items-start'>
                        <p className='title m-0'>Social Media Dashboard</p>
                        <p className='m-0 bold'>Total Followers: 23,004</p>
                    </Col>
                    {/* <Col className='col-2'></Col> */}
                    <Col className='col-4 d-flex flex-row justify-content-end'>
                        <p className='mx-2 mt-3 bold'>Dark Mode</p>
                        <ToggleTheme toggleFunc={handleThemeToggle} />
                    </Col>
                    {/* <Col className='col-2'></Col> */}
                </Row>
                <Row className='mt-4'>
                    {/* <Col className='col-2 '></Col> */}
                    <Col className='col-3'>
                        <SocialMediaCard
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
                        <SocialMediaCard
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
                        <SocialMediaCard
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
                        <SocialMediaCard
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
                {/* <Container> */}
                    <Row>
                        {/* <Col className='col-2 mx-2'></Col> */}
                        <Col className='col-3'>
                            <OverviewCard
                            statDataType={'Page Views'}
                            logo={facebookLogo}
                            statDataNumbers={87}
                            arrowImg={IconUp}
                            txtColor={'greenTxt'}
                            percentage={3}
                            overviewCard={'overviewCard'} />
                        </Col>
                        <Col className='col-3'>
                            <OverviewCard
                            statDataType={'Likes'}
                            logo={facebookLogo}
                            statDataNumbers={52}
                            arrowImg={IconDown}
                            txtColor={'redTxt'}
                            percentage={2}
                            overviewCard={'overviewCard'} />
                        </Col>
                        <Col className='col-3'>
                            <OverviewCard
                            statDataType={'Likes'}
                            logo={instagramLogo}
                            statDataNumbers={5462}
                            arrowImg={IconUp}
                            txtColor={'greenTxt'}
                            percentage={2257}
                            overviewCard={'overviewCard'} />
                        </Col>
                        <Col className='col-3'>
                            <OverviewCard
                            statDataType={'Profile Views'}
                            logo={instagramLogo}
                            statDataNumbers={52 + 'k'}
                            arrowImg={IconUp}
                            txtColor={'greenTxt'}
                            percentage={1375}
                            overviewCard={'overviewCard'} />
                        </Col>
                        {/* <Col className='col-2 mx-2'></Col> */}
                    </Row>
                    {/* Second row of overview cards */}
                    <Row className='mt-4'>
                        {/* <Col className='col-2 mx-2'></Col> */}
                        <Col className='col-3'>
                            <OverviewCard
                            statDataType={'Retweets'}
                            logo={twitterLogo}
                            statDataNumbers={117}
                            arrowImg={IconUp}
                            txtColor={'greenTxt'}
                            percentage={303}
                            overviewCard={'overviewCard'} />
                        </Col>
                        <Col className='col-3'>
                            <OverviewCard
                            statDataType={'Likes'}
                            logo={twitterLogo}
                            statDataNumbers={507}
                            arrowImg={IconUp}
                            txtColor={'greenTxt'}
                            percentage={553}
                            overviewCard={'overviewCard'} />
                        </Col>
                        <Col className='col-3'>
                            <OverviewCard
                            statDataType={'Likes'}
                            logo={youtubeLogo}
                            statDataNumbers={107}
                            arrowImg={IconDown}
                            txtColor={'redTxt'}
                            percentage={19}
                            overviewCard={'overviewCard'} />
                        </Col>
                        <Col className='col-3'>
                            <OverviewCard
                            statDataType={'Total Views'}
                            logo={youtubeLogo}
                            statDataNumbers={1407}
                            arrowImg={IconDown}
                            txtColor={'redTxt'}
                            percentage={12}
                            overviewCard={'overviewCard'} />
                        </Col>
                    </Row>
                {/* </Container> */}
            </Container>
        </>
    )
}

export default Dashboard;