// Gets all the DOM objects
const DOM = (() => {
    const squares = document.querySelectorAll('.square');
    const startGameBtn = document.querySelector('.startBtn');
    const gameContainer = document.querySelector('.gameContainer');

    return { startGameBtn, squares, gameContainer };
})();

// Builds the board and players and deals with game logic
const GameBoard = (() =>  {
    const container = DOM.gameContainer;
    const startButton = DOM.startGameBtn;
    const winConditions = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
    let players = [];
    let gameBoard = [];
    let roundCounter = 1;
    
    startButton.addEventListener('click', () => {
        players.push(PlayerFactory('p1', 'X'), PlayerFactory('p2', 'O'));
        renderBoard();
        startButton.disabled = true;
    });

    function renderBoard() {
        for (let i = 0; i < 9; i++) {
            const squareView = document.createElement('div');
            squareView.style.backgroundColor = 'blue';
            squareView.textContent = ''
            squareView.style.display = 'flex';
            squareView.style.justifyContent = 'center';
            squareView.style.alignItems = 'center';
            squareView.setAttribute('data-index', `${i}`)
            squareView.addEventListener('click', (e) => {
                updateSquare(e.target)
            })
            gameBoard.push(squareView);
            container.appendChild(squareView);
        }
        console.log(gameBoard);
    }

    function updateSquare(square) {
        if (roundCounter % 2  != 0 && square.textContent == '') {
            // player1 turn
            square.textContent = 'X';
            roundCounter++;
            checkForWinner();
        } else if (square.textContent == '') {
            // player2 turn
            square.textContent = 'O';
            roundCounter++;
            checkForWinner();
        }
    }

    function checkForWinner() {
        //
    }
    return { gameBoard, players };

})();


const PlayerFactory = (player, choice, myTurn) => {
    return { player, choice };
};

