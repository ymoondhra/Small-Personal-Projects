import React, { Component } from 'react';
// import cx from 'classnames';
// import { NavLink } from 'react-router-dom';

export default class HomePage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="page">
                <div id="welcome" className="textContainer">
                    <div id="background">
                        <div id="background2" />
                    </div>
                    <div className="text flex">
                        <div className="youtritionHeader"> YouTrition</div>
                        <br />
                        <div className="line" />
                        <p className="youtritionText"> 
                        Our mission at YouTrition is to create personalized supplement formulas to cater to your distinctive fitness goals and unique body type.
                        We strive to maximize the effect of our product by providing you with the optimal doses
                        of only the key ingredients, avoiding the unhealthy chemicals found in other supplements. <br /> <br />

                        Just enter your email below and you will be contacted by one of our supplement specialists!
                        </p>
                        <div id="mc_embed_signup">
                            <form action="https://youtrition.us20.list-manage.com/subscribe/post?u=f655752f5f6674e0a505af86e&amp;id=acfb4d4b1e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll" className="flex">
                                    <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                                        <input type="text" name="b_f655752f5f6674e0a505af86e_acfb4d4b1e" tabIndex="-1" value="" />
                                    </div>
                                    <div className="clear">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br />
                        <div id="logo1" className="textBackground" />
                    </div>
                    <div className="nontext">
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