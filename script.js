let isShowingFront = true;
let currentFunction = '';
let currentIndex = 0;
let currentType = '';
let board = null;

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
    return functionsData[currentType][currentIndex];
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
      x \\mapsto ${parsedFunction.toTex()}
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
    if (currentIndex < functionsData[currentType].length - 1) {
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
