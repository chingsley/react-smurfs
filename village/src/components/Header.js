import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.div`
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 201;
  background-color: #ffffff;
  border-bottom: 1px solid #aeb0b5;

  .smurf-disclaimer {
    padding-left: 2rem;
    font-size: 16px;
    .fa {
      // position: relative;
      // left: 1rem;
      color: #112e51;
      margin-right: 0.5rem;
    }
  }

  .header-nav-bar {
    height: 6rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

    span {
      display: inline-block;
      font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
      font-weight: 700;
      // line-height: 1.3;
      font-size: 3.5rem;
      // color: #112e51;
      position: relative;
      top: 0rem;
      left: 1rem;
      padding-left: 0.75rem;
    }

    .logo {
      color: #98241f;
      padding-right: 0.75rem;
    }

    .site-name {
      color: #112e51;
      border-left: 1px solid #aeb0b5;
    }
  }
`;

const Header = () => {

  return (
    <HeaderContainer>
      <div className="smurf-disclaimer">
        <i className="fa fa-flag-checkered"></i>This is the official website of the United Smurf Government
      </div>
      <div className="header-nav-bar">
        <span className="logo">SMURFS</span><span className="site-name">Developer Site</span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
