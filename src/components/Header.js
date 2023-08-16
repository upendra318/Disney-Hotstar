import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <Nav>
        <Logo>
            <img src="/images/logo.svg" alt=''/>
        </Logo>
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
        <Login>Login</Login>
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
} 
`;

export default Header