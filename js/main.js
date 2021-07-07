let musicPlayer = document.getElementById('musicPlayer')
let progressbar = document.querySelectorAll('.progress-bar')
let programmer = document.getElementById('programmer')
function musicBg() {
	document.getElementById('btnSound').play()
	setTimeout(() => {
		if (musicPlayer.paused) {
			musicPlayer.play()
		}
		else {
			musicPlayer.pause()
		}
	}, 300)
}
// skill bar
      
function progress(){
	progressbar.forEach(bar =>{
		let val = 0
		while(val < bar.getAttribute('aria-valuenow')){
			val+= 10
			bar.style.width = val + '%'
		}		
	})
}
programmer.ontouchstart = progress
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#hobby'
      })
