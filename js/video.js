var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("auto play is set to " + video.autoplay);
	video.loop = false;
	console.log("looping is set to " + video.loop);
	const volumeDisplay = document.getElementById('volume');
	volumeDisplay.textContent = '';
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	var video = document.querySelector("#player1");
	video.play();
	const buttonPressed = true;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	var video = document.querySelector("#player1");
	video.pause();
});

document.querySelector("#slower").addEventListener('click', function(){
	console.log("Slow down video")
	video.playbackRate -= 0.1;
	console.log("Speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener('click', function(){
	console.log("Speed up video")
	video.playbackRate += 0.1;
	console.log("Speed is " + video.playbackRate);

});

document.querySelector("#skip").addEventListener('click', function(){
	console.log("Skip ahead")
	if ((video.currentTime + 10) > video.duration) {
		video.currentTime = 0;
	}
	video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);

});

document.querySelector("#mute").addEventListener('click', function(){
	let button = document.querySelector("#mute");
	if (button.textContent == "Mute") {
		console.log("Mute");
		button.textContent = "Unmute";
		video.muted = true;
	}
	else {
		(button.textContent == "Unmute") 
		console.log("Unmute");
		button.textContent = "Mute";
		video.muted = false;
	}
});

document.querySelector("#vintage").addEventListener('click', function(){
	var videoTag = document.querySelector('.video');
	videoTag.classList.remove("video");
	
	videoTag.classList.add("oldSchool");

	
	
});

document.querySelector("#orig").addEventListener('click', function(){
	var videoTag2 = document.querySelector('#player1');
	console.log(videoTag2.classList);
	videoTag2.classList.remove("oldSchool");
	videoTag2.classList.add("video");
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const volumeDisplay = document.getElementById('volume');
	document.querySelector("#play").addEventListener("click", function() {
		volumeDisplay.textContent = `${slider.value}%`;
	});
	
    slider.addEventListener('input', function() {
        volumeDisplay.textContent = `${slider.value}%`;
		video.volume = slider.value / 100;
    });
	
});

