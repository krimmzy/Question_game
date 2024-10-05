const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello", name, "welcome to our game? ")

const shouldWeplay = prompt('Do you want to play? ').toLowerCase()

if (shouldWeplay === "yes" || shouldWeplay === "y" || shouldWeplay === "yeah" || shouldWeplay === "sure" || shouldWeplay === "yh") {
    // Game logic
    const leftOrRight = prompt("You entered a maze, do you want to go left or right? ").toLowerCase()
    if (leftOrRight === "left") {
        console.log("you went left and see a bridge....")
        const cross = prompt("Do you want to cross the bridge? ").toLowerCase()
        if (cross === "yes" || cross === "y" || cross === "okay" || cross === "sure" || cross === "yh") {
            console.log("you crossed the bridge and entered the forest then saw a lion")
            const fight = prompt("Do you want to fight or hide? ").toLowerCase()
            if (fight === "hide") {
                console.log("You Hid and the lion passed without seeing you")
                console.log("then you saw an exit")
                const freedom = prompt("Do you want to take the exit? (yes/No)? ").toLowerCase()
                if (freedom === "yes" || freedom === "y" || freedom === "yeah" || freedom === "sure" || freedom === "yh") {
                    console.log ("congratulations", name, "You are smart and you won!")
                } else if (freedom === "no" || freedom === "nah" || freedom === "nil") {
                    console.log("you tried but you were not smart enough!, you lost ", name)
                } else {
                    console.log("invalid input, try again")
                }
            } else if(fight === "fight") {
                console.log("You tried fighting and got eaten, You Lost!")
            } else {
                console.log("invalid input")
            }
        } else if (cross === "no" || cross === "n" || cross === "nil" || cross === "never") {
            console.log("you fell and lost the game")
        } else {
        console.log("invalid input! please restart")
        }

    } else if (leftOrRight === "right") {
        console.log("you went right and fell off a cliff")
    } else {
        console.log("invalid input")
    }
} else if(shouldWeplay === "no" || shouldWeplay === "n" || shouldWeplay === "nah" || shouldWeplay === "i'm good") {
    console.log("ok :(")
} else {
    console.log("invalid input")
}
