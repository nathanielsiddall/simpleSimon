

var btn = 0;
$("#btn1").click(function () {btn = 1; buttonPress(btn)});
$("#btn2").click(function () {btn = 2; buttonPress(btn)});
$("#btn3").click(function () {btn = 3; buttonPress(btn)});
$("#btn4").click(function () {btn = 4; buttonPress(btn)});
var arr =[];
var input = [];
var showColor = false;

function win() {
    $("#banner").append("You win")
    console.log("win");
}

function buttonPress(x) {

    if(showColor){
        colorChanger(x);
        input.push(x);
        console.log(x);
        console.log(input);
        comparator();
    }




}

function comparator() {
    var result = 0;
    if (input.length === 4) {
        for (i = 0; i < arr.length; i++) {
            if (input[i] === arr[i]) {
                result = 1;

            } else {
                result = 2;
            }
        }
    }
    if (result === 1) {
        win();
    } else if (result === 2) {
        loss();
    }
}

function loss() {

    var io = true;
    var j = 0;
    var simonLoop  = setInterval(function() {

        if(io === true){

            $("body").css("background-color", "red");
            j++;
            io = false;
        }
        else if (io === false) {
            $("body").css("background-color", "black");

            io = true;
        }
        if(j === 4){
            clearInterval(simonLoop);
            colorReturn();
            fire();

        }


    },100);
    showColor = true;
}

function colorReturn() {


    var btn1 = $("#btn1").css("background-color", "rgba(255,0,0,0.5)");
    var btn2 = $("#btn2").css("background-color", "rgba(0,255,0,0.5)");
    var btn3 = $("#btn3").css("background-color", "rgba(0,0,255,0.5)");
    var btn4 = $("#btn4").css("background-color", "rgba(128,0,128,0.5)");

    return btn1 + btn2 + btn3 + btn4;

}

function colorChanger(x) {



    switch (x) {
        case 1:
            colorChange(1);
            break;
        case 2:

            colorChange(2);
            break;
        case 3:

            colorChange(3);
            break;
        case 4:

            colorChange(4);
            break;
    }
}

function colorChange(x) {


    var act = '';
    var btn = '';

    switch (x) {
        case 1:
            act = "black"/*"rgba(255,0,0)"*/;
            btn = "#btn1";
            break;
        case 2:
            act = "black"/*"rgba(0,255,0)"*/;
            btn = "#btn2";
            break;
        case 3:
            act = "black"/*"rgba(0,0,255)"*/;
            btn = "#btn3";
            break;
        case 4:
            act = "black"/*"rgba(128,0,128)"*/;
            btn = "#btn4";
            break;
        case 5:
            act = "red"/*"rgba(128,0,128)"*/;
            btn = "body";
            break;
    }


    return $(btn).css("background-color", act);
}

function random() {
    for (var i = 0; i < 4; i++) {
        var j = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        arr.push(j);

    }
}

function colorCommand() {

    random();

    console.log(arr);

    var io = true;
    var i = 0;
    var j = 0;
    var simonLoop  = setInterval(function() {

        if(io === true){

            colorChanger(arr[j]);
            j++;
            io = false;
        }
        else {
            colorReturn();
            io++;
            io = true;
        }
        if(i === 4){
            clearInterval(simonLoop);
            colorReturn();
        }


    },500);
    showColor = true;
}

function fire() {

    colorCommand();
    comparator();
}

fire();












