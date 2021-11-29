
const map =
    [
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "leaves", "leaves", "leaves", "nothing"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "leaves", "leaves", "leaves", "leaves", "leaves"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "leaves", "leaves", "leaves", "leaves", "leaves"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "leaves", "leaves", "wood", "leaves", "leaves"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "wood", "nothing", "nothing"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "wood", "nothing", "nothing"],
        ["nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "nothing", "wood", "nothing", "nothing"],
        ["grass", "grass seed left-seed", "grass", "grass chicken left-chicken", "grass", "grass fox left-fox", "grass ", "sand herobrine left-herobrine", "water", "water boat left-boat", "water ", "water", "water ", "water", "water", "water right-boat", "water", "sand right-herobrine", "grass", "grass right-fox", "grass", "grass right-chicken", "grass right-seed", "dirt", "grass villager", "grass"],
        ["stone", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "sand", "water", "water", "water", "water ", "water", "water", "water", "water", "water", "sand", "stone", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
        ["stone", "stone", "stone", "dirt", "dirt", "dirt", "stone", "sand", "sand", "water", "water", "water", "water", "water", "water", "water", "gravel", "sand", "stone", "stone", "stone", "stone", "stone", "dirt", "dirt", "dirt"],
        ["stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "sand", "sand", "gravel", "gravel", "gravel", "stone", "gravel", "gravel", "sand", "stone", "stone", "iron", "stone", "stone", "stone", "stone", "stone", "stone"],
        ["stone", "stone", "stone", "stone", "stone", "coal", "coal", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone", "stone"],


    ]


const mapFloor = 7;
const findPos = (element) => map[mapFloor].findIndex(el => el.match(element))
const seedsPositions = {
    left: findPos("left-seed"),
    right: findPos("right-seed")
}
const chickenPositions = {
    left: findPos("left-chicken"),
    right: findPos("right-chicken")
}
const foxPositions = {
    left: findPos("left-fox"),
    right: findPos("right-fox")
}
const herobrinePositions = {
    left: findPos("left-herobrine"),
    right: findPos("right-herobrine")
}

const mapPositions = {
    herobrine: { ...herobrinePositions },
    chicken: { ...chickenPositions },
    fox: { ...foxPositions },
    seed: { ...seedsPositions }
}

const mapSize = map[0].length;


document.getElementById("canvas").style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`