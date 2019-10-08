var autoMove = setInterval(function() {masterMove(8, false)}, 5000); //initial auto-move for the picture carousel
var barClicked = false; //has the user clicked the bar yet? (no: false)

//init() called when page loads
function init() {
    $("#img" + p1).css("opacity", 0.5);
    $("#img" + p2).css("opacity", 0.8);
    $("#img" + p3).css("opacity", 1.0);
    $("#img" + p4).css("opacity", 0.8);
    $("#img" + p5).css("opacity", 0.5);
}

//parallax effect
$(window).scroll(function()
{
    var scrolled = $(window).scrollTop();
    $('#background').css('top',(0-(scrolled*0.45))+'px');
});

// ************************ PICTURE CAROUSEL ************************
// p1-5 variables map each picture shown on the picture carousel to each div.
// For example, initially, the leftmost image (p1) is #img1
// When the user clicks the right arrow, the leftmost image (p1) becomes #img2 (p1 = 2)
var p1 = 1;
var p2 = 2;
var p3 = 3;
var p4 = 4;
var p5 = 5;

var isMoving = false; //is the picture carousel moving?

var currentButton = 3; //the current button with background-color: green, which represents the image in the center.
//for example, when the leftmost button is green, #img1 is in the center of the picture carousel.

//if right is true, the all the pictures are moved left. If right is false, all pictures move right.
function move(right) {
    if(right) {
        setTimeout(function() {$("#img" + p1).css("z-index", 2)}, 500);
        setTimeout(function() {$("#img" + p2).css("z-index", 3)}, 500);
        setTimeout(function() {$("#img" + p3).css("z-index", 2)}, 500);
        setTimeout(function() {$("#img" + p4).css("z-index", 1)}, 500);
        setTimeout(function() {$("#img" + p5).css("z-index", 1)}, 500);

        $("#img" + p1).animate({marginLeft: "10%", width: "40%", opacity: 0.8}, 1000);
        $("#img" + p2).animate({marginLeft: "20%", width: "60%", opacity: 1.0}, 1000);
        $("#img" + p3).animate({marginLeft: "50%", width: "40%", opacity: 0.8}, 1000);
        $("#img" + p4).animate({marginLeft: "70%", width: "30%", opacity: 0.5}, 1000);
        $("#img" + p5).animate({marginLeft: "0", width: "30%", opacity: 0.5}, 1000);

        setTimeout(function() {
            var oldP5 = p5;
            p5 = p4;
            p4 = p3;
            p3 = p2;
            p2 = p1;
            p1 = oldP5;
        }, 500);
    }
    else {
        setTimeout(function() {$("#img" + p1).css("z-index", 1)}, 500);
        setTimeout(function() {$("#img" + p2).css("z-index", 1)}, 500);
        setTimeout(function() {$("#img" + p3).css("z-index", 2)}, 500);
        setTimeout(function() {$("#img" + p4).css("z-index", 3)}, 500);
        setTimeout(function() {$("#img" + p5).css("z-index", 2)}, 500);

        $("#img" + p1).animate({marginLeft: "70%", width: "30%", opacity: 0.5}, 1000);
        $("#img" + p2).animate({marginLeft: "0", width: "30%", opacity: 0.5}, 1000);
        $("#img" + p3).animate({marginLeft: "10%", width: "40%", opacity: 0.8}, 1000);
        $("#img" + p4).animate({marginLeft: "20%", width: "60%", opacity: 1.0}, 1000);
        $("#img" + p5).animate({marginLeft: "50%", width: "40%", opacity: 0.8}, 1000);

        setTimeout(function() {
            var oldP1 = p1;
            p1 = p2;
            p2 = p3;
            p3 = p4;
            p4 = p5;
            p5 = oldP1;
        }, 500);
    }
}

//very similar to the move function except it completes in half the time.
//only moves the images once, so it must be called twice.
//if called twice, it takes 1 second to move the carousel twice (same as move() for one image)
function moveTwice(right) {
    if(right) {
        setTimeout(function() {$("#img" + p1).css("z-index", 2)}, 250);
        setTimeout(function() {$("#img" + p2).css("z-index", 3)}, 250);
        setTimeout(function() {$("#img" + p3).css("z-index", 2)}, 250);
        setTimeout(function() {$("#img" + p4).css("z-index", 1)}, 250);
        setTimeout(function() {$("#img" + p5).css("z-index", 1)}, 250);

        $("#img" + p1).animate({marginLeft: "10%", width: "40%", opacity: 0.8}, 500, "linear");
        $("#img" + p2).animate({marginLeft: "20%", width: "60%", opacity: 1.0}, 500), "linear";
        $("#img" + p3).animate({marginLeft: "50%", width: "40%", opacity: 0.8}, 500), "linear";
        $("#img" + p4).animate({marginLeft: "70%", width: "30%", opacity: 0.5}, 500), "linear";
        $("#img" + p5).animate({marginLeft: "0", width: "30%", opacity: 0.5}, 500), "linear";

        setTimeout(function() {
            var oldP5 = p5;
            p5 = p4;
            p4 = p3;
            p3 = p2;
            p2 = p1;
            p1 = oldP5;
        }, 250);
    }
    else {
        setTimeout(function() {$("#img" + p1).css("z-index", 1)}, 250);
        setTimeout(function() {$("#img" + p2).css("z-index", 1)}, 250);
        setTimeout(function() {$("#img" + p3).css("z-index", 2)}, 250);
        setTimeout(function() {$("#img" + p4).css("z-index", 3)}, 250);
        setTimeout(function() {$("#img" + p5).css("z-index", 2)}, 250);

        $("#img" + p1).animate({marginLeft: "70%", width: "30%", opacity: 0.5}, 500);
        $("#img" + p2).animate({marginLeft: "0", width: "30%", opacity: 0.5}, 500);
        $("#img" + p3).animate({marginLeft: "10%", width: "40%", opacity: 0.8}, 500);
        $("#img" + p4).animate({marginLeft: "20%", width: "60%", opacity: 1.0}, 500);
        $("#img" + p5).animate({marginLeft: "50%", width: "40%", opacity: 0.8}, 500);

        setTimeout(function() {
            var oldP1 = p1;
            p1 = p2;
            p2 = p3;
            p3 = p4;
            p4 = p5;
            p5 = oldP1;
        }, 250);
    }
}

//num represents the button that was pressed.
//butt(num) makes the currentButton's background color white and makes num's background color green
function butt(num) {
    $("#butt" + currentButton).removeClass("buttClicked");
    $("#butt" + num).addClass("buttClicked");

    if(num == currentButton - 1)
        move(true);
    else if(num == currentButton + 1)
        move(false);
    else if(num == currentButton + 4) {
        move(true);
    }
    else if(num == currentButton - 4) {
        move(false);
    }
    else {
        //two movements away
        var difference = Math.abs(currentButton - num);
        var param = true;
        if(difference == 2 && (currentButton < num)) {
            param = false;
        }
        else if(difference == 3 && (currentButton > num)){
            param = false;
        }
        moveTwice(param);
        setTimeout(function() {moveTwice(param)}, 500);
    }

    currentButton = num;
}

//changeBar decides which button should be pressed next. 
//Used for the auto-move and arrowClick functions
function changeBar(right) {
    var nextButton;
    if(right) {
        nextButton = currentButton + 1;
        if(nextButton == 6)
            nextButton = 1;
    }
    else {
        nextButton = currentButton - 1;
        if(nextButton == 0)
            nextButton = 5;
    }
    butt(nextButton);
}

//arrowClick is called when the user clicks either the left or right arrow on the button bar 
function arrowClick(right) {
    var direction;
    if(right) {
        direction = "#right";
    }
    else
        direction = "#left";
    $(direction + "Fill").animate({opacity: 1}, 300);
    $(direction + "Half").animate({opacity: 0}, 300);
    $(direction + "Img").animate({opacity: 0}, 300);

    changeBar(right ? true : false);

    setTimeout(function() {
        $(direction + "Fill").animate({opacity: 0}, 200);
        $(direction + "Half").animate({opacity: 1}, 200);
        $(direction + "Img").animate({opacity: 1}, 200);
    }, 800);

}

//all click functions for buttons call this function, as well as the auto-move function (line 1 of this file).
//the parameter "user" represents whether the user called the function. If the user called the function, then the auto-move function must stop.
function masterMove(num, user) {
    if(isMoving)
        return;
    isMoving = true;

    if(user && !barClicked) {
        barClicked = true;
        clearInterval(autoMove);
    }

    $(".bar").animate({opacity: 0.75}, 300);
    setTimeout(function() {
        $(".bar").animate({"opacity": 1.0}, 200);
    }, 800);
    setTimeout(function() {
        isMoving = false;
    }, 1000);

    switch(num) {
        case 1: arrowClick(false); break;
        case 2: butt(1); break;
        case 3: butt(2); break;
        case 4: butt(3); break;
        case 5: butt(4); break;
        case 6: butt(5); break;
        case 7: arrowClick(true); break;
        case 8: changeBar(false); break;
        default: return;
    }
}

//scroll functions for when nav bar buttons are pressed.
var isScrolling = false;
    function scrollToo(num) {
        if(isScrolling) {
            return;
        }
        isScrolling = true;

        var divToGoTo;
        switch(num) {
            case 0: divToGoTo = $("#spaceForNav"); break;
            case 1: divToGoTo = $("#secondDiv"); break;
            case 2: divToGoTo = $("#thirdDiv"); break;
            case 3: divToGoTo = $("#fourthDiv"); break;
            default: return;
        }
        var x = num;
        $('html, body').animate({
        scrollTop: divToGoTo.offset().top}, 1000, "swing");

        setTimeout(function() {
            isScrolling = false;
        }, 1000);
    }