var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("Speed Is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.95;
	console.log("Speed Is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.currentTime += 15;
	if (video.currentTime >= video.duration)
		video.currentTime = 0;
	console.log("Video Time Is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video")
	if (video.muted == true){
		video.muted = false;
		console.log("Video Unmuted");
		this.innerHTML = "Mute";
	}
	else{
		video.muted=true;
		console.log("Video Muted");
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Video Volume")
	video.volume = this.value / 100;
		console.log("Video Volume Is", video.volume*100 + "%");
		document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Selected");
	video.className ="oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Selected");
	video.className ="video";
});



