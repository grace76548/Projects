/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

function participant(name, age, studyField) {
    return {
    name,
    age,
    studyField
    }
};

participant("Larry", 30, "Biology");

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

// https://www.geeksforgeeks.org/javascript/javascript-this-keyword/

const participantInfo = {
    name: "Clara",
    age: 72,
    studyField: "English",
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age} years old, Field: ${this.studyField}`;
    } 
};

console.log(participantInfo.displayInfo());

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const participantInfo2 = {
    name: "Clara",
    age: 72,
    studyField: "English",
    displayInfo: () => {
        return `Name: ${this.name}, Age: ${this.age} years old, Field: ${this.studyField}`;
    } 
};

console.log(participantInfo2.displayInfo());

/*
 * Observations:
 * TODO: Explain here.
 * 
 * Adding an arrow function without changing anything else printed:
 * 
 * Name: , Age: undefined years old, Field: undefined
 * 
 * TO fix this, I needed to change the variables from this.name to participantInfo2.name, etc.
 * 
 * const participantInfo2 = {
    name: "Clara",
    age: 72,
    studyField: "English",
    displayInfo: () => {
        return `Name: ${participantInfo2.name}, Age: ${participantInfo2.age} years old, Field: ${participantInfo2.studyField}`;
    } 
};

console.log(participantInfo2.displayInfo());
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(state, address) {
    return {
    [state] : address,
    [address] : state
    };
};    

updateParticipantInfo("FL", "Florida");