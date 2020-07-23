// COUNT DOWN
const countDown = document.getElementById("countdown");



//time to count down to
const lauchTime = new Date("Aug 5, 2020 18:00:00").getTime();



const showCountDown = setInterval(() => {

    //get current time
    const now = new Date().getTime();
    //get time remaining till launch time
    const timeLength = lauchTime - now;

    const days = Math.floor((timeLength / (1000 * 60 * 60 * 24)));
    //	console.log(days );
    const hours = Math.floor((timeLength % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //console.log(hours);
    const mins = Math.floor((timeLength % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeLength % (1000 * 60)) / 1000);
    // console.log(secs);	

    countDown.innerHTML = `	
	<div>${days}<span>Days</span></div>
	<div>${hours}<span>Hours</span></div>
	<div>${mins}<span>Minutes</span></div>
	<div>${secs}<span>Seconds</span></div>
`;

    if (timeLength < 0) {
        clearInterval(showCountDown);
        countDown.style.display = "none";
        document.getElementById("comingsoon").style.color = "#17a2b8";
        document.getElementById("comingsoon").innerHTML = "Lauched!";

    }
}, 1000);






