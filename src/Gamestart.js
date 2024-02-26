import React, { useState, useEffect } from 'react';
import './Game.css';

const Gamestart = () => {
    const [userChoice, setUserChoice] = useState('rock');
    const [computerChoice, setComputerChoice] = useState('rock');
    const [userPoints, setUserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);
    const [turnResult, setTurnResult] = useState(null);
    const [result, setResult] = useState("Let's see who wins");
    const [gameOver, setGameOver] = useState(false);

    const choices = ['rock', 'paper', 'scissors'];
// user making a choice.
    const handleOnClick = (choice) => {
        setUserChoice(choice)
        generateComputerChoice()
    }
// computer making a choice.
    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }
// resetting the game.
    const reset = () => {
        window.location.reload()
    }

    useEffect(() => {
        const comboMoves = userChoice + computerChoice
        if (userPoints <= 4 && computerPoints <= 4) {
 // when the user gets a point or wins.           
            if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper') {
                const updatedUserPoints = userPoints + 1 
                setUserPoints(updatedUserPoints)
                setTurnResult('User got the point')
                if (updatedUserPoints === 5) {
                    setGameOver(true)
                    setResult('User wins!')
                }
            }
// when the computer gets a point or wins.
            if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
                const updatedComputerPoints = computerPoints + 1
                setComputerPoints(updatedComputerPoints)
                setTurnResult('Computer got the point')
                if (updatedComputerPoints === 5) {
                    setGameOver(true)
                    setResult('Computer wins!')
                }
            }
// when its a draw.
            if(comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors') {
                setTurnResult('Noone got a point')
            }
        }
    }, [userChoice, computerChoice])

    return (
    <div className="Gamestart">
        <h1 className='heading'>Rock Paper Scissors</h1>
        <div className='score'>
            <h1>User Points: {userPoints}</h1>
            <h1>Computer Points: {computerPoints}</h1>
        </div>
        <div className='choice'>
            <div className='choice-user'>
                <img className='user-hand' src={`../images/${userChoice}.png`} />
            </div>
            <div className='choice-computer'>
                <img className='computer-hand' src={`../images/${computerChoice}.png`} />
            </div>
        </div>
{/* Inputs the choice made and disables buttons when the game is over. */}
        <div children='button-div'>
            {choices.map((choice, index) =>
             <button className='button' key={index} onClick={() => handleOnClick(choice)} disabled={gameOver}>
                {choice}
             </button>
            )}
        </div>

        <div className='result'>
            <h1> Turn Result: {turnResult}</h1>
            <h1> Final Result: {result}</h1>
        </div>
{/* Condition when 'gameOver' is true. Restart game button appears.  */}
        <div className='button-div'>
            {gameOver && 
            <button className='button' onClick={() => reset()} > Restart Game</button>}
        </div>
    </div>
    );
}

export default Gamestart;