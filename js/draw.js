const textureDiv = (element) => `<div class="texture ${element}"></div>`;
const theCanvas = document.getElementById("canvas");

let herobrinePos = "left";
let currentPos = { left: ["seed", "chicken", "fox"], right: [] }


// JUST BECAUSE I WANTED TO DO IT XD
const customFlat = (theArr) => Array.isArray(theArr) ? theArr.reduce((acc, ac) => (acc.push(...customFlat(ac)), acc), []) : [theArr]


const flatedMap = customFlat(map)


theCanvas.innerHTML = flatedMap.map(textureDiv).join(" ")

// Draw villager 


const calcMobPosition = (position, size = "big") => {
    return {
        top: position.top - (size === "big" ? 170 : 90),
        left: position.left - (size === "big" ? 35 : 30)
    }
}


const rePaint = () => {
    const herobrine = document.getElementById("herobrine-img");
    const grassToStanHerobrine = document.querySelector(".herobrine");

    const villager = document.getElementById("villager-img");
    const grassToStandVillager = document.querySelector(".villager");


    const fox = document.getElementById("fox-img");
    const grassToStandFox = document.querySelector(".fox");

    const chicken = document.getElementById("chicken-img");
    const grassToStandChicken = document.querySelector(".chicken");

    const seed = document.getElementById("seed-img");
    const grassToStandSeed = document.querySelector(".seed");

    const boat = document.getElementById("boat-img");
    const waterToStandBoat = document.querySelector(".boat");

    // Villager
    const grassToStandVilllagerPosition = grassToStandVillager.getBoundingClientRect();
    const posToDrawVillager = calcMobPosition(grassToStandVilllagerPosition);
    villager.style.top = posToDrawVillager.top + "px";
    villager.style.left = posToDrawVillager.left + "px";

    // Villager
    const waterToStandBoatPosition = waterToStandBoat.getBoundingClientRect();
    const posToDrawBoat = calcMobPosition(waterToStandBoatPosition, "small");
    boat.style.top = posToDrawBoat.top + 35+ "px";
    boat.style.left = posToDrawBoat.left + "px";

    // Herobrine
    const grassToStanHerobrinePosition = grassToStanHerobrine.getBoundingClientRect()
    const posToDrawHerobrine = calcMobPosition(grassToStanHerobrinePosition)
    herobrine.style.top = posToDrawHerobrine.top + "px";
    herobrine.style.left = posToDrawHerobrine.left + "px";

    // Fox
    const grassToStanFoxPosition = grassToStandFox.getBoundingClientRect()
    const posToDrawFox = calcMobPosition(grassToStanFoxPosition, "small")
    fox.style.top = posToDrawFox.top + "px";
    fox.style.left = posToDrawFox.left + "px";

    // Chicken
    const grassToStandChickenPosition = grassToStandChicken.getBoundingClientRect()
    const posToDrawChichen = calcMobPosition(grassToStandChickenPosition, "small")
    chicken.style.top = posToDrawChichen.top + "px";
    chicken.style.left = posToDrawChichen.left + "px";

    // Seed
    const grassToStanSeedPosition = grassToStandSeed.getBoundingClientRect()
    const posToDrawSeed = calcMobPosition(grassToStanSeedPosition, "small")
    seed.style.top = posToDrawSeed.top + "px";
    seed.style.left = posToDrawSeed.left + "px";


}

window.onresize = rePaint
rePaint()
