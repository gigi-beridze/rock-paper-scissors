const game = () => {
    const introScreen = document.querySelector('.intro')
    const match = document.querySelector('.match')
    let pScore = 0
    let cScore = 0

    // start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button')

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn') 
        })
    }
    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll('.hands img')
        
        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })
        // random computer options
        
        const computerOptions = ['rock','paper','scissors']
        options.forEach((option) => {
            option.addEventListener('click',function() {
                playerHand.src = './components/assets/rock.png'
                computerHand.src = './components/assets/rock.png'
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]
                // call compare hands

                setTimeout(() => {
                    compareHands(this.textContent,computerChoice)
                    // Image update
                    playerHand.src = `./components/assets/${this.textContent}.png`
                    computerHand.src = `./components/assets/${computerChoice}.png`
                },2000)

                // animation
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            })
        })
    }
    const restartGame = () => {
        const restartBtn = document.querySelector('.restartButton')
        
        restartBtn.addEventListener('click', () => {
            introScreen.classList.remove('fadeOut')
            match.classList.remove('fadeIn')
            introScreen.classList.add('entered')
            match.classList.add('entered')
        })
    }
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")

        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }
    const compareHands = (playerChoice, computerChoice) => {
        // update text
        const winner = document.querySelector('.winner')
        // check for tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie'
            return;
        }
        // check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'You Win!'
                pScore++
                updateScore()
                return;
            }else{
                winner.textContent = 'Computer Win!'
                cScore++
                updateScore()
                return;
            }
        }
        // check for paper 
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Win!'
                cScore++
                updateScore()
                return;
            }else{
                winner.textContent = 'You Win!'
                pScore++
                updateScore()
                return;
            }
        }
        // check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Win!'    
                cScore++
                updateScore()
                return;
            }else{
                winner.textContent = 'You Win!'
                pScore++
                updateScore()
                return;
            }
        }
    }
    // call all inner function
    startGame()
    playMatch()
    restartGame()
}

// start the game function
game()