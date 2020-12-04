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
    let players = [];
    let gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
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
            squareView.addEventListener('click', (e) => {
                updateSquare(e.target)
            })
            container.appendChild(squareView);

            const square = { 'mark': '' };
            gameBoard.push(square);
        }
    }

    function updateSquare(square) {
        if (roundCounter % 2  != 0) {
            // player1 turn
            square.textContent = 'X';
        } else {
            // player2 turn
            square.textContent = 'O';
        }
        roundCounter++
    }
    return { gameBoard, players };

})();


const PlayerFactory = (player, choice, myTurn) => {
    return { player, choice };
};

