const dino = document.getElementById("dino");
const rocket = document.getElementById("rocket");
var counter=0;


function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        }, 300)
    }

}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let rocketLeft = parseInt(
        window.getComputedStyle(rocket).getPropertyValue("left")
      );

    if (rocketLeft < 50 && rocketLeft > 0 && dinoTop >= 140) {
        rocket.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        rocket.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }


}, 10)

document.addEventListener("keydown", function(event){
    jump();
});