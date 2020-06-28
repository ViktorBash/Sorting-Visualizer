// TODO: Implement quicksort
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
        $(`#${allBars[j].curPosition}`).css("background-color", "green")
        j = 0;
    }
}

function quickSortHelper() {
    // quickSort(allBars, 0, allBars.length - 1)
    console.log(allBars)
    // for (i = 0; i < 75; i++) {
    //     quickSort(allBars, 0, allBars.length - 1)
    //
    // }
    $(`#${1}`).css("background-color", "green")
    setInterval(function() {
        quickSort(allBars, 0, allBars.length - 1)
        // UI.displayBars()

    }, 100)
    // quickSort(allBars, 0, allBars.length - 1)
    // $(`#${AMOUNT-1}`).css("background-color", "green")
    // quickSort(allBars, 0, allBars.length - 1)
    // UI.displayBars()

}

function quickSort(arr = allBars, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right)

        if (left < index - 1) {
            quickSort(arr, left, index - 1)
        }
        if (index < right) {
            quickSort(arr, index, right)
        }
    }


}

function partition(arr, left, right) {
    // console.log(Math.floor(right + left) / 2)
    let pivot = arr[Math.floor((right + left) / 2)].height
    i = left
    j = right

    while ( i <= j) {
        while (arr[i].height < pivot) {
            i++
        }
        while (arr[j].height > pivot) {
            j--
        }
        if (i <= j) {
            let lol = swap(i, j)
            i++
            j--

        }
    }
    return i;
}

function swap (leftIndex, rightIndex) {
    if (rightIndex === 73) {
        console.log(rightIndex)

    }
    let temp = allBars[leftIndex].height
    allBars[leftIndex].height = allBars[rightIndex].height
    allBars[rightIndex].height = temp;
    setTimeout(function() {
        $(`#${allBars[leftIndex].curPosition}`).css("height", `${allBars[leftIndex].height}`)
        $(`#${allBars[leftIndex+1].curPosition}`).css("background-color", "green")
        $(`#${allBars[rightIndex].curPosition}`).css("height", `${allBars[rightIndex].height}`)
    }, leftIndex*100)  // leftIndex constantly changes, ensuring that the bars will not update all at once


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
                    $(`#${allBars[j].curPosition}`).css("background-color", "green")
                    $(`#${allBars[j+2].curPosition}`).css("background-color", "green")
                }
                break
            }
        }
    }

}

function selectionSort() {
    for (i; i < allBars.length - 1; i++) {
        var minIndex = i
        for (j = i + 1; j < allBars.length; j++) {
            if (allBars[j].height < allBars[minIndex].height) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = allBars[i].height
            allBars[i].height = allBars[minIndex].height
            allBars[minIndex].height = temp;
            console.log(i)
            console.log(allBars[i])
            $(`#${allBars[i].curPosition}`).css({"background-color": "green", "height": `${allBars[i].height}`})
            for (let a = 0; a < i; a++) {
                $(`#${allBars[a].curPosition}`).css("background-color", "green")
            }
            $(`#${allBars[minIndex].curPosition}`).css("height", `${allBars[minIndex].height}`)
            return
        }
    }
    for (let a = 70; a < 75; a++) {
        $(`#${allBars[a].curPosition}`).css("background-color", "green")

    }
}

function merge(left, right) {
    let arr = [];

    // While loop to compare left and right arrays to sort as they merge into one array
    while (left.length && right.length) {
        if (left[0].height < right[0].height) {
            if (left[0].curPosition < right[0].curPosition) {  // Left has smaller height and position
                arr.push(left.shift())
            }
            else {  // left has smaller height but higher position
                let temp = right[0].height
                right[0].height = left[0].height
                left[0].height = temp;
                $(`#${left[0].curPosition}`).css({"height": `${left[0].height}`, "background-color": "green"})
                $(`#${right[0].curPosition}`).css({"height": `${right[0].height}`, "background-color": "green"})
                arr.push(right.shift())
            }
        }
        else {
            if (left[0].curPosition > right[0].curPosition) { // Left has larger height and large position
                arr.push(right.shift())
            }
            else {  // Left has larger height but smaller position
                let temp = left[0].height
                left[0].height = right[0].height
                right[0].height = temp
                $(`#${left[0].curPosition}`).css({"height": `${left[0].height}`, "background-color": "green"})
                $(`#${right[0].curPosition}`).css({"height": `${right[0].height}`, "background-color": "green"})
                arr.push(left.shift())
            }
        }
    }
    // When the left array still has items in it
    while (left.length > 0) {
        arr.push(left.shift())
    }
    // When the right array still has items in it
    while (right.length > 0) {
        arr.push(right.shift())
    }

    return arr
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function mergeUtil() {
    let firstRun = mergeSort(allBars.slice());
    let mergeFun = setInterval(function() {mergeSort(firstRun)}, SPEED + 100)
}

// On load create all the bars
document.addEventListener("DOMContentLoaded", createBars());

// "Sort!" has been pressed, get the algorithm from the selected radio button and start the algorithm
document.getElementById("sortBtn").addEventListener("click", (e) => {
    // Disable sort button and slider, get speed from slider, dim "Adjust speed" label
    e.target.disabled = true;
    let speedBar = document.getElementById("speedRange")
    document.getElementById("speedText").style.color = "#6c757d"

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
        var bubbleSortInterval = setInterval(function() {bubbleSort()}, SPEED)}
    else if (curSort === 2) {
        // let quickSortInterval = setInterval(function() {quickSortHelper()}, SPEED)}
        quickSortHelper()
    }
    else if (curSort === 3) {
        let insertionSortInterval = setInterval(function() {insertionSort()}, SPEED)}
    else if (curSort === 4) {
        let selectionSortInterval = setInterval(function() {selectionSort()}, SPEED + 100)}
    else if (curSort === 5) {
        mergeUtil()
    }
});

