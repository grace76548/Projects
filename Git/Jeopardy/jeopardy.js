// https://www.youtube.com/watch?v=fYMBkayHmUo
// https://github.com/Kesline/Jeopardy-Assessment/blob/main/jeopardy.js
// https://www.geeksforgeeks.org/javascript/lodash-_-sample-method/

// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

/* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button */


/* Initial screen */

const gameName = document.createElement('h1');
gameName.textContent = 'Jeopardy!';
document.body.appendChild(gameName);

const start = document.createElement('button');
start.setAttribute('id', "start");
start.textContent = 'Start';
document.body.appendChild(start);

const table = document.createElement('table');
table.setAttribute('id', "jeopardy");
table.innerHTML = '<thead></thead><tbody></tbody>';
document.body.appendChild(table);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

let categories = [];

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    let response = await axios.get("https://rithm-jeopardy.herokuapp.com/api/categories?count=10");
    const categoryIds = _.sampleSize(response.data.map(category => category.id), 6);
    return categoryIds;
}


/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(id) {
    let response = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?id=${id}`);
    console.log(response);
    let allClues = response.data.clues;
    const clues = allClues.map(clue => ({ answer: clue.answer, question: clue.question, showing: null }));
    const title = response.data.title;
    return {title, clues};

}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */


async function fillTable() {
  const $thead = $("thead");
  const $tbody = $("tbody");

  $thead.empty();
  $tbody.empty();
  
  const $headerRow = $("<tr>");
  for (const category of categories) {
    $headerRow.append($("<td>").text(category.title.toUpperCase()));
  }
  $thead.append($headerRow);

  for (let i = 0; i < 5; i++) {
    const $tr = $("<tr>");
    for (const category of categories) {
      const $td = $("<td>").text("?");
      $td.click(handleClick);
      $tr.append($td);
    }
    $tbody.append($tr);
  }
}  

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
  const $td = $(evt.target);
  const row = $td.parent().index();
  const col = $td.index();
  const clue = categories[col].clues[row];

  if (clue.showing === null) {
    $td.text(clue.question);
    clue.showing = "question";
  } else if (clue.showing === "question") {
    $td.text(clue.answer);
    clue.showing = "answer";
  }
}  

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  $("#jeopardy").hide();
  const loader = document.createElement('div');
  loader.setAttribute('class', "loader");
  loader.setAttribute('id', "loader");
  document.body.appendChild(loader);
}

/** Remove the loading spinner and update the button used to fetch data. */
/* https://stackoverflow.com/questions/39745891/how-to-create-a-loader-in-javascript-waiting-for-a-function-to-end */

function hideLoadingView() {
  $("#jeopardy").show();
  loader.remove();
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setUpAndStart() {
  showLoadingView();
  const categoryIds = await getCategoryIds();
  categories = await Promise.all(categoryIds.map(id => getCategory(id)));
  await sleep(500);
  fillTable();
  hideLoadingView();
}

/** On click of start / restart button, set up game. */
const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', setUpAndStart);
startBtn.addEventListener('click', function() {
  this.innerHTML = 'Restart!';
  });


/** On page load, add event handler for clicking clues */
