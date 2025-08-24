// look back at the <readme.md> file for some hints //
// working API key //

const giphyApiKey = "lRFg3OHKWCKdvp78HbUD3oa2keYQpIfT";

// create buttons
const generateGifsButton = document.getElementById("generate-gifs-btn");
const clearGifsButton = document.getElementById("clear-gifs-btn");

const display = document.getElementById("display-div");

// add click events
generateGifsButton.addEventListener("click", generateGifs);
clearGifsButton.addEventListener("click", clearGifs);

async function grabGifsFromApi(query) {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&fields=id,images.fixed_width&api_key=${giphyApiKey}&limit=10`);
        
        console.log(response.data);
        return response.data.data.map((val) => {
            return {
                gifURL: response.data.data[0].images.fixed_width.url
            }
        });
    } catch (error) {
        display.innerHTML = "";
        console.log(error);
    }
}

function getSearchInputData() {
    const dataInput = document.getElementById("search-input");
    console.log(dataInput.value);
    return dataInput.value;
}

async function generateGifs(e) {
    e.preventDefault();

    display.innerHTML = "";

    const inputData = getSearchInputData();
    const gifs = await grabGifsFromApi(inputData)

    const firstRow = document.createElement("div");
    const secondRow = document.createElement("div");

    firstRow.classList.add("row", "first");
    secondRow.classList.add("row", "second");

    for (let i = 0; i < gifs.length/2; i++) {
        const image = document.createElement("img");
        image.src = gifs[i].gifURL;
        firstRow.appendChild(image);
    }    

    for (let i = 5; i < gifs.length; i++) {
        const image = document.createElement("img");
        image.src = gifs[i].gifURL;
        secondRow.appendChild(image);
    }

    display.appendChild(firstRow);
    display.appendChild(secondRow);
};

function clearGifs() {
    display.innerHTML = "";
    display.innerHTML = "... GIF here ...";
}