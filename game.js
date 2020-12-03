const View = ((page) => {
    const squares = [];
    const setupBoard = (squareMark) => {
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.style.backgroundColor = 'blue';
            square.textContent = `${squareMark}`;
            square.style.display = 'flex';
            square.style.justifyContent = 'center';
            square.style.alignItems = 'center';
            page.gameContainer.appendChild(square);
            squares.push(square);
        }
    }

    const updateUI = () => {
        squares.forEach(e => {
            e.textContent = ''
        });
    }
    

    return { setupBoard, updateUI }

})({
    // Passing these as arguments of the view
    'gameContainer': document.querySelector('.gameContainer')
});

const GameBoard = (() =>  {
    const startButton = document.querySelector('.btn');
    const board = [];
    const square = {
        'mark': '-'
    };

    for (let i = 0; i < 9; i++) {
        board.push(square); 
    }

    View.setupBoard(square.mark);

    // Event listeners
    startButton.addEventListener('click', () => {
        board.forEach(square => {
            View.updateUI();
        })
    });



    return { board };
})();

const Controller = (() => {

})();

const PlayerFactory = (player, choice) => {
    return { player, choice };
};

const newPlayer = PlayerFactory('p1', 'x');
