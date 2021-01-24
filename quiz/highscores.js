const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")
/*    
	Design adpated from a youtube video tutorial
	All due credits to the owner
	https://www.youtube.com/watch?v=f4fB9Xg2JEY
*/