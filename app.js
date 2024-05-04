const imgTag = document.querySelector(".image");
const allImage = ["./images/1.png", "./images/2.png", "./images/3.png", "./images/4.png", "./images/5.png"];
const imgN = document.querySelector(".imgN");
const totalImgN = document.querySelector(".totalImgN");

totalImgN.innerHTML = "/" + allImage.length;

let count = 0;
function sliderNext() {
    count++;
    if (count >= allImage.length) {
        count = 0;
        imgTag.src = allImage[count];
    } else {
        imgTag.src = allImage[count];
    }

    imgN.innerHTML = count + 1;

};

function sliderBack() {
    count--;
    if (count < 0) {
        count = allImage.length - 1;
        imgTag.src = allImage[count];
    } else {
        imgTag.src = allImage[count];
    }

    imgN.innerHTML = count + 1;

};

let interval = setInterval(sliderNext, 5000);

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");

function stop() {
    clearInterval(interval);
    pause.style.display = "none";
    play.style.display = "inline";
};

function start() {
    interval = setInterval(sliderNext, 5000);
    pause.style.display = "inline";
    play.style.display = "none";
};

