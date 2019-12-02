import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SideBarNav = styled.div`
  // border: 1px solid silver;
  ul {
    list-style-type: none;
    padding-right: 0;
    padding-left: 0;

    li.first-child {
       border: none;
    }

    li {
      cursor: pointer;
      font-size: 1.7rem;
      border-top: 1px solid silver;
      padding: 1rem 1rem 1rem 1.8rem;
      font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
      
      a {
        line-height: 1;
        color: #212121;
        display: block;
        text-decoration: none;
      }

      .nested-nav {
        display: block;
        height: 100%;
        width: 100%;
      }
      
      .show {
        display: list-item;
        
        li {
          border: none;
        }
      }
      
      .hide {
        display: none;
      }
    }

  }
`;

export default class extends React.Component {
  state = {
    showInnerNav: false,
  };

  toggleInnerNav = () => {
    console.log('called .......')
    this.setState(prevState => ({ showInnerNav: !prevState.showInnerNav }))
  };
  render () {
      return (
        <SideBarNav>
          <ul className="side-bar-nav">
            <li className="first-child"><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li className="nested-nav">
              <span className="nested-nav" onClick={this.toggleInnerNav}>General</span>
              <ul className={`${this.state.showInnerNav ? 'show' : 'hide'}`}>
                <li className="inner-nav"><NavLink to="/smurfs/new" activeClassName="active">New Smurf</NavLink></li>
                <li className="inner-nav"><NavLink to="" activeClassName="active">Inner Option 2</NavLink></li>
                <li className="inner-nav"><NavLink to="" activeClassName="active">Inner Option 3</NavLink></li>
              </ul>          
            </li>
            <li><NavLink to="" activeClassName="active">Tutorials</NavLink></li>
            <li><NavLink to="" activeClassName="active">Guides</NavLink></li>
            <li><NavLink to="" activeClassName="active">Quick Start</NavLink></li>
            <li><NavLink to="" activeClassName="active">API Reference</NavLink></li>
          </ul>
        </SideBarNav>
      );
  }
};
