// TODO: Implement quicksort
// TODO: Implement insertion sort
// TODO: Implement selection sort
// TODO: Implement mergesort
// TODO: Chane color to green when array completely sorted
// TODO: Disable sort button when algorithm chosen



const AMOUNT = 76  // Amount of bars that will be displayed
let allBars = []  // List of all Bar objects
let curSort = 1  // Stores what algorithm to run (default is 1 which is bubble sort)

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

}

// Creates all instances of Bar objects needed
function createBars() {
    for (let i = 1; i < AMOUNT; i++) {
        let height = Math.round((Math.random() * 650) + 1);
        let bar = new Bar(height, i)
        allBars.push(bar)
    }
    UI.displayBars()
}

function bubbleSort() {

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
                setTimeout(() => {
                    $(`#${allBars[i].curPosition}`).css("height", `${allBars[i].height}`)
                    $(`#${allBars[i+1].curPosition}`).css("height", `${allBars[i+1].height}`)
                    swapped = true;
                }, 100)

            }
        }


    }
    while (swapped)
    // console.log(allBars)


}

function quickSort() {

}

function insertionSort() {

}

function selectionSort() {

}

function mergeSort() {

}

// On load create all the bars
document.addEventListener("DOMContentLoaded", createBars());

// "Sort!" has been pressed, get the algorithm from the selected radio button and start the algorithm
document.getElementById("sortBtn").addEventListener("click", (e) => {

    // Loop through 5 times and check each radiobutton to get the checked one (and thus algorithm to do)
    for (let i = 1; i < 6;i++) {
        // console.log(i)
        let curRadio = document.getElementById(`inlineRadio${i}`)
        if (curRadio.checked === true) {
            curSort = i
            break
        }
    }

    // Run an algorithm based on the input. The second argument (125) is the sorting speed.
    if (curSort === 1) {
        setInterval(function() {bubbleSort()}, 125)}
    else if (curSort === 2) {
        setInterval(function() {quickSort()}, 125)}
    else if (curSort === 3) {
        setInterval(function() {insertionSort()}, 125)}
    else if (curSort === 4) {
        setInterval(function() {selectionSort()}, 125)}
    else if (curSort === 5) {
        setInterval(function() {mergeSort()}, 125)}




});
