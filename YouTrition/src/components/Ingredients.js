import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

import "../styles/ingredients.scss";

function scroller() {
  {
    var scrolled2 = $(window).scrollTop();
    $(".ingredient").each(function(index) {
      var top = $(this).offset().top;
      var height = $(this).height();
      var ratio = Math.abs((top - scrolled2) / height);
      if (index % 2 == 1) ratio = Math.abs((scrolled2 - top) / height);

      // width of invisible
      $(this)
        .find(".ingredient-space")
        .width((50 * ratio) + "%");

      //opacity
      var opac = 1 - ratio;
      opac = opac * opac;
      $(this)
        .find(".ingredient-description-container")
        .css("opacity", opac);
    });
  }
}

$(document).ready(function() {
  scroller();
  $(window).scroll(scroller);
});

const Ingredient = (props) => {
  return (
    <div className="ingredient">
      <div id={props.id} className="ingredient-img" />
      <div className="ingredient-title flex">
        <div className="ingredient-name">{props.name}</div>
        <div className="ingredient-name ingredient-effect">{props.effect}</div>
      </div>
      <div className="ingredient-large-container flex">
        <div className="ingredient-space" />
        <div className="ingredient-description-container flex">
          <div className="ingredient-description flex">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

Ingredient.propTypes = {
  name: PropTypes.string,
  effect: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
};

/* THINGS TO DO 
-fade when scroll down, like designathon sight
-when reach a certain point, javascript function to fade 
the description in and move it up
-media queries
*/

export default class Second extends Component {
  render() {
    return (
      <div className="page">
        <Ingredient
          id="endurance"
          name="BETA ALANINE"
          effect="endurance"
          description="Beta Alanine is an amino acid 
                    that increases the body’s production of carnosine
                     by up to 80%. Carnosine reduces lactic acid buildup
                      in the skeletal muscles, effectively delaying fatigue
                       and increasing endurance."
        />
        <Ingredient
          id="larginine"
          name="L-ARGININE"
          effect="vascularity"
          description="L-Arginine is an amino acid 
                    that increases the body’s production of carnosine
                     by up to 80%. Carnosine reduces lactic acid buildup
                      in the skeletal muscles, effectively delaying fatigue
                       and increasing endurance."
        />
        <Ingredient
          id="creatine"
          name="CREATINE"
          effect="strength"
          description="Creatine is an amino acid 
                    that increases the body’s production of carnosine
                     by up to 80%. Carnosine reduces lactic acid buildup
                      in the skeletal muscles, effectively delaying fatigue
                       and increasing endurance."
        />
        <Ingredient
          id="betaine"
          name="BETAINE"
          effect="cell protection"
          description="Betaine is an amino acid 
                    that increases the body’s production of carnosine
                     by up to 80%. Carnosine reduces lactic acid buildup
                      in the skeletal muscles, effectively delaying fatigue
                       and increasing endurance."
        />
        <Ingredient
          id="lnorvaline"
          name="L-Norvaline"
          effect="pump"
          description="L-Norvaline is an amino acid 
                    that increases the body’s production of carnosine
                     by up to 80%. Carnosine reduces lactic acid buildup
                      in the skeletal muscles, effectively delaying fatigue
                       and increasing endurance."
        />
        <Ingredient
          id="caffeine"
          name="CAFFEINE"
          effect="energy"
          description="Caffeine is an amino acid 
                    that increases the body’s production of carnosine
                     by up to 80%. Carnosine reduces lactic acid buildup
                      in the skeletal muscles, effectively delaying fatigue
                       and increasing endurance."
        />
        <div className="ingredient-buy flex">
          <p>
            {" "}
            Which flavor was your favorite? <br />
            Start creating your personalized preworkout here:
          </p>
          <a href="https://youtrition.us20.list-manage.com/subscribe/post?u=f655752f5f6674e0a505af86e&id=acfb4d4b1e">
            <button type="button" className="ingredient-button">
              Get Started
            </button>
          </a>
        </div>
      </div>
    );
  }
}

// <img className="ingredient-buy-img" />
