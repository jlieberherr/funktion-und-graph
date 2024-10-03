let isShowingFront = true;
let currentFunction = '';
let currentIndex = 0;
let currentType = '';
let board = null;
let isRandomOrder = true; // Default is random order (Ja)

let functionDataPerId = {};
let functionButtons = [];

function generateButton(functionData) {
    const button = document.createElement('button');
    button.className = 'button';
    button.setAttribute('id', functionData['id']);
    button.setAttribute('data-isSelected', 'true');
    button.style.backgroundColor = functionData["color"];
    button.innerHTML = functionData["description"];
    button.setAttribute('onclick', 'changeStatus(this)');

    const container = document.getElementById('button-container');
    container.appendChild(button);
    return button;
}

function generateAllButtons() {
    functionsData.forEach(functionData => {
            functionButtons.push(generateButton(functionData));
            functionDataPerId[functionData["id"]] = functionsData;
        }
    )
}

function setAllButtonsTo(trueOrFalse) {
    functionButtons.forEach(button => {
        button.setAttribute('data-isSelected', trueOrFalse);
    });
    setStatusOfStartButton();
}


function getSelectedButtons() {
    const selectedButtons = document.querySelectorAll('button[data-isSelected="true"]');
    return Array.from(selectedButtons);
}

function changeStatus(button) {
    const isSelected = button.getAttribute('data-isSelected') === 'true';
    button.setAttribute('data-isSelected', !isSelected);
    setStatusOfStartButton();
}

function isAtMostOneFunctionTypeSelected() {
    return getSelectedButtons().length !== 0;
}

function setStatusOfStartButton() {
    const startButton = document.getElementById('start-button');
    isAtMostOneFunctionTypeSelected() === false ? startButton.classList.add('disabled') : startButton.classList.remove('disabled');
}


function setRandomOrder(random) {
    isRandomOrder = random;

    // Ensure exactly one button is active
    if (random) {
        document.getElementById('option-yes').classList.add('active');
        document.getElementById('option-no').classList.remove('active');
    } else {
        document.getElementById('option-yes').classList.remove('active');
        document.getElementById('option-no').classList.add('active');
    }
}

function showFlashcards() {
    let functionsTypes = getSelectedButtons().map(btn => btn.id);
    console.log(functionsTypes);
}

// Ensure the "Ja" button is active by default
window.onload = function () {
    setRandomOrder(true);
};

// Show a random side (front or back) when the flashcard is displayed
function showFlashcard(type) {
    currentType = type;
    currentIndex = 0;
    currentFunction = getCurrentFunction();

    isShowingFront = Math.random() >= 0.5;

    document.getElementById('entry-page').classList.remove('active');
    document.getElementById('flashcard').classList.add('active');
    updateFlashcard();
}

function getCurrentFunction() {
    return functionDataPerId[currentType][currentIndex];
}

function updateFlashcard() {
    const flashcardContent = document.getElementById('flashcard-content');
    const graphDiv = document.getElementById('graph');

    if (isShowingFront) {
        // noinspection JSUnresolvedVariable
        const parsedFunction = math.parse(currentFunction.equation);
        // noinspection JSUnresolvedFunction
        const latexString = `
      f = \\left\\{ 
      \\begin{array}{l}
      \\mathbb{R} \\to \\mathbb{R} \\\\
      x \\mapsto ${parsedFunction.toTex({parenthesis: 'auto'})}
      \\end{array} 
      \\right.
    `;
        flashcardContent.innerHTML = `\\(${latexString}\\)`;
        // noinspection JSUnresolvedVariable
        MathJax.typeset();
        flashcardContent.style.display = 'flex';
        graphDiv.style.display = 'none';
    } else {
        flashcardContent.innerHTML = '';
        flashcardContent.style.display = 'none';
        graphDiv.style.display = 'flex';
        plotGraph(currentFunction.equation, currentFunction.points, currentFunction.boundingbox);
    }
}

function flipCard() {
    isShowingFront = !isShowingFront;
    updateFlashcard();
}

function prevFlashcard() {
    if (currentIndex > 0) {
        currentIndex--;
        currentFunction = getCurrentFunction();
        isShowingFront = Math.random() >= 0.5;
        updateFlashcard();
    }
}

function nextFlashcard() {
    if (currentIndex < functionDataPerId[currentType].length - 1) {
        currentIndex++;
        currentFunction = getCurrentFunction();
        isShowingFront = Math.random() >= 0.5;
        updateFlashcard();
    }
}

function goBack() {
    document.getElementById('flashcard').classList.remove('active');
    document.getElementById('entry-page').classList.add('active');
}

function plotGraph(funcString, points, boundingbox) {
    if (board !== null) {
        // noinspection JSUnresolvedVariable
        JXG.JSXGraph.freeBoard(board);
    }

    // noinspection JSUnresolvedVariable
    board = JXG.JSXGraph.initBoard('graph', {
        boundingbox: boundingbox,
        axis: true,
        keepAspectRatio: true,
        showNavigation: false,
        grid: true,
        gridX: 1,
        gridY: 1,
        showCopyright: false
    });

    // noinspection JSUnresolvedVariable
    const parsedFunction = math.compile(funcString);

    let f = function (x_) {
        return parsedFunction.evaluate({x: x_});
    };

    board.create('functiongraph', [f], {strokeColor: 'blue', strokeWidth: 2});

    points.forEach(point => {
        const [x, y] = point;
        board.create('point', [x, y], {size: 4, color: 'red', name: '', fixed: true});
        board.create('text', [x + 0.2, y + 0.2, `(${x}|${y})`], {fontSize: 12, fixed: true});
    });
}


window.onload = generateAllButtons;


