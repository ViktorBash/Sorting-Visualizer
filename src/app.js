const AMOUNT = 76
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
        let container = document.querySelector(".container-fluid")
        container.innerHTML = "";
        for (let i = 0; i < allBars.length; i++) {
            let curBar = allBars[i]

            let container = document.querySelector(".container-fluid")
            container.innerHTML += `
            <div class="bar" id="${i + 1}" style="height: ${curBar.height}px;">
            
            </div>
            `
        }
        let body = document.querySelector("body");
        let floor = document.createElement("div")
        floor.className = "floor";
        body.appendChild(floor);
    }

    static updateBars(bar1, bar2) {
        // let container = document.querySelector(".container-fluid")
        // container.innerHTML = "";
        // for (let i = 0; i < allBars.length; i++) {
        //     let curBar = allBars[i]
        //
        //     let container = document.querySelector(".container-fluid")
        //     container.innerHTML += `
        //     <div class="bar" id="${i + 1}" style="height: ${curBar.height}px;">
        //     </div>
        //     `
        // }
        // let body = document.querySelector("body");
        // let floor = document.createElement("div")
        // floor.className = "floor";
        // body.appendChild(floor);
        //
        // callback()
        // let bar1SiblingAfter = document.getElementById(`${bar1.curPosition}`).remove()
        // let bar2SiblingAfter = document.getElementById(`${bar2.curPosition}`).remove()
        // let container = document.querySelector(".container-fluid")

        // Both bars are going to be next to each other
        // Delete the first bar, then reinsert it before the second bar with the second bar's height
        // Delete the second bar, then reinsert it after the first bar with it's original height


        // Delete bar, then insert it again
        // let bar1UI = document.getElementById(`${bar1.curPosition}`)
        // let bar2UI = document.getElementById(`${bar2.curPosition}`)
        // bar1UI.style.height = bar2.height + "px;"
        // bar2UI.style.height = bar1.height + "px;"
        // console.log(bar1UI, bar2UI)
        // let bar1SiblingAfter = document.getElementById(`${bar1.curPosition + 1}`).remove()
        // let bar2SiblingAfter = document.getElementById(`${bar2.curPosition + 1}`).remove()
        // let container = document.querySelector(".container-fluid")
        //
        // document.getElementById(`${bar1.curPosition}`).remove()
        // let newBar1 = `
        //     <div class="bar" id="${bar1.curPosition}" style="height: ${bar2.height}px;">
        //
        //     </div>
        //     `
        //
        // document.getElementById(`${bar2.curPosition}`).remove()
        // let newBar2 = `
        //     <div class="bar" id="${bar2.curPosition}" style="height: ${bar1.height}px;">
        //
        //     </div>
        //     `
        //
        // container.insertBefore(sibl)


    }



}

// Creates all instances of Bar object needed
function createBars() {
    for (let i = 1; i < AMOUNT; i++) {
        let height = Math.round((Math.random() * 650) + 1);
        let bar = new Bar(height, i)
        allBars.push(bar)

    }
    UI.displayBars()
}

function startSort() {

    let swapped = false;
    let temp = 0;
    let count = -1;
    let arrLength = 0;

    do {
        count++;
        swapped = false;
        arrLength = (allBars.length - 1) - count;
        for (let i = 0; i < arrLength; i++) {
            if (allBars[i].height > allBars[i + 1].height) {
                temp = allBars[i + 1].height;
                allBars[i + 1].height = allBars[i].height;
                allBars[i].height = temp;
                // swapped = true;

                //
                // $(`#${allBars[i].curPosition}`).css("height", `${allBars[i].height}`)
                // $(`#${allBars[i+1].curPosition}`).css("height", `${allBars[i+1].height}`)
                // swapped = false;

                setTimeout(() => {
                    $(`#${allBars[i].curPosition}`).css("height", `${allBars[i].height}`)
                    $(`#${allBars[i+1].curPosition}`).css("height", `${allBars[i+1].height}`)
                    swapped = true;
                }, 100)


                // let bar1 = document.getElementById(allBars[i].curPosition)
                // let bar2 = document.getElementById(allBars[i+1].curPosition)
                // bar1.style.height = allBars[i+1].height + "px !important;";
                // bar2.style.height = allBars[i].height + "px !important;";
                // console.log(i)
                // console.log(bar1)
                // console.log(bar2)
                // Now update the bars
                // console.log(allBars[i], allBars[i+1])
                // UI.updateBars(allBars[i], allBars[i+1])
            }
        }


    }
    while (swapped)
    // UI.displayBars()
    console.log(allBars)
    // console.log(allBars)


}


document.addEventListener("DOMContentLoaded", createBars());
document.getElementById("sortBtn").addEventListener("click", (e) => {
    // startSort()
    setInterval(function() {
        startSort()
    }, 125)
    // startSort()



});
