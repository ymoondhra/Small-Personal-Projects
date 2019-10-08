import React, { Component } from 'react';
// import cx from 'classnames';
// import { NavLink } from 'react-router-dom';
// import $ from 'jquery';

import '../styles/about.scss';

export default class About extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="page">
                <div id="background">
                    <div id="background2" />
                </div>
                <div className="about-space" />
                <div className="person-container flex">
                    <div className="person-image" />
                    <div className="person-text">
                        <div className="person-header">
                        Ben Spievak
                        </div>
                        Ben Spievak is a sophomore at UCLA majoring in Business Economics.
                    </div>
                    <div className="personal-social-media">
                        <div className="personal-linkedin" />
                        <div className="personal-email" />
                        <div className="personal-facebook" />
                    </div>
                </div>
            </div>
        );
    }
}

/*

                        <div id="mc_embed_signup">
                            <form action="https://youtrition.us20.list-manage.com/subscribe/post?u=f655752f5f6674e0a505af86e&amp;id=acfb4d4b1e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required> </input>
                                <div id="mc_embed_signup_scroll">
                                    <div className="clear">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                    </div>
                                </div>
                            </form>
                        </div>

*/

/*               <form className="emailForm">
                            <input id="emailName" type="email" name="email" />
                            <input className="submitButton" type="submit" name="submit" value="Submit" />
                        </form>
*/