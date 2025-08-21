let favNumber = 7;
let baseURL = "http://numbersapi.com";

// https://publicapis.io/jservice-trivia-api
// https://github.com/devdeepsharma/Number-Fact
// https://dev.to/devrohit0/create-a-number-facts-app-using-javascript-pe
// https://github.com/bhern154/JavaScript_Promises_API_Examples

// 1. Get fact about favorite number.
async function part1() {
    try {
        let response = await fetch(`${baseURL}/${favNumber}?json`)
            .then(response => {
                return response.json();
            })    
            .then(data => {
                console.log(`Part 1: Random number fact: ${data.text}`);           
            })
    }       catch (error) {
                console.error("Error fetching data for part1:", error);
    }
};

part1();


// 2. Get data on multiple numbers in a single request.

// https://github.com/isabellaardon/JS-Promises-NumberFacts/blob/main/script.js

const favNumbers = [7, 16, 21, 100];

async function part2() {
    for (let i = 0; i < favNumbers.length; i++) {
        try {
            let response = await fetch(`${baseURL}/${favNumbers[i]}?json`)
            .then(response => {
                return response.json();
            })
            .then(data => {    
                console.log(`Part 2: Random number facts: ${data.text}`);
            })   
        }   catch (error) {
            console.error("Error fetching data for part2:", error);
        }
    }
};

part2();


// 3. Get 4 facts about favorite number.

async function part3() {
    for (let i = 0; i < 4; i++) {
        try {
            let response = await fetch(`${baseURL}/${favNumber}?json`)
            .then(response => {
                return response.json();
            })
            .then(data => {    
                console.log(`Part 3: Random number facts: ${data.text}`);
            })   
        }   catch (error) {
            console.error("Error fetching data for part3:", error);
        }
    }
};

part3();


// Display.

// https://github.com/isabellaardon/JS-Promises-NumberFacts/blob/main/script.js

async function display() {
  const button = document.querySelector("button");
  button.addEventListener("click", clickAndDisplayData);

  async function clickAndDisplayData() {
    try {
      let facts = await Promise.all(
        Array.from({ length: 4 }, () => fetch(`${baseURL}/${favNumber}?json`))
      );
      facts.forEach(response => {
        document.body.insertAdjacentHTML('beforeend', `<p>${response.text}</p>`);
      });
    } catch (error) {
      console.error("Error fetching data for display:", error);
    }
  }
}
display();

// Output:

// function text() { [native code] }

// function text() { [native code] }

// function text() { [native code] }

// function text() { [native code] }