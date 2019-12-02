import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #112e51;
  color: white;
  justify-content: space-between;
  padding-top: 2rem;
  height: 10rem;

  .footer-left {
    padding-left: 2rem;

    .footer-header {
      font-weight: 700;
      font-size: 3.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .footer-right {
    // border: 1px solid white;
    flex-grow: 1;
    text-align: right;
    padding-right: 2rem;

    .footer-link {
      display: inline-block;
      padding: 0 0.5rem 1rem;
      text-decoration: none;
      color: white;
      font-size: 24px;
    }
    .fa {f
      display: inline-block;
      // -webkit-font-smoothing: anialiased;
      // border: 1px solid red;
    }
  }

`;

export default () => {

  return (
    <Footer>
      <div className="footer-left">
        <p className="footer-header">SMURFS</p>
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
        <p>
          Lorem Explicabo quibusdam et alias, sequi fugiat tenetur, odit, sapiente dignissimos
        </p>
      </div>
      <div className="footer-right">
        <Link to="" className="footer-link"><i className="fa fa-facebook"></i></Link>
        <Link to="" className="footer-link"><i className="fa fa-twitter"></i></Link>
        <Link to="" className="footer-link"><i className="fa fa-linkedin"></i></Link>
        <Link to="" className="footer-link"><i className="fa fa-youtube"></i></Link>
      </div>
    </Footer>
  );
};

