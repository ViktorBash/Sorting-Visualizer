const AMOUNT = 51
let allBars = []
class Bar {
    constructor(height, curPosition) {
        this.height = height;
        this.curPosition = curPosition;
    }
}

// Loop through all Bar objects and add to DOM
class UI {
    static displayBars() {
        for (let i = 0; i < allBars.length; i++) {
            let curBar = allBars[i]

            // const newBar = document.createElement("div")
            // newBar.className = "bar";
            // newBar.style.height = "500px;"
            // newBar.id = `bar-${i + 1}`


            let container = document.querySelector(".container-fluid")
            container.innerHTML += `
            <div class="bar" id="${i+1}" style="height: ${curBar.height}px;">
            
            </div>
            `
            // container.appendChild(newBar);

        }
        let theBar = document.getElementsByClassName("bar")
        theBar.style.maxHeight = "500px;"
    }

}

// Creates all instances of Bar object needed
function createBars() {
    for(let i = 1; i < AMOUNT; i++) {
        let height = Math.round((Math.random() *450) + 1);
        let bar = new Bar(height, i)
        allBars.push(bar)

    }
    UI.displayBars()
}

function startSort() {
    console.log("hi")
}


document.addEventListener("DOMContentLoaded", createBars());
document.getElementById("sortBtn").addEventListener("click", startSort);