const resetGame = () => {
    herobrinePos = "left";
    currentPos = {
        left: ["seed", "chicken", "fox"],
        right: []
    }
    theCanvas.innerHTML = flatedMap.map(textureDiv).join(" ")
    rePaint()

}

const wouldBeEat = (mobsList) => {
    if (mobsList.length <= 1) return false;
    const isThereTheFox = mobsList.find(mob => mob === "fox")
    const isThereTheChicken = mobsList.find(mob => mob === "chicken")
    const isThereTheSeed = mobsList.find(mob => mob === "seed")
    // Check if theres the fox and chicken
    if (isThereTheFox && isThereTheChicken) return "The Fox ate the chicken";

    // Check if theres the chicken and the 
    if (isThereTheSeed && isThereTheChicken) return "The chicken ate the seeds";

    return false;
}

const moveMobAnimation = (toMove, basePosition = "left") => {
    if (basePosition === "left") {
        const leftPosition = document.querySelector(`.left-${toMove}`)
        const rightPosition = document.querySelector(`.right-${toMove}`)
        leftPosition.className = leftPosition.className.replace(` ${toMove}`, "")
        rightPosition.className += ` ${toMove}`;
    } else {
        const leftPosition = document.querySelector(`.left-${toMove}`)
        const rightPosition = document.querySelector(`.right-${toMove}`)
        leftPosition.className += ` ${toMove}`;
        rightPosition.className = rightPosition.className.replace(` ${toMove}`, "")
    }

}


const doNextMove = (toMove) => {
    // Find the side where it is righ now
    const isInLeft = currentPos.left.find(entity => entity === toMove);
    let moveAllowed = false;
    if (toMove !== "herobrine") {
        if (isInLeft) {
            if (herobrinePos === "left") {
                moveAllowed = true;
                currentPos.right.push(toMove)
                currentPos.left.splice(currentPos.left.findIndex(x => x === toMove), 1)
                moveMobAnimation(toMove, "left")
            }
        } else {
            if (herobrinePos === "right") {
                moveAllowed = true
                currentPos.left.push(toMove)
                currentPos.right.splice(currentPos.right.findIndex(x => x === toMove), 1);
                moveMobAnimation(toMove, "right")
            }
        }
    } else {
        moveAllowed = true
    }
    if (moveAllowed) {
        moveMobAnimation("herobrine", herobrinePos)
        moveMobAnimation("boat", herobrinePos)
        herobrinePos = herobrinePos === "left" ? "right" : "left"
    }
};


const checkMove = () => {
    // Once moved check if theres an entity to see if theres a eat
    const postToCheckTheFood = herobrinePos === "left" ? "right" : "left";
    if (currentPos[postToCheckTheFood].length > 1) { // If it is less than 1 thers not 2 xd 
        const failedMove = wouldBeEat(currentPos[postToCheckTheFood])
        if (failedMove) {
            alert(failedMove)
            alert("Reseting...")
            resetGame()
        }
    }
    if (currentPos.right.length === 3) {
        alert("Win")
    }
}


const drawMove = (mob) => {
    doNextMove(mob)
    rePaint()
    setTimeout(checkMove, 1000)
};
