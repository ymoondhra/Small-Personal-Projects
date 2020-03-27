function initPage() {
  resizePage();
}

function resizePage() {
  var windowHeight = window.innerHeight;
  $(".container").height(windowHeight);
  whatContainer();
}


var on = 0;
function ableBackground() {
  var abler = $("#abler");
  if (on == 0) {
    initializeBlueCircles();
    abler.html("Disable Background");
    on = 1;
  } else {
    fadeAwayCircles();
    abler.css("background-color", "#20212B");
    abler.css("color", "#FBECEC");
    abler.html("Enable Background");
    on = 0;
  }
}

function whatContainer() {
  //whatHome dimensions
  $(".activityVid").css("width", ($("#blackOverlay").height() * 16) / 9);
  if ($("#academicsVid").width() > $("#blackOverlay").width()) {
    $(".activityVid").css("width", "100%");
    $(".activityVid").css("height", "auto");
  }
  resizeCircles();
  resizeActivities();
  // document.getElementById("navText").innerHTML = $("#blackOverlay").height();
  // document.getElementById("contactText").innerHTML = $("#blackOverlay").height();
}

function resizeActivities() {
  var w = $(".activity").width();
  $(".activity").height(w);
}

function whatHover(num) {
  var act;
  var actVid;
  var text = $("#videoExplanation");
  switch (num) {
    case 1:
      act = $("#fitness");
      actVid = $("#fitnessVid");
      text.html(
        "Video of: Peg Wall at Michael's Gym" +
          "<br>" +
          "Click the icon to see more."
      );
      break;
    case 2:
      act = $("#academics");
      actVid = $("#academicsVid");
      text.html(
        "Video of: Game I Created for a UCLA Project" +
          "<br>" +
          "Click the icon to see more."
      );
      break;
    case 3:
      act = $("#music");
      actVid = $("#musicVid");
      text.html(
        "Video of: Pirates of the Caribbean Medley on Marimba" +
          "<br>" +
          "Click the icon to see more."
      );
      break;
    case 4:
      act = $("#service");
      actVid = $("#serviceVid");
      text.html(
        "Video of: Watermelon Eating Contest at Shave-a-thon" +
          "<br>" +
          "Click the icon to see more."
      );
      break;
    default:
      return;
  }

  act
    .children()
    .stop(true)
    .animate({ opacity: 1 }, 800);
  $("#abler")
    .stop(true)
    .animate({ opacity: 0 }, 800);

  act.css("opacity", 0.8);
  act.removeClass("unscale8");
  actVid.stop(true).trigger("play");
  actVid.animate({ opacity: 0.95 }, 800);
  text.stop(true).animate({ opacity: 1 }, 800);
  $(".activity")
    .stop(true)
    .animate({ opacity: 0 }, 800);

  $("#blackOverlay")
    .stop(true)
    .animate({ opacity: 1 }, 800);

  act.stop(true).addClass("scale1180");
  document.getElementById("blue-circles-container").style.opacity = 0;
  $("#whatHeader")
    .stop(true)
    .animate({ opacity: 0 }, 800);
}

function whatLeave(num) {
  var act;
  var actVid;
  var text = $("#videoExplanation");
  switch (num) {
    case 1:
      act = $("#fitness");
      actVid = $("#fitnessVid");
      break;
    case 2:
      act = $("#academics");
      actVid = $("#academicsVid");
      break;
    case 3:
      act = $("#music");
      actVid = $("#musicVid");
      break;
    case 4:
      act = $("#service");
      actVid = $("#serviceVid");
      break;
    default:
      return;
  }

  act
    .children()
    .stop(true)
    .animate({ opacity: 0 }, 800);
  $("#abler")
    .stop(true)
    .animate({ opacity: 0.5 }, 800);
  act.removeClass("scale1180");
  actVid.stop(true).animate({ opacity: 0 }, 800);
  $(".activity")
    .stop(true)
    .animate({ opacity: 0.8 }, 800);
  act.addClass("unscale8").css("background-color", "white");
  text.stop(true).animate({ opacity: 0 }, 800);

  document.getElementById("blue-circles-container").style.opacity = 0.98;
  $("#blackOverlay")
    .stop(true)
    .animate({ opacity: 0 }, 800);
  $("#whatHeader")
    .stop(true)
    .animate({ opacity: 0.99 }, 700);

  setTimeout(function() {
    if (act.hasClass("unscale8")) actVid.trigger("pause");
  }, 800);
}

function smallIn(num) {
  $("#e" + num)
    .stop(true)
    .animate({ opacity: 1 }, 350);
  $("#s" + num)
    .stop(true)
    .addClass("dark");
  // $(dis).children().stop(true).animate({opacity: 1}, 350);
}

function smallOut(num) {
  $("#e" + num)
    .stop(true)
    .animate({ opacity: 0 }, 200);
  $("#s" + num)
    .stop(true)
    .removeClass("dark");
  // $(dis).children().stop(true).animate({opacity: 0}, 200);
}