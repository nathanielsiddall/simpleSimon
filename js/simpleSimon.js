

var btn = 0;
$("#btn1").click(function () {btn = 1; buttonPress(btn)});
$("#btn2").click(function () {btn = 2; buttonPress(btn)});
$("#btn3").click(function () {btn = 3; buttonPress(btn)});
$("#btn4").click(function () {btn = 4; buttonPress(btn)});
var arr =[];
var input = [];
var showColor = false;


// }
// // function sleep(sleepTime) {
// //     setTimeout( function () {
// //         console.log("done sleeping!");
// //     })};
// //
// //
// //
// //
// // $("#btn1").click(function () {
// //     input.push(1);
// //     $("#data-input").text(input);
// //     $("#btn1").css("background-color", "rgba(255,0,0");
// //     setInterval(function () {
// //         $("#btn1").css("background-color", "rgba(255,0,0,0.5")
// //     },300);
// // });
// //
// // $("#btn2").click(function () {
// //     input.push(2);
// //     $("#data-input").text(input);
// //     $("#btn2").css("background-color", "rgba(0,255,0");
// //     setInterval(function () {
// //         $("#btn2").css("background-color", "rgba(0,255,0,0.5")
// //     },300);
// // });
// //
// // $("#btn3").click(function () {
// //     input.push(3);
// //     $("#data-input").text(input);
// //     $("#btn3").css("background-color", "rgba(0,0,255");
// //     setInterval(function () {
// //         $("#btn3").css("background-color", "rgba(0,0,255,0.5")
// //     },300);
// // });
// //
// // $("#btn4").click(function () {
// //     input.push(4);
// //     $("#data-input").text(input);
// //     $("#btn4").css("background-color", "rgba(128,0,128");
// //     setInterval(function () {
// //         $("#btn4").css("background-color", "rgba(128,0,128,0.5")
// //     },300);
// // });
// //
// //
// // $("#btn2").click(function () {
// //
// //     $("#data-input").text(input);
// // });
// //
// // $("#btn3").click(function () {
// //
// //     $("#data-input").text(input);
// // });
// //
// // $("#btn4").click(function () {
// //
// //     $("#data-input").text(input);
// // });
// //
// // $("button").click(function () {});
//
// random();
// console.log("arr: "+ arr.length);
// //
// //
// //     if(input.length === arr.length){
// //         for(var i = 0; i < arr.length; i++){
// //             if(arr[i] === input[i]){
// //                 $("#data-input").append(" even more success");
// //             }
// //         }
// //     }
// // ;
// //
// //
// //
// //
// //
// //
//
//
// // }
//     var id = 0;
//     var i = 0;
//
// console.log(arr);
//
// for(var j = 0; j <= arr.length; j++) {
//
//     var theArrayValue = arr[j];
//     console.log("hit the timeout");
//     setTimeout(function () {
//
//
//     if (theArrayValue === 1) {
//         $("#btn1").css("background-color", "");
//         console.log("1");
//     } else if (theArrayValue === 2) {
//         console.log("2");
//         $("#btn2").css("background-color", "rgba(0,255,0");
//     } else if (theArrayValue === 3) {
//         $("#btn3").css("background-color", "rgba(0,0,255");
//         console.log("3");
//     } else if (theArrayValue === 4) {
//         console.log("4");
//         $("#btn4").css("background-color", "rgba(128,0,128");
//     }
//
//     console.log("the log for arr inside loop: ");
//     console.log(theArrayValue);
//     console.log("j: " + j);
//
//
// },1000);
// }
//
//
//         id = setInterval(function () {
//
//             console.log("the log for arr inside setinterval: ");
//             console.log(theArrayValue);
//             console.log("j: " + j);
//
//         }, 1000);
//
//         i++;
//         if (i === 3) {
//             clearInterval(id);
//         }
//
//
//
//
//
//


function buttonPress(x) {

    if(showColor){
        colorChanger(x);
        input.push(x);
        console.log(x);
        console.log(input);
    }




}
//when a button is pushed the button needs to light up and the
// value to that number needs to get pushed to the asrray


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


colorCommand();










