

var input = [];
var arr =[];

function random() {
    for (var i = 0; i < 4; i++){
        var j = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        arr.push(j);
        // console.log(arr);
    }
}
function sleep(sleepTime) {
    setTimeout( function () {
        console.log("done sleeping!");
    })};




$("#btn1").click(function () {
    input.push(1);
    $("#data-input").text(input);
    $("#btn1").css("background-color", "rgba(255,0,0");
    setInterval(function () {
        $("#btn1").css("background-color", "rgba(255,0,0,0.5")
    },300);
});

$("#btn2").click(function () {
    input.push(2);
    $("#data-input").text(input);
    $("#btn2").css("background-color", "rgba(0,255,0");
    setInterval(function () {
        $("#btn2").css("background-color", "rgba(0,255,0,0.5")
    },300);
});

$("#btn3").click(function () {
    input.push(3);
    $("#data-input").text(input);
    $("#btn3").css("background-color", "rgba(0,0,255");
    setInterval(function () {
        $("#btn3").css("background-color", "rgba(0,0,255,0.5")
    },300);
});

$("#btn4").click(function () {
    input.push(4);
    $("#data-input").text(input);
    $("#btn4").css("background-color", "rgba(128,0,128");
    setInterval(function () {
        $("#btn4").css("background-color", "rgba(128,0,128,0.5")
    },300);
});


$("#btn2").click(function () {
    input.push(2);
    $("#data-input").text(input);
});

$("#btn3").click(function () {
    input.push(3);
    $("#data-input").text(input);
});

$("#btn4").click(function () {
    input.push(4);
    $("#data-input").text(input);
});

$("button").click(function () {});


//     if(input.length === arr.length){
//         for(var i = 0; i < arr.length; i++){
//             if(arr[i] === input[i]){
//                 $("#data-input").append(" even more success");
//             }
//         }
//     }
// });





// $("#data-input").text(thing);
//


// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === input[i]){
//         $("#data-input").text("success");
//     }
// }
console.log("arr: "+ arr.length);
random();
// arr.forEach(function (arr) {

function stahp(kill) {
    clearInterval(kill);
}

var kill = setInterval(function () {



    switch (arr) {
        case 1:

            console.log("1");
            break;


        case 2:
            console.log("2");

            break;
        case 3:

            console.log("3");
            break;
        case 4:
            console.log("4");

    }
    console.log(kill);
    if(kill === 1) {
        stahp(kill);
    }
}, 1000);




console.log(arr);

