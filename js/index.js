function randomNum(a, b){
    return Math.floor(Math.random() * (b-a) +a);
}
let h2 = document.getElementsByTagName('h2')
function colorChange(){
	for(let i = 0;i< h1.length;++i){
		h2[i].style.color= "rgb(" + randomNum(1, 255)+","+randomNum(1, 255)+"," +randomNum(1,255) +")"
	}
}
setInterval(colorChange, 1000)
let bgmusic = document.getElementById('music')
bgmusic.play()