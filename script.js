let functionDataPerId = {};
let functionButtons = [];

let currentFunctions = [];
let currentIndex = 0;
let isShowingFront = true;
let board = null;

function generateButton(functionData) {
    const button = document.createElement('button');
    button.className = 'button';
    button.setAttribute('id', functionData['id']);
    button.setAttribute('data-isSelected', 'false');
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
            functionDataPerId[functionData["id"]] = functionData;
        }
    )
    setStatusOfButtons();
}

function setAllButtonsTo(trueOrFalse) {
    functionButtons.forEach(button => {
        button.setAttribute('data-isSelected', trueOrFalse);
    });
    setStatusOfButtons();
}


function getSelectedButtons() {
    const selectedButtons = document.querySelectorAll('button[data-isSelected="true"]');
    return Array.from(selectedButtons);
}

function changeStatus(button) {
    const isSelected = button.getAttribute('data-isSelected') === 'true';
    button.setAttribute('data-isSelected', !isSelected);
    setStatusOfButtons();
}


function setStatusOfButtons() {
    const startButton = document.getElementById('start-button');
    const randomYesButton = document.getElementById('option-yes');
    const randomNoButton = document.getElementById('option-no');

    const nbSelectedButtons = getSelectedButtons().length;
    nbSelectedButtons === 0 ? startButton.classList.add('disabled') : startButton.classList.remove('disabled');
}


function setRandomOrder(random) {
    if (random) {
        document.getElementById('option-yes').classList.add('active');
        document.getElementById('option-no').classList.remove('active');
    } else {
        document.getElementById('option-yes').classList.remove('active');
        document.getElementById('option-no').classList.add('active');
    }
}

function isRandomSort() {
    const buttonYes = document.getElementById('option-yes');
    const buttonNo = document.getElementById('option-no');

    if (buttonYes.classList.contains('active')) {
        return true;
    } else if (buttonNo.classList.contains('active')) {
        return false;
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function showFlashcards() {
    let functionsTypes = getSelectedButtons().map(btn => btn.id);
    currentFunctions = [];
    functionsTypes.forEach(id => {
        let functionsToAdd = functionDataPerId[id]["functions"];
        currentFunctions = currentFunctions.concat(functionsToAdd)
    })
    if (isRandomSort()) {
        currentFunctions = shuffleArray(currentFunctions);
    }
    showFlashcard();
}

function showFlashcard() {
    currentIndex = 0;
    isShowingFront = true;

    document.getElementById('entry-page').classList.remove('active');
    document.getElementById('flashcard').classList.add('active');
    updateFlashcard();
}

function getCurrentFunction() {
    return currentFunctions[currentIndex];
}

function updateFlashcard() {
    const flashcardContent = document.getElementById('flashcard-content');
    const graphDiv = document.getElementById('graph');

    if (isShowingFront) {
        // noinspection JSUnresolvedVariable
        const parsedFunction = math.parse(getCurrentFunction().equation);
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
        const currentFunction = getCurrentFunction();
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
        updateFlashcard();
        isShowingFront = true;
    }
}

function nextFlashcard() {
    if (currentIndex < currentFunctions.length - 1) {
        currentIndex++;
        isShowingFront = true;
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


