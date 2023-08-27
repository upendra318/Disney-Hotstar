import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import {useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { auth, provider } from '../firebase'
import { selectUserEmail, selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/users/userSlice';

const Header = (props) => {
    const dispath= useDispatch();
    const navigate= useNavigate();
    const userName= useSelector(selectUserName);
    const UserEmail= useSelector(selectUserEmail);
    const userPhoto= useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                navigate('/home');
            }
        })
    }, [userName]);

    const handleAuth= () => {
        if(!userName){
            auth.signInWithPopup(provider)
        .then((result) => {
            setUser(result.user);
            console.log(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
        }
        else if(userName){
            auth.signOut().then(() => {
                dispath(setSignOutState());
                navigate('/');
            })
            .catch((err) => alert(err.message));
        }
    };


    const setUser= (user) =>{
        dispath(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };
  return (
    <Nav>
        <Logo>
            <img src="/images/logo.svg" alt=''/>
        </Logo>
        {
            !userName ? <Login onClick={handleAuth}>Login</Login> : <>
        <NavMenu>
            <a href='/Home'>
            <img src="/images/home-icon.svg" alt=''/>
            <span>Home</span>
            </a>
            <a href='/Search'>
            <img src="/images/search-icon.svg" alt=''/>
            <span>Search</span>
            </a>
            <a href='/Watchlist'>
            <img src="/images/watchlist-icon.svg" alt=''/>
            <span>Watchlist</span>
            </a>
            <a href='/Original'>
            <img src="/images/original-icon.svg" alt=''/>
            <span>Originals</span>
            </a>
            <a href='/Movie'>
            <img src="/images/movie-icon.svg" alt=''/>
            <span>Movies</span>
            </a>
            <a href='/Home'>
            <img src="/images/series-icon.svg" alt=''/>
            <span>series</span>
            </a>
        </NavMenu>
        <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
                <span onClick={handleAuth}> Sign Out</span>
            </DropDown>
        </SignOut>
        </>
        }
    </Nav>
  )
}

const Nav= styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
background-color: #090b13;
height: 70px;
padding: 0px 36px;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 3;
letter-spacing: 16px;
`;

const Logo= styled.a`
padding: 0px;
width: 90px;
margin-top: 4px;
max-height: 70px;
display: inline-block;
img {
    display: block;
    width: 100%;
}`;

const NavMenu= styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
padding: 0px;
margin: 0px;
margin-right: auto;
@media only screen and (max-width : 768px){
    display: none;
}

a {
    display: flex;
    align-items: center;
    padding: 0px 20px;
    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }
    span{
        color: rbg(249, 249, 249);
        letter-spacing: 1.4px;
        line-height: 1.08px;
        padding: 0px 2px;
        white-space: nowrap;
        position: relative;
        &:before{
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -8px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }
    &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
}`;

const Login= styled.a`
background-color: rbga(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.4px;
border: 1px solid;
border-radius: 4px;
transition: all 0.2s ease 0s;
&:hover {
    background-color: #f9f9f9;
    color: #000;
} `;

const UserImg= styled.img`
height: 90%;
border: 1px circle;
border-radius: 50px;`;

const DropDown= styled.div`
position: absolute;
top: 48px;
right: 0px;
background: rgb(19, 19, 19);
// border: 1px solid rgba(151, 151, 151, 151);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity:0;
`;

const SignOut= styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: certer;
justify-content: certer;
&:hover{
    ${DropDown}{
        opacity: 1;
        transition-duration: 1s;
    }
}
`;

export default Header