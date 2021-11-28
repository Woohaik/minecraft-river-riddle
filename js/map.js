
const map =
    [
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "leaves", "leaves", "leaves","nothing"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "leaves", "leaves", "leaves", "leaves","leaves"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "leaves", "leaves", "leaves", "leaves","leaves"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "leaves", "leaves", "wood", "leaves", "leaves"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "wood", "nothing", "nothing"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "wood", "nothing", "nothing"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "wood", "nothing", "nothing"],
        ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "grass", "grass", "grass", "grass", "grass villager", "dirt", "grass", "grass"],
        ["stone", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "sand", "water", "water", "water", "water", "water", "water", "water", "water", "water", "sand", "stone", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
        ["stone", "stone", "stone", "dirt", "dirt", "dirt", "stone", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "gravel", "sand", "stone", "stone", "stone", "stone", "stone", "dirt", "dirt", "dirt"],
        ["stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "sand", "sand", "gravel", "gravel", "gravel", "stone", "gravel", "gravel", "sand", "stone", "stone", "iron", "stone", "stone", "stone", "stone", "stone", "stone"],
        ["stone", "stone", "stone", "stone", "stone", "coal", "coal", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone"],


    ]


const mapSize = map[0].length;

document.getElementById("canvas").style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`