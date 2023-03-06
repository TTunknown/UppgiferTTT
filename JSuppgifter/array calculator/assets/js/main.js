const numarr = [];
let output = document.getElementById("output");

// Create three buttons
const sortButton = document.createElement("button");
sortButton.innerHTML = "Sort";
document.body.appendChild(sortButton);

const displayButton = document.createElement("button");
displayButton.innerHTML = "Display Array";
document.body.appendChild(displayButton);

const avgButton = document.createElement("button");
avgButton.innerHTML = "Calculate Average";
document.body.appendChild(avgButton);

// Add click events to the buttons
sortButton.addEventListener("click", function() {
  bubbleSort(numarr);
});

displayButton.addEventListener("click", function() {
  displayArray(numarr);
});

avgButton.addEventListener("click", function() {
  displayAvg(numarr);
});

while (true) {
  let input = prompt("Enter a number (or type 'done' to stop): ");

  if (input === "done") {
    break;
  } else if (!isNaN(input)) {
    numarr.push(parseInt(input));
  } else {
    console.log("Invalid input, please enter a number.");
  }
}

// Bubble sort function
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Function to display the array
function displayArray(arr) {
  document.getElementById("output").innerHTML = "Array: " + arr;
}

// Function to display the average
function displayAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  document.getElementById("output").innerHTML = "Average: " + avg;
}

console.log("Array of numbers:", numarr);


