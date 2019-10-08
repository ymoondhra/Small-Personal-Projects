// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS

import App from './components/App';

// STYLES

import 'normalize.css';
import './styles/app.scss';

import $ from 'jquery';

$(document).ready( function() {
    // console.log($('.navbar').height());
    console.log($('.container').css('top'));
});

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    $('#background').css('top', 0 - scrolled * 0.1 + 'px');
});
