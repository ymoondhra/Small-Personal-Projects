// Animation Variables
var currentCircles = [];
var starttime = null;
var resetTimeout = null;
var fadingAway = false;
var neverStarted = true;

// Animation Options
var NUM_CIRCLES = 25;
var ANIMATION_DURATION = 10000; // 10 seconds

class BlueCircle {
  constructor(left, top, width, height, DOMReference = null) {
    // all values are percentages
    this.left = left; // current style "left" position value
    this.top = top; // current style "top" position value
    this.width = width; // width
    this.height = height; // height (padding bottom)
    this.DOMReference = DOMReference;

    this.finalLeft = 0; // final "left" position value
    this.finalTop = 0; // final "top" position value
    this.recalculateFinalPosition(false);
  }

  recalculateFinalPosition(setLeftAndTopToPrev=true) {
    var newFinalLeft = 0;
    var newFinalTop = 0;

    if (setLeftAndTopToPrev) {
      this.left = this.finalLeft;
      this.top = this.finalTop;
    }

    if (this.left < 15) {
      var randomVal = Math.random();
      if (this.top < 10) {
        if (randomVal > 0.5) {
          newFinalLeft = 100 - this.width;
          newFinalTop = Math.floor(Math.random() * (100 - this.height - 10)) + 10;
        } else {
          newFinalLeft = Math.floor(Math.random() * (100 - this.width - 10)) + 10;
          newFinalTop = 100 - this.height;
        }
      } else if (this.top > 80) {
        if (randomVal > 0.5) {
          newFinalLeft = 100 - this.width;
          newFinalTop = Math.floor(Math.random() * (100 - this.height - 10));
        } else {
          newFinalLeft = Math.floor(Math.random() * (100 - this.width - 10));
          newFinalTop = 0;
        }
      } else {
        if (randomVal < 0.33) {
          newFinalLeft = Math.floor(Math.random() * (100 - this.width - 10)) + 10;
          newFinalTop = 0;
        } else if (randomVal < 0.67) {
          newFinalLeft = 100 - this.width;
          newFinalTop = Math.floor(Math.random() * (100 - this.height - 10)) + 10;
          // this.DOMReference.style.backgroundColor = "red";
        } else {
          newFinalLeft = Math.floor(Math.random() * (100 - this.width - 10)) + 10;
          newFinalTop = 100 - this.height;
        }
      }
    } else if (this.top < 15) {
      var randomVal = Math.random();
      if (this.left < 10) {
        if (randomVal > 0.5) {
          newFinalTop = 100 - this.height;
          newFinalLeft = Math.floor(Math.random() * (100 - this.width - 10)) + 10;
        } else {
          newFinalTop = Math.floor(Math.random() * (100 - this.height - 10)) + 10;
          newFinalLeft = 100 - this.width;
        }
      } else if (this.left > 80) {
        if (randomVal > 0.5) {
          newFinalTop = 100 - this.height;
          newFinalLeft = Math.floor(Math.random() * (100 - this.width - 10));
        } else {
          newFinalTop = Math.floor(Math.random() * (100 - this.height - 10)) + 10;
          newFinalLeft = 0;
        }
      } else {
        if (randomVal < 0.33) {
          newFinalTop = Math.floor(Math.random() * (100 - this.height - 10)) + 10;
          newFinalLeft = 0;
        } else if (randomVal < 0.67) {
          newFinalTop = 100 - this.height;
          newFinalLeft = Math.floor(Math.random() * (100 - this.width));
        } else {
          newFinalTop = Math.floor(Math.random() * (100 - this.height - 10)) + 10;
          newFinalLeft = 100 - this.width;
        }
      }
    } else if (this.left + this.width >= 99) {
      var randomVal = Math.random();
      if (this.top < 10) {
        if (randomVal > 0.5) {
          newFinalTop = Math.floor(Math.random() * (100 - this.height - 10)) + 10;
          newFinalLeft = 0;
        } else {
          newFinalTop = 100 - this.width;
          newFinalLeft = Math.floor(Math.random() * (100 - this.height - 10)) + 10;
        }
      } else if (this.top > 80) {
        if (randomVal > 0.5) {
          newFinalTop = Math.floor(Math.random() * 80);
          newFinalLeft = 0;
        } else {
          newFinalTop = 0;
          newFinalLeft = Math.floor(Math.random() * 80);
        }
      } else {
        if (randomVal < 0.33) {
          newFinalTop = 0;
          newFinalLeft = Math.floor(Math.random() * (100 - this.width));
        } else if (randomVal < 0.67) {
          newFinalTop = Math.floor(Math.random() * (100 - this.height));
          newFinalLeft = 0;
        } else {
          newFinalTop = 100 - this.height;
          newFinalLeft = Math.floor(Math.random() * (100 - this.width));
        }
      }
    } else if (this.top + this.height >= 99) {
      var randomVal = Math.random();
      if (this.left < 10) {
        if (randomVal > 0.5) {
          newFinalLeft = Math.floor(Math.random() * 80) + 10;
          newFinalTop = 0;
        } else {
          newFinalLeft = 100 - this.width;
          newFinalTop = Math.floor(Math.random() * 80) + 10;
        }
      } else if (this.left > 80) {
        if (randomVal > 0.5) {
          newFinalLeft = Math.floor(Math.random() * 80);
          newFinalTop = 0;
        } else {
          newFinalLeft = 100 - this.width;
          newFinalTop = Math.floor(Math.random() * 80);
        }
      } else {
        if (randomVal < 0.33) {
          newFinalLeft = 0;
          newFinalTop = Math.floor(Math.random() * (100 - this.height));
        } else if (randomVal < 0.67) {
          newFinalLeft = Math.floor(Math.random() * (100 - this.width));
          newFinalTop = 0;
        } else {
          newFinalLeft = 100 - this.width;
          newFinalTop = Math.floor(Math.random() * (100 - this.height));
        }
      }
    } else {
      if (Math.random() > 0.5) {
        if (Math.random() > 0.5) {
          newFinalLeft = 100 - this.width;
        }
        newFinalTop = Math.floor(Math.random() * (100 - this.height));
      } else {
        newFinalLeft = Math.floor(Math.random() * (100 - this.width));
        if (Math.random() > 0.5) {
          newFinalTop = 100 - this.height;
        }
      }
    }

    this.finalLeft = newFinalLeft;
    this.finalTop = newFinalTop;
  }
}

function initializeBlueCircles() {
  var blueCirclesContainer = document.getElementById("blue-circles-container");
  // clear existing circles, if any exist
  if (fadingAway && resetTimeout) // stop the circles from being removed from DOM if they were fading away and were about to be reset
    clearTimeout(resetTimeout);
// generate circles
  var i = currentCircles.length;
  while (i < NUM_CIRCLES) {
    var iDiv = document.createElement("div");
    iDiv.className = "mini";
    // give each circle a random opacity
    var o = Math.floor(Math.random() * 60);
    o = (o / 100 + 0.3).toFixed(2); // 0.3 <= o <= 0.9
    iDiv.style.opacity = o;
    // give each circle a random width
    var width = Math.floor(Math.random() * 5) + 5; // 5% <= o <= 10%
    iDiv.style.width = width + "%";
    // fake the height by using padding bottom (actual height is 0)
    iDiv.style.paddingBottom = width + "%";
    // generate a left property value
    var left = Math.floor(Math.random() * 100);
    if (left + width > 100) l = 100 - 2 * Math.trunc(width);
    // ^ if mini would go off screen, adjust it ^
    // generate a top property value
    var top = Math.floor(Math.random() * 100);
    var height =
      (width * $(blueCirclesContainer).width()) / $(blueCirclesContainer).height();
    if (top + height > 100) top = 100 - 2 * height;
    // ^ if mini would go off screen, adjust it ^
    iDiv.style.left = left + "%";
    iDiv.style.top = top + "%";
    // attach to the DOM
    iDiv = blueCirclesContainer.appendChild(iDiv);
    // append to array
    currentCircles.push(new BlueCircle(left, top, width, height, iDiv));
    i++;
  }
  // fade in the container of circles
  blueCirclesContainer.style.opacity = 0.98;
  // start the animation if it has never been started
  if (neverStarted) {
    requestAnimationFrame(function(timestamp) {
      starttime = timestamp || new Date().getTime();
      move(timestamp);
    });
    neverStarted = false;
  }
}

function move(timestamp) {
  var runtime = (timestamp || new Date().getTime()) - starttime;
  var progress = Math.min(runtime / ANIMATION_DURATION, 1);

  // move all circles
  for (var i = 0; i < currentCircles.length; i++) {
    var newLeft = (currentCircles[i].left + ((currentCircles[i].finalLeft - currentCircles[i].left) * progress)).toFixed(2);
    var newTop = (currentCircles[i].top + ((currentCircles[i].finalTop - currentCircles[i].top) * progress)).toFixed(2);

    currentCircles[i].DOMReference.style.left = newLeft + "%";
    currentCircles[i].DOMReference.style.top = newTop + "%";
  }

  if (runtime < ANIMATION_DURATION) {
    // if duration not met yet
    requestAnimationFrame(function(timestamp) {
      // call requestAnimationFrame again with parameters
      move(timestamp);
    });
  } else {
    for (var i = 0; i < currentCircles.length; i++) {
      currentCircles[i].recalculateFinalPosition();
    }
    requestAnimationFrame(function(timestamp) {
      starttime = timestamp || new Date().getTime(); //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
      move(timestamp);
    });
  }
}

function resizeCircles() {
  var circHolder = document.getElementById("blue-circles-container");
  if (currentCircles.length == 0) return; // if no circles to resize

  var currRatio = $(circHolder).width() / $(circHolder).height();
  for (var i = 0; i < currentCircles.length; i++) {
    // calculate new height percentage so we can calculate finalTop. Padding bottom is the actual height,
    // so we don't need to adjust that
    var newHeight = currentCircles[i].width * currRatio; // percentage of container height
    var heightDifference = currentCircles[i].height - newHeight;

    // adjust final top property. Don't need to adjust width because the circle size is based on width
    currentCircles[i].finalTop = Math.max(0, currentCircles[i].finalTop + heightDifference)

    // apply new height
    currentCircles[i].height = newHeight.toFixed(2);
  }
}

function resetCircles(callback=undefined) {
  for (var i = 0; i < currentCircles.length; i++) {
    if (currentCircles[i].DOMReference)
      currentCircles[i].DOMReference.remove();
    delete currentCircles[i];
  }
  currentCircles = [];
  if (callback) callback();
  starttime = null;
}

function fadeAwayCircles() {
  fadingAway = true;
  document.getElementById("blue-circles-container").style.opacity = 0;
  resetTimeout = setTimeout(function() {
    resetCircles(function () {
      fadingAway = false;
    });
    resetTimeout = null;
  }, 750);// 750ms is the transition time of blue-circles-container
}
