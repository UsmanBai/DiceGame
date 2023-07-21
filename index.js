function picSet(p1, p2) {

    var images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
    var imgElement = document.getElementsByClassName("img1")[0]; 
    imgElement.src = images[p1-1];
        
    var imgElement = document.getElementsByClassName("img2")[0];
    imgElement.src = images [p2-1];
}

onload = function() {
    var p1 = Math.floor(Math.random() * 6) + 1;
    var p2 = Math.floor(Math.random() * 6) + 1;
    picSet(p1, p2);

    var heading = this.document.querySelector("h1");
    if(p1 > p2) {
        heading.innerHTML = "Player 1 Wins!";
    }
    else if(p2 > p1) {
        heading.innerHTML = "Player 2 Wins!";
    }
    else {
        heading.innerHTML = "It's a tie!";
    }

}