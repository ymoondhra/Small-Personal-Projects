import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import cx from 'classnames';

import DropDownMenu from './Menu.js';

class MenuList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={cx( 'menuList',
                { slideIn: this.props.open },
                { slideOut: !this.props.open },
                { zeroAnimations: this.props.firstTime }
            )}
            style={{ marginTop: this.props.height }}
            >
                <NavLink className="menuItem flex" to="/">
                    Home
                </NavLink>
                <NavLink className="menuItem flex" to="/ingredients">
                    Ingredients
                </NavLink>
                <NavLink className="menuItem flex" to="/about">
                    About Us
                </NavLink>
            </div>
        );
    }
}

MenuList.propTypes = {
    height: PropTypes.number,
    open: PropTypes.bool,
    firstTime: PropTypes.bool
};

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { height: 0, openMenu: false, firstTime: true };
        this.setSize = this.setSize.bind(this);
        this.menuOpen = this.menuOpen.bind(this);
        this.resetMenu = this.resetMenu.bind(this);
    }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', this.setSize);
    }

    render() {
        var desktopVsMobile = this.props.width > 600;
        if(desktopVsMobile) {
            return(
                <div id="navbar" className="navbar1 flex"> 
                    <NavLink className="nav-link flex" to="/">
                        <div className="nav-logo"> </div>
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/ingredients">
                        Ingredients
                    </NavLink>
                    <NavLink className="nav-link" to="/about">
                        About Us
                    </NavLink>
                </div>
            );
        }

        return(
            <div id="navbar" className="navbar1 flex"> 
                <DropDownMenu
                    menuOpen={this.menuOpen}
                    openMenu={this.state.openMenu}
                    firstTime={this.state.firstTime}
                    resetMenu={this.resetMenu}
                />
                <NavLink className="nav-link flex" to="/">
                    <div className="nav-logo"> </div>
                </NavLink>
                <div />
                <MenuList 
                    height={this.state.height}
                    open={this.state.openMenu}
                    firstTime={this.state.firstTime}
                >
                    {' '}
                </MenuList>
            </div>
        );
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize);
    }

    menuOpen() {
        this.setState(prevState => {
            return {
                firstTime: false,
                openMenu: prevState.openMenu == true ? false : true
            };}
        );
        console.log('opening menu');
    }

    resetMenu() {
        this.setState(() => {
            return { firstTime: true, openMenu: false };
        });
    }

    setSize() {
        this.setState({ height: document.getElementById('navbar').clientHeight });
    }
}

NavBar.propTypes = {
    width: PropTypes.number
};
