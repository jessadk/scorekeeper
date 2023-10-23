const homeScore = document.querySelector("#home-score");
const guestScore = document.querySelector("#guest-score");
const points = document.querySelectorAll("button");

for(let i = 0; i < points.length; i++){
  points[i].addEventListener('click', () => {
    // Store value of data-value attribute of button clicked
    let dataValue = parseInt(points[i].dataset.value);
    
     // If the button's parent element has matching ID, update score based on dataValue of button
    if(points[i].parentNode.id == "home-points"){
      homeScore.textContent = parseInt(homeScore.textContent) + dataValue;
    } else if (points[i].parentNode.id == "guest-points") {
      guestScore.textContent = parseInt(guestScore.textContent) + dataValue;
    } else {
      // Reset both home and guest scores to 0
      homeScore.textContent = 0;
      guestScore.textContent = 0;
    }
  });
}