import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [winner, setWinner] = useState(null);
    const [player, setPlayer] = useState(1);
    const [game, setGame] = useState(true);

    const squareSelected = () => {
        setPlayer((currentPlayer) => (currentPlayer === 0 ? 1 : 0));
    };

    const endGame = () => {
        setGame(false);
    };

    const resetGame = () => {
        setGameBoard(initialGameBoard);
        setGame(true);
        setWinner(null);
        setPlayer(1);
    };

    const checkWinner = (gameBoard: Array<any>) => {
        for (let i = 0; i < 3; i++) {
            if (
                gameBoard[i][0] !== null &&
                gameBoard[i][0] === gameBoard[i][1] &&
                gameBoard[i][1] === gameBoard[i][2]
            ) {
                return gameBoard[i][0];
            }
        }
        for (let i = 0; i < 3; i++) {
            if (
                gameBoard[0][i] !== null &&
                gameBoard[0][i] === gameBoard[1][i] &&
                gameBoard[1][i] === gameBoard[2][i]
            ) {
                return gameBoard[0][i];
            }
        }
        if (
            gameBoard[0][0] !== null &&
            gameBoard[0][0] === gameBoard[1][1] &&
            gameBoard[1][1] === gameBoard[2][2]
        ) {
            return gameBoard[0][0];
        }
        if (
            gameBoard[0][2] !== null &&
            gameBoard[0][2] === gameBoard[1][1] &&
            gameBoard[1][1] === gameBoard[2][0]
        ) {
            return gameBoard[0][2];
        }
        const allSquaresFilled = gameBoard.every((row) =>
            row.every((cell: number) => cell !== null)
        );

        if (allSquaresFilled) {
            return 3;
        }
        return null;
    };

    const handleClick = (rowIndex: number, columnIndex: number) => {
        setGameBoard((prevGameBoard: Array<any>) => {
            const updatedGameBoard: Array<any> = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
            ];
            if (updatedGameBoard[rowIndex][columnIndex] !== null) {
                return updatedGameBoard;
            }
            updatedGameBoard[rowIndex][columnIndex] = player;

            const winner = checkWinner(updatedGameBoard);
            if (winner !== null) {
                setWinner(winner);
                endGame();
            }
            return updatedGameBoard;
        });

        squareSelected();
    };

    return (
        <div className="flex items-center justify-center py-4">
            <div className="board lg:py-4 lg:px-8 py-2 px-4 rounded-md shadow-lg bg-zinc-600">
                <h2 className="lg:text-2xl text-xl font-bold text-center">
                    Tic-Tac-Toe
                </h2>
                <div className="leaderboards flex items-center my-2 justify-between">
                    <div>
                        {winner === null ? (
                            <span>
                                Player {player === 0 ? "0" : "X"} chance
                            </span>
                        ) : (
                            <div className="flex flex-col space-y-2 items-center">
                                <span className="text-lg">
                                    {winner === 3 ? (
                                        "Match tie."
                                    ) : (
                                        <>
                                            {winner === 0 && "0"}
                                            {winner === 1 && "X"} is the winner
                                        </>
                                    )}
                                </span>

                                <button
                                    className="py-2 px-4 bg-red-800 text-white hover:bg-red-700 font-semibold"
                                    onClick={resetGame}
                                >
                                    Restart Game
                                </button>
                            </div>
                        )}
                    </div>
                    <span></span>
                </div>
                <ol className="list-none">
                    {game &&
                        gameBoard.map((rows, rowsIndex) => (
                            <li key={rowsIndex} className="row">
                                <ol className="flex list-none">
                                    {rows.map((column, columnIndex) => (
                                        <li
                                            key={columnIndex}
                                            onClick={() =>
                                                handleClick(
                                                    rowsIndex,
                                                    columnIndex
                                                )
                                            }
                                            className="lg:w-24 w-20 m-2 cursor-pointer hover:bg-zinc-700 list-none select-none lg:h-24 h-20 bg-zinc-800 flex items-center justify-center lg:text-4xl text-3xl max-md:text-2xl font-semibold"
                                        >
                                            {column === null
                                                ? ""
                                                : column === 0
                                                ? "0"
                                                : "X"}
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    );
}
