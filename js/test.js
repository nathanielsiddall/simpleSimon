
function colorChanger(x) {

    switch (x) {
        case 1:
            colorChange(1)
            break;
        case 2:
            colorChange(2)
            break;
        case 3:
            colorChange(3)
            break;
        case 4:
            colorChange(4)
            break;
    }
}

function colorChange(x) {
    var act = '';
    var btn = '';
    

        

    switch (x) {
        case 1:
            act = "rgba(0,255,0)";
            btn = "#btn1";
            break;
        case 2:
            act = "rgba(0,255,0)";
            btn = "#btn1";
            break;
        case 3:
            act = "rgba(0,255,0)";
            btn = "#btn1";
            break;
        case 4:
            act = "rgba(0,255,0)";
            btn = "#btn1";
            break;
    }
    return $(btn).css("background-color", act);
}

function random() {
        return Math.floor(Math.random() * (4 - 1 + 1) + 1);
}

var x = random();

console.log(x);

var simonLoop  = setInterval(function() {
    colorChanger(x);

    i++;
    if(i === 10){
        clearInterval(simonLoop);
    }
},1000);
