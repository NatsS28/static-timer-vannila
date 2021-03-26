const day = document.getElementById("d");
const hour = document.getElementById("h");
const minute = document.getElementById("m");
const seconds = document.getElementById("s");

function countDown() {
    var endtime = new Date("14 August 2021 23:59:59 GMT+01:00");
    endtime = (Date.parse(endtime) / 1000);
    var currentTime = new Date();
    currentTime = (Date.parse(currentTime) / 1000);

    var timer = endtime - currentTime;

    var d = Math.floor(timer / 86400);
    var h = Math.floor((timer - (d * 86400)) / 3600);
    var m = Math.floor((timer - (d * 86400) - (h * 3600)) / 60);
    var s = Math.floor((timer - (d * 86400) - (h * 3600) - (m * 60)));

    if (d < "10") {
        d = "0" + d;
    }

    if (h < "10") {
        h = "0" + h;
    }

    if (m < "10") {
        m = "0" + m;
    }

    if (s < "10") {
        s = "0" + s;
    }

    day.innerHTML = d + "<span>Days</span>";
    hour.innerHTML = h + "<span>Hours</span>";
    minute.innerHTML = m + "<span>Minutes</span>";
    seconds.innerHTML = s + "<span>Seconds</span>";
    // $(".seconds").html(s+ "<span>Seconds</span>");
    // console.log(s)
}

setInterval(function () {
    countDown();
    console.log("calling")
}, 1000);
