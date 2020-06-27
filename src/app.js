// TODO: Implement quicksort
// TODO: Implement insertion sort
// TODO: Implement selection sort
// TODO: Implement mergesort



const AMOUNT = 76  // Amount of bars that will be displayed
let allBars = []  // List of all Bar objects
let curSort = 1  // Stores what algorithm to run (default is 1 which is bubble sort)
let SPEED = 5 // Speed for the all of the sorting algorithms in milliseconds

class Bar {
    constructor(height, curPosition) {
        this.height = height;
        this.curPosition = curPosition;
    }
}

class UI {
    // Loop through all Bar objects and add to DOM on load of page
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

    // Make bars red
    static redBars() {
        let container = document.querySelector(".container-fluid")
        container.innerHTML = "";
        for (let i = 0; i < allBars.length; i++) {
            let curBar = allBars[i]

            let container = document.querySelector(".container-fluid")
            container.innerHTML += `
            <div class="bar" id="${i + 1}" style="height: ${curBar.height}px; background-color: #ff4d4d;">
            
            </div>
            `
        }
    }

    static greenBars() {
        let container = document.querySelector(".container-fluid")
        container.innerHTML = "";
        for (let i = 0; i < allBars.length; i++) {
            let curBar = allBars[i]

            let container = document.querySelector(".container-fluid")
            container.innerHTML += `
            <div class="bar" id="${i + 1}" style="height: ${curBar.height}px; background-color: red;">
            
            </div>
            `
        }
    }

}

// Creates all instances of Bar objects with random heights
function createBars() {
    for (let i = 1; i < AMOUNT; i++) {
        let height = Math.round((Math.random() * 650) + 1);
        let bar = new Bar(height, i)
        allBars.push(bar)
    }
    UI.displayBars()
}

// Initial value for i and j for all the algorithms that use nested for loops
let i = 0
let j = 0

function bubbleSort() {
    for (i; i < allBars.length; i++) {
        for (j; j < allBars.length - i - 1; j++) {
            if (allBars[j].height > allBars[j+1].height) {
                temp = allBars[j].height
                allBars[j].height = allBars[j+1].height
                allBars[j+1].height = temp;
                $(`#${allBars[j].curPosition}`).css("height", `${allBars[j].height}`)
                $(`#${allBars[j+1].curPosition}`).css("height", `${allBars[j+1].height}`)
                return
            }
        }
        console.log(j)
        $(`#${allBars[j].curPosition}`).css("background-color", "green")
        j = 0;
    }
}

function quickSort() {

}

function insertionSort() {
    for (let i = 0; i < allBars.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (allBars[j].height > allBars[j+1].height) {
                let temp = allBars[j].height
                allBars[j].height = allBars[j+1].height;
                allBars[j+1].height = temp;
                $(`#${allBars[j].curPosition}`).css("height", `${allBars[j].height}`)
                $(`#${allBars[j+1].curPosition}`).css("height", `${allBars[j+1].height}`)
                return
            }
            else {
                if (j !== 73) {
                    $(`#${allBars[j+2].curPosition}`).css("background-color", "green")
                }
                break
            }
        }
    }

}

function selectionSort() {

}

function mergeSort() {

}

// On load create all the bars
document.addEventListener("DOMContentLoaded", createBars());

// "Sort!" has been pressed, get the algorithm from the selected radio button and start the algorithm
document.getElementById("sortBtn").addEventListener("click", (e) => {
    // Disable sort button and slider, get speed from slider
    e.target.disabled = true;
    let speedBar = document.getElementById("speedRange")
    SPEED = speedBar.value
    speedBar.disabled = true;

    // Convert slider to milliseconds (if speed is 99, then milliseconds should really be 1, vice versa)
    SPEED = Math.abs(SPEED-100)

    // Loop through 5 times and check each radiobutton to get the checked one (and thus algorithm to do)
    for (let i = 1; i < 6;i++) {
        let curRadio = document.getElementById(`inlineRadio${i}`)
        curRadio.disabled = true;
        if (curRadio.checked === true) {
            curSort = i
        }
    }

    // UI.redBars()

    // Run an algorithm based on the input. The second argument (125) is the sorting speed.
    // We run the algorithm at an interval, each time the algorithm runs it only swaps two bars and then hits a
    // return statement.
    if (curSort === 1) {
        setInterval(function() {bubbleSort()}, SPEED)}
    else if (curSort === 2) {
        setInterval(function() {quickSort()}, SPEED)}
    else if (curSort === 3) {
        setInterval(function() {insertionSort()}, SPEED)}
    else if (curSort === 4) {
        setInterval(function() {selectionSort()}, SPEED)}
    else if (curSort === 5) {
        setInterval(function() {mergeSort()}, SPEED)}

    // UI.greenBars();

});
