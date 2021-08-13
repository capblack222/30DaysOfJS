const secsHand = document.querySelector(".sec");
const hourHand = document.querySelector(".hr");
const minsHand = document.querySelector(".min");

function setTime() {
    const time = new Date();
    // console.log(time.getSeconds());
    const secRotation = ((time.getSeconds() / 60) * 360) + 90;
    const hrRotation = ((time.getHours() / 12) * 360) + 90;
    const minRotation = ((time.getMinutes() / 60) * 360) + 90;
    secsHand.style.transform = `rotate(${secRotation}deg)`;
    hourHand.style.transform = `rotate(${hrRotation}deg)`;
    minsHand.style.transform = `rotate(${minRotation}deg)`;
}

// setTime();
setInterval(setTime, 1000);