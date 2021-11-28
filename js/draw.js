const textureDiv = (element) => `<div class="texture ${element}"></div>`;
const theCanvas = document.getElementById("canvas");

// JUST BECAUSE I WANTED TO DO IT XD
const customFlat = (theArr) => Array.isArray(theArr) ? theArr.reduce((acc, ac) => (acc.push(...customFlat(ac)), acc), []) : [theArr]



const flatedMap = customFlat(map)


theCanvas.innerHTML = flatedMap.map(textureDiv).join(" ")

// Draw villager 
""

const calcMobPosition = (position) => {
    return {
        top: position.top - 180,
        left: position.left - 35
    }
}

const rePaint = () => {
    const grassToStandVillager = document.querySelector(".villager")
    const villager = document.getElementById("villager-img")
    const grassToStandVilllagerPosition = grassToStandVillager.getBoundingClientRect();
    const posToDraw = calcMobPosition(grassToStandVilllagerPosition)
    villager.style.top = posToDraw.top + "px"
    villager.style.left = posToDraw.left + "px"
}



window.onresize = rePaint
rePaint()