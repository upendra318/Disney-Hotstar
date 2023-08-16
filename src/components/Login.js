import styled from 'styled-components';
import React from 'react'

function Login(props) {
  return (
    <Container>
        <Content>
            <CTA>
                {/* <CTALogoOne><img src={"/images/cta-logo-one.svg"}/></CTALogoOne> */}
                <CTALogoOne src="/images/cta-logo-one.svg" alt='' />
                <SignUp>Get All There</SignUp>
                <Discription>Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited</Discription>
                <CTSLogoTwo src="/images/cta-logo-two.png" alt='' />
            </CTA>
            <BgImg/>
        </Content>
    </Container>
  );
};

const Container = styled.section`
overflow: hedden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;`;

const BgImg = styled.div`
height: 100%;
backgroung-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;`;

const CTA= styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 2s;
width: 100%;
`;

const CTALogoOne= styled.img`
margin-bottom: 12px;
max-height: 600px;
min-width: 1px;
display: block;
width: 100%;
`;

const SignUp= styled.a`
font-weight: bold;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 20px;
padding: 16px 0px;
border: 1px solid transperate;
border-radius: 4px;
&:hover {
    background-color: #0483ee;
    cursor: pointer;
}`;

const Discription= styled.p`
font-size: 11px;
margin: 0px 0px 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTSLogoTwo= styled.img`
margin-bottom: 20px;
max-height: 600px;
min-width: 1px;
display: block;
width: 100%;`;


export default Login