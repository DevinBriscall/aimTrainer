let target = document.querySelector('.target');
let score = 0;
let clicks = 0;
let scoreDisplay = document.querySelector('.score');
let accuracyDisplay = document.querySelector('.accuracy');
let accuracy = score/clicks;

// function to add score when the target is clicked
target.addEventListener('click', () => {
    let x = Math.round(Math.random() * 95)
    let y = Math.round(Math.random() * 95)
    target.style.position = "absolute";
    target.style.left = x + "%";
    target.style.top = y + "%";
    score += 1;
    accuracy = score/clicks;
    console.log(score);
    scoreDisplay.textContent = "score: " + score;
    accuracyDisplay.textContent = "accuracy: " + accuracy.toFixed(2);

    
})

//function to add to clicks count when the screen is clicked
document.onclick= function(event) {
    clicks += 1;
    console.log("clicks: " + clicks);
    let accuracy = score/clicks;
    accuracyDisplay.textContent = "accuracy: " + accuracy.toFixed(2);
}