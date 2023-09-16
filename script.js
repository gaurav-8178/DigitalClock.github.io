let hours = document.getElementById("hour");
let mins = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("am-pm");

setInterval(()=>{
    let time = new Date();
    let hr = time.getHours();
	let mn = time.getMinutes();
	let sc = time.getSeconds();
    let am_pm = "AM";

	if (hr > 12) {
		hr -= 12;
		am_pm = "PM";
	}
	if (hr == 0) {
		hr = 12;
		am_pm = "AM";
	}
	hr = hr < 10 ? "0" + hr : hr;
	mn = mn < 10 ? "0" + mn : mn;
	sc = sc < 10 ? "0" + sc : sc;

    hours.innerHTML = hr;
    mins.innerHTML = mn;
    sec.innerHTML = sc;
    ampm.innerHTML = am_pm;

},1000);


